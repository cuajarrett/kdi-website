import { Card } from "@/components/card";
import { title } from "@/components/primitives";
import { BRANDS } from "@/data";

export const metadata = {
  title: "Our Brands — Nolte Küchen, Express Küchen & More",
  description:
    "Discover the premium German kitchen brands available through Kassi Distributors Inc. — Nolte Küchen, Express Küchen, and Nolte NEO. Made in Germany, available in the Philippines.",
  keywords: [
    "Nolte Küchen",
    "Express Küchen",
    "Nolte NEO",
    "German kitchen brands",
    "kitchen brands Philippines",
    "Made in Germany kitchen",
  ],
  openGraph: {
    title: "Our Brands — Nolte Küchen, Express Küchen & More",
    description:
      "Discover the premium German kitchen brands available through Kassi Distributors Inc. — Nolte Küchen, Express Küchen, and Nolte NEO. Made in Germany, available in the Philippines.",
    url: "https://kassidinc.com/brands",
    siteName: "Kassi Distributors Inc.",
    locale: "en_PH",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Premium German kitchen brands by Kassi Distributors Inc.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Brands — Nolte Küchen, Express Küchen & More",
    description:
      "Discover the premium German kitchen brands available through Kassi Distributors Inc. — Nolte Küchen, Express Küchen, and Nolte NEO. Made in Germany, available in the Philippines.",
    images: ["/gallery/Home/Hero_HomePage1_Desktop.webp"],
  },
  alternates: {
    canonical: "https://kassidinc.com/brands",
  },
};

export default function BrandsListPage() {
  return (
    <div>
      <h1 className={title()}>Our Brands</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANDS.map(({ name, logo, slug, description }, index) => (
          <Card
            key={index}
            link={`/brands/${slug}`}
            image={logo.src}
            title={name}
            excerpt={description}
            contain
          />
        ))}
      </div>
    </div>
  );
}
