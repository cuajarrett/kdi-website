"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { HOME, FOOTER } from "@/data";

export default function HomePage() {
  const {
    heroSection,
    brandSection,
    aboutSection,
    blogSection,
    contactSection,
  } = HOME;

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-[70vh] sm:h-[75vh]"
        >
          {heroSection.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image.desktopSrc}
                  alt={image.alt}
                  srcSet={`
                    ${image.mobileSrc} 640w,
                    ${image.desktopSrc} 1280w
                  `}
                  loading="eager"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto space-y-4">
          <div>
            <h2 className="text-3xl font-bold">{heroSection.heading}</h2>
            <p className="text-gray-700 mb-6">{heroSection.subheading}</p>
          </div>
          <div className="space-y-2">{heroSection.introduction}</div>
          <p className="font-semibold">
            Call us at{" "}
            <Link href={`tel:${FOOTER.contactInformation.telephone}`}>
              {FOOTER.contactInformation.telephone}
            </Link>{" "}
            or{" "}
            <Link href={`tel:${FOOTER.contactInformation.phone}`}>
              {FOOTER.contactInformation.phone}
            </Link>{" "}
            to start planning your dream home today!
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Brands</h2>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {brandSection.map(({ name, logo, href }) => (
              <Link key={name} href={href}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
          {brandSection.length > 10 ? (
            <div className="text-center mt-8">
              <Button
                as={Link}
                href="/brands"
                color="primary"
                variant="solid"
                size="lg"
              >
                View All Brands
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 flex justify-center gap-4 items-center flex-col-reverse bg-white text-center md:flex-row">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">{aboutSection.title}</h2>
          <div className="space-y-2">{aboutSection.description}</div>
          <Button
            as={Link}
            className="mt-6"
            href={aboutSection.link}
            color="primary"
            variant="solid"
            size="lg"
          >
            {aboutSection.cta}
          </Button>
        </div>
        <Image
          isZoomed
          src={aboutSection.image}
          alt={aboutSection.alt}
          width={600}
        />
      </section>

      {/* Blogs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogSection.blogs.slice(0, 3).map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="border rounded-lg p-4 shadow flex flex-col transition hover:shadow-xl"
              >
                <Image src={blog.image} alt={blog.title} />
                <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
              </Link>
            ))}
          </div>
          {blogSection.blogs.length > 3 ? (
            <div className="text-center mt-8">
              <Button
                as={Link}
                href={blogSection.link}
                color="primary"
                variant="solid"
                size="lg"
              >
                {blogSection.cta}
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 flex justify-center gap-4 items-center flex-col bg-white text-center md:flex-row">
        <Image
          isZoomed
          src={contactSection.image}
          alt={contactSection.alt}
          width={600}
        />
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">{contactSection.title}</h2>
          <div className="space-y-2">{contactSection.description}</div>
          <Button
            className="mt-6"
            as={Link}
            href={contactSection.link}
            color="primary"
            variant="solid"
            size="lg"
          >
            {contactSection.cta}
          </Button>
        </div>
      </section>
    </>
  );
}
