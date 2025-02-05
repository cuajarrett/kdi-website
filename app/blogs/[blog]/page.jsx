import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import { BLOGS } from "@/data/blogs";
import { subtitle, title } from "@/components/primitives";
import clsx from "clsx";

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
    <article>
      <div className="relative w-screen h-[75vh] mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="text-base mx-auto max-w-7xl py-8 px-6 flex-grow">
        <h1 className={clsx(title(), "max-w-sm")}>{blog.title}</h1>
        {blog.subtitle && <h3 className={subtitle()}>{blog.subtitle}</h3>}
        <p className="text-sm text-gray-500 mb-4">
          {new Date(blog.publishedAt).toDateString()}
        </p>

        <div className="max-w-lg text-justify mb-4">{blog.excerpt}</div>
        <div className="prose max-w-none space-y-12">{blog.content}</div>

        <div className="max-w-lg text-justify mt-6">
          <p>
            Inspired by this design? Let’s bring it to life. Our team is ready
            to help you create a space that reflects your vision.
          </p>
          <Button
            as={Link}
            href="/contact"
            color="primary"
            variant="solid"
            size="lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </article>
  );
}

// generateStaticParams for Static Site Generation
export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    blog: blog.slug,
  }));
}
