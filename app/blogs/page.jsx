"use client";

import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Pagination } from "@nextui-org/pagination";

import { title } from "@/components/primitives";
import { BLOGS } from "@/data/blogs";

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
    <>
      <h1 className={title()}>Blogs</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="border rounded-lg p-4 shadow flex flex-col transition hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
            <p className="text-gray-700 mt-2">{blog.excerpt}</p>
          </Link>
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
  );
}
