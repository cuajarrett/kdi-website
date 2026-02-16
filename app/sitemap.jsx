import { BLOGS, BRANDS, PROJECTS } from "@/data";

export default function sitemap() {
  const BASE_URL = process.env.DOMAIN_URL;

  // Static routes with stable last-modified dates
  const staticRoutes = [
    { route: "", changeFrequency: "weekly", priority: 1.0, lastModified: "2025-02-01" },
    { route: "about", changeFrequency: "yearly", priority: 0.6, lastModified: "2025-01-15" },
    { route: "blogs", changeFrequency: "monthly", priority: 0.6, lastModified: "2025-10-09" },
    { route: "brands", changeFrequency: "monthly", priority: 0.7, lastModified: "2025-01-15" },
    { route: "projects", changeFrequency: "monthly", priority: 0.7, lastModified: "2025-01-15" },
    { route: "contact", changeFrequency: "yearly", priority: 0.6, lastModified: "2025-01-15" },
    { route: "showroom", changeFrequency: "monthly", priority: 0.7, lastModified: "2025-01-15" },
  ].map(({ route, changeFrequency, priority, lastModified }) => ({
    url: `${BASE_URL}/${route}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  // Blog routes — use publishedAt date
  const blogRoutes = BLOGS.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt || blog.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Brand routes
  const brandRoutes = BRANDS.map((brand) => ({
    url: `${BASE_URL}/brands/${brand.slug}`,
    lastModified: "2025-01-15",
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Project routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: "2025-01-15",
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...brandRoutes, ...projectRoutes];
}
