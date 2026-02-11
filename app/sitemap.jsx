import { BLOGS, BRANDS, PROJECTS } from "@/data";

export default function sitemap() {
  const BASE_URL = process.env.DOMAIN_URL;

  // Static routes
  const staticRoutes = [
    { route: "", changeFrequency: "weekly", priority: 1.0 },
    { route: "about", changeFrequency: "yearly", priority: 0.6 },
    { route: "blogs", changeFrequency: "monthly", priority: 0.6 },
    { route: "brands", changeFrequency: "monthly", priority: 0.7 },
    { route: "projects", changeFrequency: "monthly", priority: 0.7 },
    { route: "contact", changeFrequency: "yearly", priority: 0.6 },
    { route: "showroom", changeFrequency: "monthly", priority: 0.7 },
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

  // Project routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...brandRoutes, ...projectRoutes];
}
