"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useGetBlogsQuery } from "@/redux/api/blog.api";
import { TBlog } from "@/types";
import Link from "next/link";
import Image from "next/image";
import Spinner from "../ui/Spinner";

const Blog = () => {
  const { data, isLoading, isError } = useGetBlogsQuery(undefined);
  const blogs: TBlog[] = data?.data ?? [];

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !blogs.length) {
    return (
      <p className="text-center text-red-500 py-10">Failed to load blogs.</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        <div className="border-4 border-black px-8 py-2 inline-block mb-4 hover:bg-black hover:text-white transition-all duration-300">
          <h2 className="text-lg font-bold tracking-[10px] font-montserrat">
            LATEST BLOG
          </h2>
        </div>
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id}>
            <div className="bg-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 rounded-lg overflow-hidden flex flex-col mx-auto max-w-[350px] w-full h-[400px] mb-3">
              <Image
                height={100}
                width={100}
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {blog.content}
                </p>
                <div className="text-center mt-auto">
                  <Link href={`/blog/${blog._id}`} passHref>
                    <span className="text-black font-semibold border-l-2 border-r-2 border-black bg-transparent hover:bg-black hover:text-white hover:border-white transition-all duration-300 px-4 py-1 inline-block">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
