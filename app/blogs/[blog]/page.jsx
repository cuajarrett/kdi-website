import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { BLOGS } from "@/data/blogs";
import { title } from "@/components/primitives";

// Function to generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const p = await params;
  const blog = BLOGS.find((b) => b.slug === p.blog);
  if (!blog)
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
        <div className="max-w-md text-center bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The blog you're looking for doesn't exist or might have been
            removed. Don't worry, there's more to explore!
          </p>
          <Button color="primary" className="w-full" as={Link} href="/blogs">
            Back to Blogs
          </Button>
        </div>
      </div>
    );

  return {
    title: `${blog.title} | Kassi Blog`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | Kassi Blog`,
      description: blog.excerpt,
      url: `https://kassidinc.com/blogs/${blog.slug}`,
      siteName: "Kassi Distributors Inc.",
      images: [blog.image],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const p = await params;
  const blog = BLOGS.find((b) => b.slug === p.blog);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
        <div className="max-w-md text-center bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The blog you're looking for doesn't exist or might have been
            removed. Don't worry, there's more to explore!
          </p>
          <Button color="primary" className="w-full" as={Link} href="/blogs">
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="container mx-auto px-4 pb-12">
        <h1 className={title()}>{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(blog.publishedAt).toDateString()}
        </p>

        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-6"
        />

        <div className="prose max-w-none space-y-2">{blog.content}</div>
      </article>
    </>
  );
}

// generateStaticParams for Static Site Generation
export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    blog: blog.slug,
  }));
}
