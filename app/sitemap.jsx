import { BLOGS, BRANDS } from "@/data";

export default function sitemap() {
  const BASE_URL = process.env.DOMAIN_URL;

  // Static routes
  const staticRoutes = [
    { route: "", changeFrequency: "weekly", priority: 0.8 },
    { route: "about", changeFrequency: "yearly", priority: 0.6 },
    { route: "blogs", changeFrequency: "monthly", priority: 0.6 },
    { route: "contact", changeFrequency: "yearly", priority: 0.6 },
    { route: "showroom", changeFrequency: "monthly", priority: 0.6 },
  ].map(({ route, changeFrequency, priority }) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));

  // Blog routes
  const blogRoutes = BLOGS.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Brand routes
  const brandRoutes = BRANDS.map((brand) => ({
    url: `${BASE_URL}/brands/${brand.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...brandRoutes];
}
