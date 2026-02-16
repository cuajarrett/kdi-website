import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import { BRANDS } from "@/data";
import { title } from "@/components/primitives";
import Gallery from "@/components/gallery";

// Static paths generation
export async function generateStaticParams() {
  return BRANDS.map(({ slug }) => ({
    brand: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { brand } = await params;
  const brandData = BRANDS.find((b) => b.slug === brand);
  if (!brandData) {
    return { title: "Brand Not Found" };
  }

  const ogImage = brandData.gallery.length > 0
    ? { url: brandData.gallery[0].src, width: 1200, height: 630, alt: brandData.name }
    : { url: brandData.logo.src, alt: brandData.logo.alt };

  return {
    title: `${brandData.name} — Products, Designs & Gallery`,
    description: brandData.metaDescription,
    keywords: [
      brandData.name,
      `${brandData.name} Philippines`,
      "German kitchen brand",
      "kitchen designs",
      "Kassi Distributors",
    ],
    openGraph: {
      title: `${brandData.name} — Products, Designs & Gallery`,
      description: brandData.metaDescription,
      url: `https://kassidinc.com/brands/${brandData.slug}`,
      siteName: "Kassi Distributors Inc.",
      locale: "en_PH",
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${brandData.name} — Products, Designs & Gallery`,
      description: brandData.metaDescription,
      images: [ogImage.url],
    },
    alternates: {
      canonical: `https://kassidinc.com/brands/${brandData.slug}`,
    },
  };
}

// Page Component
export default async function BrandItemPage({ params }) {
  const { brand } = await params;

  // Find the brand data by slug
  const brandData = BRANDS.find((b) => b.slug === brand);

  if (!brandData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
        <div className="max-w-md text-center bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Brand Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The brand you're looking for doesn't exist or might have been
            removed. Don't worry, there's more to explore!
          </p>
          <Button className="w-full" color="primary" as={Link} href="/brands">
            Back to Brands
          </Button>
        </div>
      </div>
    );
  }

  const { name, logo, description, catalogue, comingSoon, gallery } = brandData;

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: name,
    logo: `https://kassidinc.com${logo.src}`,
    description: brandData.metaDescription,
    url: `https://kassidinc.com/brands/${brandData.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kassidinc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Brands",
        item: "https://kassidinc.com/brands",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: name,
        item: `https://kassidinc.com/brands/${brandData.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([brandSchema, breadcrumbSchema]),
        }}
      />
      {/* Hero Section */}
      {!comingSoon ? (
        <section className="flex justify-center items-center p-4 relative bg-gray-100 flex-col lg:gap-8 lg:flex-row sm:p-12">
          <div className="relative h-48 md:h-64 w-screen">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              fill
            />
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-sm text-gray-700 mb-4 text-justify sm:text-lg">
              {description}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                as={Link}
                href="/showroom"
                color="primary"
                variant="solid"
              >
                Visit Us
              </Button>
              <Button
                as={Link}
                href={catalogue}
                color="primary"
                variant="solid"
                isExternal
              >
                Download Catalogue
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="min-h-[50vh] flex flex-col justify-center items-center my-auto">
          <div className="relative h-48 md:h-64 w-64">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              fill
            />
          </div>
          <p className="text-sm text-gray-700 mb-4 sm:text-lg">{description}</p>
        </section>
      )}

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <section className="mt-10 bg-white">
          <div className="container mx-auto">
            <h2 className={title()}>Gallery</h2>
            <Gallery gallery={gallery} />
          </div>
        </section>
      )}
    </>
  );
}
