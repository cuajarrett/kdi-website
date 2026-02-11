import { Card } from "@/components/card";
import { title } from "@/components/primitives";
import { BRANDS } from "@/data";

export const metadata = {
  title: "Our Brands",
  description:
    "Explore the international home brands curated by Kassi Distributors Inc. for Filipino homes, including Nolte Küchen and Express Küchen kitchen solutions.",
  openGraph: {
    title: "Our Brands",
    description:
      "Explore the international home brands curated by Kassi Distributors Inc. for Filipino homes, including Nolte Küchen and Express Küchen kitchen solutions.",
    url: "https://kassidinc.com/brands",
    siteName: "Kassi Distributors Inc.",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Kassi Distributors Inc. Brands",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Brands",
    description:
      "Explore the international home brands curated by Kassi Distributors Inc. for Filipino homes, including Nolte Küchen and Express Küchen kitchen solutions.",
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
