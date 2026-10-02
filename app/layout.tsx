import type { Metadata, Viewport } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Krad Global | Connecting Markets. Moving People. Creating Possibilities.",
  description:
    "Krad Global connects travel, trade, import-export, digital commerce and global business opportunities across India, UAE, USA and international markets.",
  keywords: [
    "Krad Global",
    "International Business Group",
    "Global Trade",
    "Import Export",
    "Corporate Travel",
    "Digital Commerce",
    "Dropshipping",
    "India UAE USA Business Corridors",
    "Cross-Border Sourcing",
    "Business Solutions",
  ],
  authors: [{ name: "Krad Global Group" }],
  creator: "Krad Global",
  publisher: "Krad Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kradglobal.com",
    title: "Krad Global | Connecting Markets. Moving People. Creating Possibilities.",
    description:
      "A diversified international business group connecting commerce, people, and opportunities across India, UAE, USA, and global markets.",
    siteName: "Krad Global",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Krad Global - Connecting Markets. Moving People. Creating Possibilities.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krad Global | Connecting Markets. Moving People. Creating Possibilities.",
    description:
      "A diversified international business group connecting commerce, people, and opportunities across India, UAE, USA, and global markets.",
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  alternates: {
    canonical: "https://kradglobal.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Krad Global",
    url: "https://kradglobal.com",
    logo: "https://kradglobal.com/logo.png",
    description:
      "International business group operating across India, UAE, USA, and global corridors in travel, trade, import-export, digital commerce, and advisory.",
    slogan: "Connecting Markets. Moving People. Creating Possibilities.",
    areaServed: ["India", "United Arab Emirates", "United States of America", "Worldwide"],
    knowsAbout: [
      "Global Travel & Tourism",
      "Import & Export",
      "International Trading",
      "Digital Commerce & Dropshipping",
      "Cross-Border Business Solutions",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "corporate inquiries",
      email: "contact@kradglobal.com",
      availableLanguage: ["English", "Hindi", "Arabic"],
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cinzel.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#05070a] text-slate-100 font-sans antialiased selection:bg-[#c9a86a]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
