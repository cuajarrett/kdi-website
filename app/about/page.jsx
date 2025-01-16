"use client";

import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";

import { ABOUT } from "@/data";

export default function AboutPage() {
  const { historySection, aboutSection, missionVisionSection } = ABOUT;

  return (
    <>
      {/* About Section */}
      <section className="text-center space-y-6">
        <h1 className={title()}>{aboutSection.title}</h1>
        <div className="text-lg space-y-4 text-gray-600">
          {aboutSection.description}
        </div>
      </section>

      {/* History Section */}
      <section class="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div class="text-center space-y-4">
          <h2 className={title()}>History</h2>
          <p class="mx-auto max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            How it all started
          </p>
        </div>
        <ul class="mx-auto mt-8 grid max-w-md grid-cols-1 gap-10 lg:max-w-7xl lg:grid-cols-3">
          {historySection.map(({ description, image, year }, index) => (
            <li class="flex-start group relative flex items-start lg:items-center lg:flex-col">
              {index < historySection.length - 1 && (
                <span
                  class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-2/3 lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
              )}
              <div class="inline-flex p-2 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:text-white group-hover:border-gray-900 group-hover:bg-gray-900">
                {year}
                {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-600 group-hover:text-white"
                  >
                    <path
                      d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg> */}
              </div>
              <div class="ml-6 lg:ml-0 lg:mt-10">
                <Image src={image} />
                <h4 class="mt-2 text-base text-gray-700 text-justify">
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
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white shadow-md p-6 rounded-lg transition hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {missionVisionSection.mission.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-wrap">
              {missionVisionSection.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-md p-6 rounded-lg transition hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {missionVisionSection.vision.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-wrap">
              {missionVisionSection.vision.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
