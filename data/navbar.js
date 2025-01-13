import { BRANDS } from "./brands";
import { FOOTER } from "./footer";

export const NAVBAR = {
  logo: {
    src: "/images/logo.png",
    alt: FOOTER.companyName,
    link: "/",
  },
  links: [
    {
      label: "Brands",
      link: "/brands",
      subcategories: BRANDS.map(({ slug, name, description }) => ({
        label: name,
        description,
        link: `/brands/${slug}`,
      })),
    },
    {
      label: "Showroom",
      link: "/showroom",
    },
    { label: "Blogs", link: "/blogs" },
    { label: "About Us", link: "/about" },
  ],
};
