export const metadata = {
  title: "Blog — Kitchen Design Tips & Inspiration",
  description:
    "Kitchen design tips, planning guides, and inspiration from Kassi Distributors Inc. Learn about Nolte Küchen features, lighting, cabinetry, and modern kitchen trends.",
  keywords: [
    "kitchen design blog",
    "kitchen planning tips",
    "Nolte Küchen articles",
    "kitchen lighting guide",
    "modern kitchen ideas Philippines",
  ],
  openGraph: {
    title: "Blog — Kitchen Design Tips & Inspiration",
    description:
      "Kitchen design tips, planning guides, and inspiration from Kassi Distributors Inc. Learn about Nolte Küchen features, lighting, cabinetry, and modern kitchen trends.",
    url: "https://kassidinc.com/blogs",
    siteName: "Kassi Distributors Inc.",
    locale: "en_PH",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Kitchen design blog by Kassi Distributors Inc.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Kitchen Design Tips & Inspiration",
    description:
      "Kitchen design tips, planning guides, and inspiration from Kassi Distributors Inc. Learn about Nolte Küchen features, lighting, cabinetry, and modern kitchen trends.",
    images: ["/gallery/Home/Hero_HomePage1_Desktop.webp"],
  },
  alternates: {
    canonical: "https://kassidinc.com/blogs",
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
