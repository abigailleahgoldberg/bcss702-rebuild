import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: {
    default: "Butler's Construction & Service Solutions | Las Vegas General Contractor",
    template: "%s | Butler's Construction Las Vegas",
  },
  description:
    "Butler's Construction & Service Solutions is Las Vegas's trusted general contractor. Residential & commercial remodeling, kitchen & bathroom renovations, design-build, and water line repairs. Licensed & insured.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Butler's Construction & Service Solutions",
  },
  metadataBase: new URL("https://bcss702.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
