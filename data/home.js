import { Link } from "@nextui-org/link";
import { ABOUT } from "./about";
import { BLOGS } from "./blogs";
import { BRANDS } from "./brands";
import { CONTACT } from "./contact";
import { FOOTER } from "./footer";

export const HOME = {
  heroSection: {
    heading: "Live in Style and Comfort.",
    subheading: "Bridging Global Excellence with Local Aspirations.",
    introduction: (
      <>
        <p>
          At Kassi Distributors Inc., we embrace both a respect for tradition
          and a forward-looking vision for Filipino homes. By curating the
          finest international brands across a broad range of price points, we
          ensure that every homeowner can enjoy the perfect blend of style and
          comfort—whether their preference leans toward premium luxury or more
          approachable elegance.
        </p>
        <p>
          Combining innovation, attentive service, and years of industry
          experience, we create spaces where practicality meets refined design.
        </p>
      </>
    ),
    images: [
      {
        desktopSrc: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        mobileSrc: "/gallery/Home/Hero_HomePage1_Mobile.webp",
        alt: "Kassi Distributors Inc. Gallery 1",
      },
      {
        desktopSrc: "/gallery/Home/Hero_HomePage2_Desktop.webp",
        mobileSrc: "/gallery/Home/Hero_HomePage2_Mobile.webp",
        alt: "Kassi Distributors Inc. Gallery 2",
      },
      {
        desktopSrc: "/gallery/Home/Hero_HomePage3_Desktop.webp",
        mobileSrc: "/gallery/Home/Hero_HomePage3_Mobile.webp",
        alt: "Kassi Distributors Inc. Gallery 3",
      },
      {
        desktopSrc: "/gallery/Home/Hero_HomePage4_Desktop.webp",
        mobileSrc: "/gallery/Home/Hero_HomePage4_Mobile.webp",
        alt: "Kassi Distributors Inc. Gallery 4",
      },
      {
        desktopSrc: "/gallery/Home/Hero_HomePage5_Desktop.webp",
        mobileSrc: "/gallery/Home/Hero_HomePage5_Mobile.webp",
        alt: "Kassi Distributors Inc. Gallery 5",
      },
      {
        desktopSrc: "/gallery/Home/Hero_HomePage6_Desktop.webp",
        mobileSrc: "/gallery/Home/Hero_HomePage6_Mobile.webp",
        alt: "Kassi Distributors Inc. Gallery 6",
      },
    ],
    callToAction: (
      // <>
      //   Call us at{" "}
      //   <Link href={`tel:${FOOTER.contactInformation.telephone}`}>
      //     {FOOTER.contactInformation.telephone}
      //   </Link>{" "}
      //   or{" "}
      //   <Link href={`tel:${FOOTER.contactInformation.phone}`}>
      //     {FOOTER.contactInformation.phone}
      //   </Link>{" "}
      //   to start planning your dream home today!
      // </>
      <>
        Visit us at our <Link href="/showroom">Showroom</Link> to start planning
        your dream home today!
      </>
    ),
  },
  brandSection: BRANDS.map(({ slug, name, logo, description }) => ({
    name: name,
    logo,
    description,
    href: `/brands/${slug}`,
  })),
  aboutSection: {
    title: "About Us",
    description: ABOUT.aboutSection.description,
    image: "/gallery/Home/About.webp",
    alt: "About Kassi Distributors Inc.",
    cta: "Learn More",
    link: "/about",
  },
  blogSection: {
    title: "About Us",
    blogs: BLOGS,
    cta: "View All Posts",
    link: "/blogs",
  },
  contactSection: {
    title: "Contact Us",
    description: CONTACT.subheading,
    image: "/gallery/Home/Contact.webp",
    alt: "Contact Kassi Distributors Inc.",
    cta: "Contact",
    link: "/contact",
  },
};
