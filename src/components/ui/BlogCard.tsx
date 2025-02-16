import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlog & { _id: string } }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      {blog.thumbnail ? (
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={400} // Define width
          height={200} // Define height
          className="w-full h-52 object-cover"
        />
      ) : (
        <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {blog.content}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>By {blog.author}</span>
          <span
            className={blog.isPublished ? "text-green-500" : "text-red-500"}
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
  );
};

export default BlogCard;
