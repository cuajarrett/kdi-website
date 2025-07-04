import { BLOGS } from "./blogs";

export const FOOTER = {
  companyName: "Kassi Distributors Inc.",
  logo: {
    src: "/logos/KDI Official Logo Files_KDI Official Logo.png",
    alt: "Kassi Distributions Inc. Logo with Text",
  },
  quickLinks: [
    // {
    //   label: "Brands",
    //   link: "/brands",
    // },
    {
      label: "Showroom",
      link: "/showroom",
    },
    BLOGS.length > 0 && { label: "Blogs", link: "/blogs" },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
  ],
  showroomAddresses: [
    {
      name: "Main Showroom",
      address:
        "7646 Guijo Street, San Antonio Village, Makati, 1203 Metro Manila",
      googleMaps: "https://maps.app.goo.gl/K8Rh1ZnP5xt6CnR6A",
      embedMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.7987473256312!2d121.01282339999999!3d14.564995199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a079973353%3A0xe135b8071a27f513!2s7646%20Guijo%2C%20Makati%2C%201203%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1736960182680!5m2!1sen!2sph",
      openingHours: "Monday to Saturday (9:00am to 6:00pm)",
      phones: ["+63 2 8807 5238", "+63 966 806 8999"],
    },
  ],
  contactInformation: {
    email: "info@kassidinc.com",
    telephone: "+63 2 8807 5238",
    
  },
  socialLinks: [
    {
      icon: (
        <svg
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      ),
      alt: "Facebook",
      link: "https://www.facebook.com/noltekuchenph",
    },
    {
      icon: (
        <svg
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      ),
      alt: "Instagram",
      link: "https://www.instagram.com/nolteph_official/?hl=en",
    },
    {
      icon: (
        <svg
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      ),
      alt: "LinkedIn",
      link: "https://www.linkedin.com/company/kassi-distributors-inc",
    },
  ],
};
