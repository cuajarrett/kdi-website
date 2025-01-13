"use client";

import { Link } from "@nextui-org/link";
import { FOOTER } from "@/data"; // Import the footer data from your data file

export const Footer = () => {
  const {
    companyName,
    quickLinks,
    showroomAddresses,
    contactInformation,
    socialLinks,
  } = FOOTER;

  return (
    <footer className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">{companyName}</h4>
          <p>
            A trusted distributor of premium products, bringing quality
            solutions to customers worldwide.
          </p>
        </div>

        {/* Column 2: Quick Links  */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="mb-6">
            {quickLinks.map(({ label, link }, index) => (
              <li key={index} className="mb-2">
                <Link
                  href={link}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3: Showrooms */}
        <div>
          <h4 className="font-bold text-lg mb-4">Showroom Locations</h4>
          <ul>
            {showroomAddresses.map(({ name, address }, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{name}</p>
                <p className="text-gray-600">{address}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info & Social Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <Link
              href={`mailto:${contactInformation.email}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {contactInformation.email}
            </Link>
          </p>
          <p className="mb-6">
            <strong>Phone:</strong> {contactInformation.phone}
          </p>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, alt, link }, index) => (
              <Link
                key={index}
                href={link}
                aria-label={alt}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-10 pt-5 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} {companyName} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
