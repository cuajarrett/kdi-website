"use client";

import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";

import { title } from "@/components/primitives";
import { BLOGS } from "@/data/blogs";
import { Card } from "@/components/card";
import { Button } from "@nextui-org/button";

export default function BlogsPage() {
  const [currPage, setCurrPage] = useState(1);
  const blogsPerPage = 9;

  const totalPages = Math.ceil(BLOGS.length / blogsPerPage);
  const paginatedBlogs = BLOGS.slice(
    (currPage - 1) * blogsPerPage,
    currPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    setCurrPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="mx-auto max-w-7xl py-8 px-6 flex-grow">
      <h1 className={title()}>Blogs</h1>
      {BLOGS.length > 0 ? (
        <>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map(({ slug, image, title, excerpt }, index) => (
              <Card
                key={index}
                link={`/blogs/${slug}`}
                image={image}
                title={title}
                excerpt={excerpt}
              />
            ))}
          </div>

          {/* NextUI Pagination */}
          <div className="flex justify-center items-center my-8">
            <Pagination
              total={totalPages}
              initialPage={1}
              onChange={handlePageChange}
              size="lg"
              color="primary"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
          <div className="max-w-md text-center bg-white p-8 shadow-lg rounded-lg">
            <p className="text-gray-600 mb-6">
              There are currently no available blogs at the moment. Please check
              back soon for updates, insights, and inspirations. Stay tuned for
              exciting content coming your way! 🚀
            </p>
            <Button color="primary" className="w-full" as={Link} href="/">
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
