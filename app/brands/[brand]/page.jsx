import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { BRANDS } from "@/data/brands";
import { subtitle, title } from "@/components/primitives";
import Gallery from "@/components/gallery";

// Static paths generation
export async function generateStaticParams() {
  return BRANDS.map(({ slug }) => ({
    brand: slug,
  }));
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

  const { name, logo, description, catalogue, gallery } = brandData;

  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 gap-8 relative bg-gray-100 rounded-xl flex-col sm:flex-row sm:p-12">
        <Image
          className="w-full sm:w-[75vw] lg:w-[40vw]"
          src={logo.src}
          alt={logo.alt}
          layout="fill"
        />
        <div className="flex flex-col text-center sm:text-left">
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-lg text-gray-700 mb-4">{description}</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button as={Link} href="/showroom" color="primary" variant="solid">
              Visit Us
            </Button>
            <Button as={Link} href="#" color="primary" variant="solid">
              Download Catalogue
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-10 bg-white">
        <div className="container mx-auto">
          <h2 className={title()}>Gallery</h2>
          <Gallery gallery={gallery} />
        </div>
      </section>
    </>
  );
}
