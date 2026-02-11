export const metadata = {
  title: "Blogs",
  description:
    "Read the latest articles from Kassi Distributors Inc. on kitchen design, home interiors, and international brand insights for Filipino homes.",
  openGraph: {
    title: "Blogs",
    description:
      "Read the latest articles from Kassi Distributors Inc. on kitchen design, home interiors, and international brand insights for Filipino homes.",
    url: "https://kassidinc.com/blogs",
    siteName: "Kassi Distributors Inc.",
    images: [
      {
        url: "/gallery/Home/Hero_HomePage1_Desktop.webp",
        width: 1200,
        height: 630,
        alt: "Kassi Distributors Inc. Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs",
    description:
      "Read the latest articles from Kassi Distributors Inc. on kitchen design, home interiors, and international brand insights for Filipino homes.",
    images: ["/gallery/Home/Hero_HomePage1_Desktop.webp"],
  },
  alternates: {
    canonical: "https://kassidinc.com/blogs",
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
