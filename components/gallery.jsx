"use client";

import Image from "next/image";
import Link from "next/link";

export default function Gallery({ gallery }) {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gallery.map(({ src, caption }, index) => (
        <Link
          key={index}
          className="relative group cursor-pointer overflow-hidden"
          href="/contact"
        >
          {/* Image */}
          <Image
            src={src}
            alt={caption}
            className="h-72 object-cover"
            width={720}
            height={360}
          />

          {/* Hover Overlay */}
          <div className="z-10 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-center text-white text-lg font-bold">
              Are you interested?
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
