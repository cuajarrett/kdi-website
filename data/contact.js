import { FOOTER } from "./footer";

export const CONTACT = {
  heading: "Contact Us",
  subheading:
    "Have any questions? Reach out to us and let’s discuss how we can create your dream space.",
  subjects: ["Request for Catalogue", "Furniture", "Book an Appointment"],
  showrooms: [...FOOTER.showroomAddresses.map(({ name }) => name)],
};
