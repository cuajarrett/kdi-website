import { BLOGS } from "./blogs";
import { BRANDS } from "./brands";

export const NAVBAR = {
  logo: {
    src: "/logos/KDI Official Logo Files_KDI Official Logo.png",
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
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Showroom",
      link: "/showroom",
    },
    BLOGS.length > 0 && { label: "Blogs", link: "/blogs" },
    { label: "About Us", link: "/about" },
  ],
};
