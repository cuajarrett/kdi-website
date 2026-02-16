export const metadata = {
  title: "Contact Us — Get a Free Kitchen Consultation",
  description:
    "Contact Kassi Distributors Inc. for a free kitchen design consultation. Book a showroom visit in Makati, request a Nolte or Express Küchen catalogue, or inquire today.",
  keywords: [
    "contact Kassi Distributors",
    "kitchen consultation Philippines",
    "showroom visit Makati",
    "Nolte Küchen inquiry",
    "kitchen design quote",
  ],
  openGraph: {
    title: "Contact Kassi Distributors Inc.",
    description:
      "Contact Kassi Distributors Inc. for a free kitchen design consultation. Book a showroom visit in Makati, request a Nolte or Express Küchen catalogue, or inquire today.",
    url: "https://kassidinc.com/contact",
    siteName: "Kassi Distributors Inc.",
    locale: "en_PH",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Contact Kassi Distributors Inc. for kitchen design consultations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kassi Distributors Inc.",
    description:
      "Contact Kassi Distributors Inc. for a free kitchen design consultation. Book a showroom visit in Makati, request a Nolte or Express Küchen catalogue, or inquire today.",
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
