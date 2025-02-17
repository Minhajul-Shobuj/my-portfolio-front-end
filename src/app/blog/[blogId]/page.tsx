"use client";
import { useGetBlogByIdQuery } from "@/redux/api/blog.api";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data } = useGetBlogByIdQuery(blogId);
  const blog = data?.data;
  return (
    <>
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">{blog?.title}</h1>
        <p className="text-gray-500 mt-2">By {blog?.author}</p>

        <Image
          src={blog?.thumbnail}
          alt={blog?.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mt-5"
        />

        <div className="mt-6 text-gray-700 leading-7">{blog?.content}</div>
      </div>
    </>
  );
};

export default BlogDetails;
