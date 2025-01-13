import { BRANDS } from "./brands";

export const HOME = {
  hero: {
    heading: "Welcome to Our Website",
    subheading: "Discover innovative designs and solutions for your home.",
    images: [
      {
        src: "/images/hero1.jpg",
        heading: "Welcome to Modernbrands",
        subheading: "Discover innovative designs for your home.",
      },
      {
        src: "/images/hero2.jpg",
        heading: "Create Your Dream Space",
        subheading: "Elegant, functional, and tailored to your needs.",
      },
      {
        image: "/images/hero3.jpg",
        heading: "Timeless Designs",
        subheading: "Premium home solutions for the modern lifestyle.",
      },
    ],
  },
  featuredBrands: BRANDS.map((brand) => ({
    name: brand.name,
    logo: `/images/logos/${brand.name
      .toLowerCase()
      .replace(/\s+/g, "-")}-logo.png`,
  })),
  cta: {
    text: "Explore Our Services",
    link: "/services",
  },
};
