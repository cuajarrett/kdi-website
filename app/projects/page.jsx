import Image from "next/image";
import Link from "next/link";

import { title } from "@/components/primitives";
import { PROJECTS } from "@/data";

export default function BrandsListPage() {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 flex-grow min-h-[60vh]">
      <h1 className={title()}>Our Projects</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(({ slug, coverImage, projectTitle }, index) => (
          <Link
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            href={`/projects/${slug}`}
          >
            {/* Image */}
            <Image
              src={coverImage}
              alt={`${projectTitle} Cover Image`}
              className="object-cover"
              height={720}
              width={400}
            />

            {/* Hover Overlay */}
            <div className="z-10 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-center text-lg font-bold">
                {projectTitle}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
