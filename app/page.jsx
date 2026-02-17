"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import { Card } from "@/components/card";
import { HOME } from "@/data";
import { title, subtitle } from "@/components/primitives";

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
          className="w-full md:h-[50vh] lg:h-[80vh]"
        >
          {heroSection.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.desktopSrc}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-center hidden w-screen h-[50vh] lg:h-[80vh] md:block"
                width={1920}
                height={1080}
              />
              <Image
                src={image.mobileSrc}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-center w-screen h-[50vh] lg:h-[80vh] md:hidden"
                width={1080}
                height={1920}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl py-8 px-6 bg-white text-center">
        <div className="container mx-auto space-y-4">
          <div>
            <h1 className={title()}>{heroSection.heading}</h1>
            <p className={subtitle()}>{heroSection.subheading}</p>
          </div>
          <div className="space-y-2 text-sm text-justify sm:text-md sm:text-center">
            {heroSection.introduction}
          </div>
          <p className="font-semibold text-sm text-justify sm:text-md sm:text-center">
            {heroSection.callToAction}
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Brands</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandSection.map(({ name, logo, href, description }, index) => (
              <Card
                key={index}
                link={href}
                image={logo.src}
                title={name}
                excerpt={description}
                contain
                headingLevel="h3"
              />
            ))}
          </div>
          {brandSection.length > 3 ? (
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
      <section className="mx-auto max-w-7xl px-6 py-12 flex justify-center gap-4 items-center flex-col-reverse bg-white text-center md:flex-row">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">{aboutSection.title}</h2>
          <div className="space-y-2 max-w-xl text-sm text-justify sm:text-md">
            {aboutSection.description}
          </div>
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
          src={aboutSection.image}
          alt={aboutSection.alt}
          height={400}
          width={400}
        />
      </section>

      {/* Blogs Section */}
      {blogSection.blogs.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogSection.blogs
                .slice(0, 3)
                .map(({ slug, image, title, excerpt }, index) => (
                  <Card
                    key={index}
                    link={`/blogs/${slug}`}
                    image={image}
                    title={title}
                    excerpt={excerpt}
                    headingLevel="h3"
                  />
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
      )}

      {/* Contact Us Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 flex justify-center gap-4 items-center flex-col bg-white text-center md:flex-row">
        <Image
          src={contactSection.image}
          alt={contactSection.alt}
          height={400}
          width={400}
        />
        <div className="mx-auto flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">{contactSection.title}</h2>
          <div className="space-y-2 max-w-xl text-sm sm:text-md">
            {contactSection.description}
          </div>
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
