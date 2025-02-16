/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAddBlogMutation } from "@/redux/api/blog.api";
import { useState } from "react";

const AddBlog = () => {
  const [addBlog] = useAddBlogMutation();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    thumbnail: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await addBlog(formData);
      if (res.error) {
        alert("something went wrong");
      } else {
        alert("successfully posted a blog");
      }
    } catch (err: any) {
      alert(err.messages);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Create Blog
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog title"
                onChange={handleChange}
              />
            </div>
            {/* Author Name */}
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter author name"
              />
            </div>
          </div>
          {/* Blog Image (URL Input) */}
          <div className="my-5">
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700"
            >
              Thumbnail Image URL
            </label>
            <input
              type="url"
              id="thumbnail"
              onChange={handleChange}
              name="thumbnail"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste Thumbnail URL here"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
