"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import { HOME } from "@/data/home";

export default function HomePage() {
  const { hero, featuredBrands, cta } = HOME;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="relative overflow-hidden">
          {hero.images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full h-[75vh] ${
                index === 0 ? "block" : "hidden"
              }`} // Adjust to implement a carousel
            >
              <Image
                src={image.src}
                alt={image.heading}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
                <h1 className="text-4xl font-bold">{image.heading}</h1>
                <p className="text-lg mt-2">{image.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">One-Stop Shop</h2>
          <p className="text-gray-700 mb-6">
            For more than a decade, we’ve been a premium source of luxury
            furniture and interior solutions. We’re committed to listening to
            your needs and creating your dream home.
          </p>
          <p className="font-semibold">
            Call us at <a href="tel:+1234567890">(02) 8989-4349</a> or{" "}
            <a href="tel:+1234567891">0917-411-9302</a> to start planning your
            dream home today!
          </p>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Brands
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredBrands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              as={Link}
              href="/brands"
              color="primary"
              variant="flat"
              size="lg"
            >
              View All Brands
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
