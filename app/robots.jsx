export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all crawlers
        allow: "/", // Allow crawling of all public pages
        disallow: "/private/", // Disallow crawling of any private directory
      },
    ],
    sitemap: `${process.env.DOMAIN_URL}/sitemap.xml`, // Replace with your actual domain
    host: process.env.DOMAIN_URL, // Optional: Specify your domain as the preferred host
  };
}
