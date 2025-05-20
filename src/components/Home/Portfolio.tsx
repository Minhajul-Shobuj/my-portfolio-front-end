"use client";
import Image from "next/image";
import Link from "next/link";
import img2 from "@/assets/banner.png";
import { TProject } from "@/types";
import { useGetProjectsQuery } from "@/redux/api/project.api";
import Spinner from "../ui/Spinner";

const Portfolio = () => {
  const { data, isLoading, isError } = useGetProjectsQuery(undefined);
  const projects: TProject[] = data?.data ? data.data.slice(-3).reverse() : [];
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">Failed to load Projects.</p>
      </div>
    );
  }

  return (
    <section>
      <div>
        <div
          className="relative bg-cover bg-center h-[15vh]"
          style={{ backgroundImage: `url(${img2.src})` }}
        >
          <div className="absolute inset-0 flex items-start mt-8 justify-center">
            <div className="border-4 border-black px-8 py-2 inline-block mb-4 hover:bg-black hover:text-white transition-all duration-300">
              <h2 className="text-lg font-bold tracking-[10px] font-montserrat">
                PORTFOLIO
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 bg-black">
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
      </div>
      <div className="bg-black text-center text-gray-400 py-3">
        <p className="my-2">And many more to come!</p>
        <Link href="/projects">
          <span className="inline-block border border-white text-white px-6  cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
            View All Projects
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
