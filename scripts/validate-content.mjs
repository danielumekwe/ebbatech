// Checks content/*.json before every build, so a bad edit fails the build
// and the last good version of the website stays online.
// Field rules come from .pages.yml, which is written in JSON syntax.
import fs from "node:fs";
import path from "node:path";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_ASSET_BYTES = 25 * 1024 * 1024; // Cloudflare's per-file limit

const errors = [];
const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const isEmpty = (value) => value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0);

const config = JSON.parse(fs.readFileSync(".pages.yml", "utf8").replace(/^#.*$/gm, ""));
const media = Object.fromEntries(config.media.map((m) => [m.name, m]));

// Exact, case-sensitive file names: the build server is stricter than macOS.
const publicFiles = new Set(
  fs.readdirSync("public", { recursive: true }).map((f) => "/" + f.split(path.sep).join("/")),
);
for (const file of publicFiles) {
  const stat = fs.statSync("public" + file);
  if (stat.isFile() && stat.size > MAX_ASSET_BYTES) errors.push(`public${file} is larger than 25 MB.`);
}

function checkValue(value, field, where) {
  if (field.type === "object") {
    if (!value || typeof value !== "object" || Array.isArray(value)) return errors.push(`${where} is missing.`);
    return checkObject(value, field.fields, where);
  }
  if (typeof value !== "string") return errors.push(`${where} must be text.`);

  if (field.pattern) {
    const { regex, message } = field.pattern;
    if (!new RegExp(regex).test(value)) errors.push(`${where}: "${value}" is not valid. ${message}`);
  }
  if (field.type === "select" && !field.options.values.includes(value)) {
    errors.push(`${where}: "${value}" is not one of the allowed choices.`);
  }
  if (field.type === "image") {
    const source = media[field.options.media];
    if (!value.startsWith(source.output + "/")) errors.push(`${where}: choose an image from "${source.label}".`);
    else if (!publicFiles.has(value)) errors.push(`${where}: image "${value}" does not exist.`);
    else {
      if (!source.extensions.includes(path.extname(value).slice(1))) errors.push(`${where}: "${value}" is not a JPG, PNG or WEBP image.`);
      if (fs.statSync("public" + value).size > MAX_IMAGE_BYTES) errors.push(`${where}: "${value}" is larger than 5 MB.`);
    }
  }
}

function checkField(value, field, where) {
  if (isEmpty(value)) {
    if (field.required || field.list?.min) errors.push(`${where} is required.`);
    return;
  }
  if (!field.list) return checkValue(value, field, where);
  if (!Array.isArray(value)) return errors.push(`${where} must be a list.`);
  value.forEach((item, i) => checkValue(item, field, `${where} #${i + 1}`));
}

function checkObject(value, fields, where) {
  // Pages CMS removes fields that the configuration does not declare.
  const known = new Set(fields.map((f) => f.name));
  for (const key of Object.keys(value)) {
    if (!known.has(key)) errors.push(`${where}: "${key}" is not declared in .pages.yml.`);
  }
  for (const field of fields) checkField(value[field.name], field, `${where} > ${field.label}`);
}

const entries = config.content.flatMap((entry) => (entry.type === "group" ? entry.items : [entry]));
const content = {};
for (const entry of entries) {
  let data;
  try {
    data = readJson(entry.path);
  } catch (error) {
    errors.push(`${entry.path} cannot be read: ${error.message}`);
    continue;
  }
  content[entry.name] = data;
  if (!entry.list) checkObject(data, entry.fields, entry.label);
  else if (!Array.isArray(data) || data.length === 0) errors.push(`${entry.label} needs at least one item.`);
  else data.forEach((item, i) => checkObject(item, entry.fields, `${entry.label} #${i + 1}`));
}

const listOf = (name) => (Array.isArray(content[name]) ? content[name] : []);

// Values that must be unique within their list.
for (const [name, keys] of Object.entries({ products: ["id", "slug", "name"], services: ["id", "slug"], projects: ["id", "slug"], clients: ["name"], sectors: ["name"] })) {
  for (const key of keys) {
    const seen = new Set();
    for (const item of listOf(name)) {
      if (seen.has(item[key])) errors.push(`${name}: "${item[key]}" is used more than once (${key}).`);
      seen.add(item[key]);
    }
  }
}

// Internal links must point to a page, section and enquiry type that exist.
const pages = ["/", "/about", "/services", "/products", "/projects", "/clients", "/contact", "/privacy", "/terms", "/cookies"];
const sections = {
  "/about": ["mission"],
  "/products": listOf("products").map((p) => p.slug),
  "/services": listOf("services").map((s) => s.slug),
};
const enquiryTypes = entries.find((e) => e.name === "products").fields.find((f) => f.name === "enquiryType").options.values;
const formSource = fs.readFileSync("components/contact-form.tsx", "utf8");
for (const type of enquiryTypes) {
  if (!formSource.includes(`"${type}"`)) errors.push(`Enquiry type "${type}" is missing from components/contact-form.tsx.`);
}

function checkLinks(value, where) {
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (/href$/i.test(key) && typeof child === "string" && child) {
      const url = new URL(child, "https://site.invalid");
      const page = url.pathname;
      const anchor = url.hash.slice(1);
      const type = url.searchParams.get("type");
      if (url.host !== "site.invalid" || !pages.includes(page)) errors.push(`${where}: link "${child}" does not match a page.`);
      else if (anchor && !sections[page]?.includes(anchor)) errors.push(`${where}: link "${child}" points to a section that does not exist.`);
      else if (type && !enquiryTypes.includes(type)) errors.push(`${where}: link "${child}" has an unknown enquiry type.`);
    } else checkLinks(child, where);
  }
}
for (const entry of entries) checkLinks(content[entry.name], entry.label);

if (errors.length) {
  console.error(`Content check failed (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log(`Content check passed: ${entries.length} content files.`);
