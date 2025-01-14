import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { BRANDS } from "@/data/brands";

// Static paths generation
export async function generateStaticParams() {
  return BRANDS.map(({ slug }) => ({
    brand: slug,
  }));
}

// Page Component
export default function BrandItemPage({ params }) {
  const { brand } = params;

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

  const { name, heroImage, tagLine, description, catalogue, gallery } =
    brandData;

  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center gap-8 relative bg-gray-100">
        <div className="relative w-full h-[50vh]">
          <Image
            src={heroImage}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-lg mt-2">{tagLine}</p>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 mb-4">{description}</p>
          <Button
            as={Link}
            href="#"
            color="primary"
            variant="solid"
            size="lg"
            className="mt-4"
          >
            Visit Us
          </Button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-10 px-6 bg-white text-center"></section>

      {/* Catalogue Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Catalogue</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {catalogue.map(({ title, fileType, src }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded shadow-sm"
              >
                <p className="text-lg font-medium">{title}</p>
                <span className="text-sm text-gray-600 mb-2">{fileType}</span>
                <Button
                  as={Link}
                  href={src}
                  color="primary"
                  variant="flat"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map(({ src, caption }, index) => (
              <div key={index} className="relative">
                <Image
                  src={src}
                  alt={caption}
                  width={400}
                  height={300}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-2 text-sm text-center text-gray-600">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
