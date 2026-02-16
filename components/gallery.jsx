'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

export default function Gallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map(({ src, caption }, index) => (
          <button
            key={index}
            type="button"
            className="relative group cursor-pointer overflow-hidden text-left"
            onClick={() => setSelectedImage({ src, caption })}
          >
            <Image
              src={src}
              alt={caption}
              className="h-72 object-cover w-full"
              width={720}
              height={360}
            />
            <div className="z-10 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-center text-white text-lg font-bold">
                Are you interested?
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close gallery"
              className="absolute top-4 right-8 text-white text-2xl z-10"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Zoomed Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.caption}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-md"
            />

            {/* Caption */}
            <p className="text-white text-center mt-4 text-sm italic">
              {selectedImage.caption}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mt-6">
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Feeling inspired? Contact us to learn more →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
