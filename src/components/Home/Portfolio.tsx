"use client";
import Image from "next/image";
import Link from "next/link";
import img2 from "@/assets/focus-5648189_1280.jpg";
import { TProject } from "@/types";
import { useGetProjectsQuery } from "@/redux/api/project.api";

const Portfolio = () => {
  const { data } = useGetProjectsQuery(undefined);
  const projects: TProject[] = data?.data ? data.data.slice(0, 3) : [];

  return (
    <section className="bg-black text-white">
      <div className="relative h-96">
        <Image
          src={img2}
          alt="Portfolio"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold border-2 border-white px-6 py-2">
            PORTFOLIO
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {projects.map((project: TProject) => (
          <div key={project._id} className="relative group cursor-pointer">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-4">
                <p className="uppercase text-sm">Coded, Designed</p>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="border border-white px-4 py-2 cursor-pointer">
                      Preview
                    </span>
                  </Link>
                  <Link href={project.repoLink}>
                    <span className="border border-white px-4 py-2 cursor-pointer">
                      Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-4 text-gray-400">
        <p>And many more to come!</p>
      </div>
    </section>
  );
};

export default Portfolio;
