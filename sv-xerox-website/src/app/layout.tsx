import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SV Xerox Ongole | Professional Printing Services - A0 Large Format, Stickers, Boards",
  description: "SV Xerox in Ongole offers A0 large-format printing, non-tearable stickers (13×19), premium board prints (gold, silver, textured), and fast color/BW document printing. Professional quality guaranteed.",
  keywords: [
    "SV Xerox Ongole",
    "A0 printing Ongole", 
    "Large format printing Ongole",
    "Sticker printing 13x19 Ongole",
    "Non tearable stickers Ongole",
    "Board printing 12x18 13x19 Ongole",
    "Gold silver textured board printing Ongole",
    "Document printing Ongole"
  ],
  authors: [{ name: "SV Xerox" }],
  creator: "SV Xerox",
  publisher: "SV Xerox",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://svxerox.in",
    siteName: "SV Xerox Ongole",
    title: "SV Xerox Ongole | Professional Printing Services",
    description: "Professional printing center in Ongole offering A0 large format, premium stickers, specialty boards, and fast document printing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SV Xerox Ongole - Professional Printing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Xerox Ongole | Professional Printing Services",
    description: "Professional printing center in Ongole offering A0 large format, premium stickers, specialty boards, and fast document printing.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrintShop",
              "name": "SV Xerox",
              "image": "https://svxerox.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Santhapet",
                "addressLocality": "Ongole",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "523001",
                "addressCountry": "IN"
              },
              "telephone": "+91-9885982762",
              "email": "svxeroxogl@gmail.com",
              "url": "https://svxerox.in",
              "openingHours": [
                "Mo-Sa 09:00-21:00"
              ],
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Ongole"
              },
              "description": "Professional print center in Ongole offering large format (up to A0), premium stickers, specialty boards, and fast document printing.",
              "serviceType": [
                "Large Format Printing",
                "Sticker Printing", 
                "Board Printing",
                "Document Printing",
                "Photocopying"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}