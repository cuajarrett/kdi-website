"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import { HOME, ABOUT } from "@/data";

// Layout Component
export default function PageLayout({ children }) {
  const { aboutSection } = ABOUT;

  const { heroSection } = HOME;
  return (
    <>
      <section className="relative">
        <Swiper
          effect={"fade"}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-[80vh]"
        >
          {heroSection.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.desktopSrc}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-center hidden w-screen h-[80vh] md:block"
                width={1920}
                height={1080}
              />
              <Image
                src={image.mobileSrc}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-center w-screen h-[80vh] md:hidden"
                width={1080}
                height={1920}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white">
                <div className="container mx-16 lg:mx-auto max-w-4xl space-y-4">
                  {index === 0 && (
                    <h1 className="py-8 text-white font-myanmar text-5xl lg:text-[4rem] font-bold">
                      {aboutSection.title}
                    </h1>
                  )}
                  <div className="space-y-2 text-md lg:text-xl">
                    {aboutSection.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="mx-auto max-w-7xl py-8 px-6 flex-grow">{children}</div>
    </>
  );
}
