import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { BLOGS } from "@/data/blogs";

export default function BlogDetailPage({ params }) {
  const blog = BLOGS.find((b) => b.slug === params.blog);

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
      <div className="flex flex-col items-center">
        <Image src={blog.image} alt={blog.title} />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="space-y-2 mb-8">{blog.content}</div>
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
