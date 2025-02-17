/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDeleteBlogMutation, useGetBlogsQuery } from "@/redux/api/blog.api";
import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ManageBlog() {
  const { data } = useGetBlogsQuery(undefined);
  const [deleteBlog] = useDeleteBlogMutation();
  const blogs: TBlog[] = data?.data ? data.data : [];
  const handleDelete = async (blogId: string) => {
    try {
      const res = await deleteBlog(blogId);
      if (res.error) {
        alert("something went wrong");
      } else {
        alert("successfully deleted a blog");
      }
    } catch (err: any) {
      alert(err.messages);
    }
  };
  return (
    <>
      {blogs.length === 0 ? (
        <div className="flex items-center justify-center h-full py-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            No Blogs Available
          </h1>
        </div>
      ) : (
        <div className="my-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg relative group"
            >
              {blog.thumbnail ? (
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-52 object-cover"
                />
              ) : (
                <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <button
                onClick={() => handleDelete(blog._id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                ✖
              </button>

              <div className="p-4">
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.content}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span
                    className={
                      blog.isPublished ? "text-green-500" : "text-red-500"
                    }
                  >
                    {blog.isPublished ? "Published" : "Draft"}
                  </span>
                </div>

                <Link
                  href={`/blog/${blog._id}`}
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ManageBlog;
