"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Gallery({ gallery }) {
  const router = useRouter();

  const handleImageClick = () => {
    // Redirect to contact page with the image URL as a query parameter
    router.push(`/contact`);
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gallery.map(({ src, caption }, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => handleImageClick()}
        >
          {/* Image */}
          <div className="relative h-72">
            <Image src={src} alt={caption} className="object-cover" fill />
          </div>

          {/* Hover Overlay */}
          <div className="z-10 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-bold">
              Are you interested?
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
