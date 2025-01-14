import { BLOGS } from "@/data/blogs";

export default function BlogDetailPage({ params }) {
  const blog = BLOGS.find((b) => b.slug === params.blog);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-4xl h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="prose">{blog.content}</div>
      </div>
    </>
  );
}

// generateStaticParams for Static Site Generation
export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    blog: blog.slug,
  }));
}
