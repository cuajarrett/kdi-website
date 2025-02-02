import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import { BRANDS } from "@/data/brands";
import { subtitle, title } from "@/components/primitives";
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
  if (!brandData) return notFound();

  return {
    title: `${brandData.name} | Explore ${brandData.name} Products & Designs`,
    description: brandData.description,
    openGraph: {
      title: `${brandData.name}`,
      description: brandData.description,
      url: `https://kassidinc.com/brands/${brandData.slug}`,
      siteName: "Kassi Distributors Inc.",
      images: [brandData.logo.src],
      type: "website",
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
        <div className="max-w-md text-center bg-white p-8 shadow-lg rounded-lg">
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

  return (
    <>
      {/* Hero Section */}
      {!comingSoon ? (
        <section className="flex justify-center items-center p-4 relative bg-gray-100 rounded-xl flex-col lg:gap-8 lg:flex-row sm:p-12">
          <div className="relative h-48 md:h-64 w-screen">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              fill
            />
          </div>
          <div className="flex flex-col text-center sm:text-left">
            <h3 className="text-3xl font-bold">{name}</h3>
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
