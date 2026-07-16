import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatActions from "@/components/float-actions";
import QuoteSticky from "@/components/quote-sticky";
import CookieConsent from "@/components/cookie-consent";

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
  title: "Ebbatech Nigeria Limited | Industrial Warehouse Racking & Mobile Compactors",
  description: "Nigeria's leading provider of SEMA-compliant heavy-duty selective pallet racking, mobile archive compactors, longspan shelving, and spatial CAD warehouse audits.",
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
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatActions />
          <QuoteSticky />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}