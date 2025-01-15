"use client";

import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";
import { SHOWROOM } from "@/data";
import { useRouter } from "next/navigation";

export default function ShowroomPage() {
  const { showroomAddresses, gallery } = SHOWROOM;

  const router = useRouter();

  const handleImageClick = (imageSrc) => {
    // Redirect to the contact page with query parameters
    router.push(`/contact?interestedIn=${encodeURIComponent(imageSrc)}`);
  };

  return (
    <>
      {/* Header */}
      <h1 className={title()}>Our Showrooms</h1>

      {/* Showroom Addresses and Google Map */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Addresses */}
        <div>
          {showroomAddresses.map(
            ({ name, address, googleMaps, openingHours, phones }, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p>{address}</p>
                <p>{openingHours}</p>
                <p>
                  {phones.map((phone, index) => (
                    <>
                      <Link isExternal href={`tel:${phone}`}>
                        {phone}
                      </Link>
                      {index < phones.length - 1 && " / "}
                    </>
                  ))}
                </p>
                <Link href={googleMaps} color="primary" isExternal>
                  View on Google Maps
                </Link>
              </div>
            )
          )}
        </div>

        {/* Google Map Embed */}
        <div>
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.7987473256312!2d121.01282339999999!3d14.564995199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a079973353%3A0xe135b8071a27f513!2s7646%20Guijo%2C%20Makati%2C%201203%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1736960182680!5m2!1sen!2sph"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-8 space-y-4">
        <h2 className={title()}>Showroom Gallery</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => handleImageClick(image)}
            >
              {/* Image */}
              <Image
                key={index}
                src={image}
                alt={`Showroom Image ${index + 1}`}
                height={200}
                width={400}
                isZoomed
              />

              {/* Hover Overlay */}
              <div className="z-10 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  Are you interested?
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
