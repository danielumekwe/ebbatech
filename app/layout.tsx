import type { Metadata } from "next";
import Script from "next/script";
import { Raleway, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatActions from "@/components/float-actions";
import CookieConsent from "@/components/cookie-consent";
import FirstVisitSplash from "@/components/first-visit-splash";
import ScrollReveal from "@/components/scroll-reveal";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ebbatech Nigeria | Industrial Storage, Racking & Shelving Solutions",
  description: "Ebbatech Nigeria Limited designs, manufactures and installs industrial racking, shelving and mobile storage systems. A one-stop shop for storage solutions in Lagos and across Nigeria.",
  metadataBase: new URL("https://www.ebbatech.com.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${raleway.variable} ${poppins.variable} font-sans bg-white dark:bg-[#080d0a] antialiased`}>
        <Script id="splash-seen-check" strategy="beforeInteractive">
          {`try { if (sessionStorage.getItem('ebbatech-splash-seen')) { document.documentElement.setAttribute('data-splash-seen', '1'); } } catch (e) {}`}
        </Script>
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Providers>
          <FirstVisitSplash />
          <ScrollReveal />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatActions />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}