// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/globals.css";
import clsx from "clsx";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  metadataBase: new URL("https://kassidinc.com"),
  title: {
    default:
      "Kassi Distributors Inc. | Premium International Home Brands for Filipino Homes",
    template: "%s | Kassi Distributors Inc.",
  },
  description:
    "Discover how Kassi Distributors Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
  openGraph: {
    title: "Kassi Distributors Inc.",
    type: "website",
    siteName: "Kassi Distributors Inc.",
    description:
      "Discover how Kassi Distributors Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Kassi Distributors Inc. Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kassi Distributors Inc.",
    description:
      "Discover how Kassi Distributors Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        alt: "Kassi Distributors Inc. Showroom",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://kassidinc.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Kassi Distributors Inc.",
                alternateName: "KDI",
                url: "https://kassidinc.com",
                logo: "https://kassidinc.com/logos/KDI Official Logo Files_KDI Official Logo.png",
                description:
                  "Kassi Distributors Inc. bridges global excellence with local aspirations, curating the finest international brands for Filipino homes.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "7646 Guijo Street, San Antonio Village",
                  addressLocality: "Makati",
                  addressRegion: "Metro Manila",
                  postalCode: "1203",
                  addressCountry: "PH",
                },
                telephone: "+63 2 8807 5238",
                email: "info@kassidinc.com",
                sameAs: [
                  "https://www.facebook.com/noltekuchenph",
                  "https://www.instagram.com/nolteph_official/?hl=en",
                  "https://www.linkedin.com/company/kassi-distributors-inc",
                ],
              }),
            }}
          />
        </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>
              {children}
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
