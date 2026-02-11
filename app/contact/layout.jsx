export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kassi Distributors Inc. to discuss your kitchen and home design needs. Book a showroom visit or request a catalogue.",
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Kassi Distributors Inc. to discuss your kitchen and home design needs. Book a showroom visit or request a catalogue.",
    url: "https://kassidinc.com/contact",
    siteName: "Kassi Distributors Inc.",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Contact Kassi Distributors Inc.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Get in touch with Kassi Distributors Inc. to discuss your kitchen and home design needs. Book a showroom visit or request a catalogue.",
    images: ["/gallery/Home/Hero_HomePage1_Desktop.webp"],
  },
  alternates: {
    canonical: "https://kassidinc.com/contact",
  },
};

// Layout Component
export default function PageLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 flex-grow">{children}</div>
  );
}
