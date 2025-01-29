import { BLOGS } from "./blogs";
import { BRANDS } from "./brands";

export const NAVBAR = {
  logo: {
    src: "/logos/KDI_Alternative Logo.png",
    alt: "Kassi Distributors Inc. Logo Mark",
    link: "/",
  },
  links: [
    {
      label: "Brands",
      link: "/brands",
      subcategories: BRANDS.map(({ slug, name, logo }) => ({
        label: name,
        logo,
        link: `/brands/${slug}`,
      })),
    },
    {
      label: "Showroom",
      link: "/showroom",
    },
    BLOGS.length > 0 && { label: "Blogs", link: "/blogs" },
    { label: "About Us", link: "/about" },
  ],
};
