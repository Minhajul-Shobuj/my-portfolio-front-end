"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/blog.api";
import { TBlog } from "@/types";
import React from "react";

const AllBlogs = () => {
  const { data } = useGetBlogsQuery(undefined);
  const blogs: TBlog[] = data?.data ? data.data : [];
  return (
    <>
      <div className="mx-4">
        {blogs.length === 0 ? (
          <div className="flex items-center justify-center h-full py-10">
            <h1 className="text-2xl font-semibold text-gray-600">
              No Blogs Available
            </h1>
          </div>
        ) : (
          <div className="my-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllBlogs;
