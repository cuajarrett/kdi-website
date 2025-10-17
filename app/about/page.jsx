import Image from "next/image";

import { title } from "@/components/primitives";
import { ABOUT } from "@/data";

export async function generateMetadata() {
  return {
    title: "About Us | Kassi Distributors Inc.",
    description:
      "Discover Kassi Distributors Inc.—bridging global excellence with local aspirations. Learn about our history, mission, and commitment to design innovation.",
    openGraph: {
      title: "About Us | Kassi Distributors Inc.",
      description:
        "Discover Kassi Distributors Inc.—bridging global excellence with local aspirations. Learn about our history, mission, and commitment to design innovation.",
      url: "https://kassidinc.com/about",
      siteName: "Kassi Distributors Inc.",
      images: [
        {
          url: "/gallery/About/History 3_Current.webp",
          width: 1200,
          height: 630,
          alt: "Kassi Distributors Inc. About Us",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | Kassi Distributors Inc.",
      description:
        "Discover Kassi Distributors Inc.—bridging global excellence with local aspirations. Learn about our history, mission, and commitment to design innovation.",
      images: ["/gallery/About/History 3_Current.webp"],
    },
    alternates: {
      canonical: "https://kassidinc.com/about",
    },
  };
}

export default function AboutPage() {
  const {
    servicesSection,
    historySection,
    aboutSection,
    missionVisionSection,
  } = ABOUT;

  return (
    <>

      {/* About Section */}
      {/* <section className="text-center space-y-6 py-12 sm:py-16 lg:py-20 xl:py-24">
        <h1 className={title()}>{aboutSection.title}</h1>
        <div className="text-base text-justify space-y-4 text-gray-600 sm:text-center">
          {aboutSection.description}
        </div>
      </section> */}

      {/* Services Section */}
      <section className="text-center space-y-6 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* Section Title */}
        <h2 className={title()}>{servicesSection.title}</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesSection.services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-cover"
                  fill
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{service.title}</h3>

              {/* Description */}
              <p className="text-base text-gray-600 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="text-center space-y-4">
          <h2 className={title()}>History</h2>
          <p className="mx-auto max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            How it all started
          </p>
        </div>
        <ul className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-10 lg:max-w-7xl lg:grid-cols-3">
          {historySection.map(({ description, image, year }, index) => (
            <li
              key={index}
              className="flex-start group relative flex items-start lg:items-center lg:flex-col"
            >
              {index < historySection.length - 1 && (
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-2/3 lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
              )}
              <div className="inline-flex p-2 shrink-0 items-center justify-center border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:text-white group-hover:border-gray-900 group-hover:bg-gray-900">
                {year}
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <div className="relative w-full h-64">
                  <Image
                    src={image}
                    alt={`${year} image`}
                    className="object-cover"
                    fill
                  />
                </div>
                <h4 className="mt-2 text-base text-gray-700 text-justify">
                  {description}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Mission and Vision Section */}
      <section className="text-center">
        <h2 className={title()}>Mission & Vision</h2>

        <div className="text-left grid grid-cols-1 mt-6 lg:grid-cols-2 gap-8">
          <div className="my-auto relative w-full h-64 sm:h-96">
            <Image
              src={missionVisionSection.image}
              alt="Mission and Vision Statements"
              className="object-cover"
              fill
            />
          </div>
          <div className="my-auto">
            {/* Mission */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {missionVisionSection.mission.title}
              </h3>
              <p className="text-base text-gray-700 whitespace-pre-wrap">
                {missionVisionSection.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {missionVisionSection.vision.title}
              </h3>
              <p className="text-base text-gray-700 whitespace-pre-wrap">
                {missionVisionSection.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
