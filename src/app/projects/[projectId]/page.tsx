"use client";
import { useGetProjectByIdQuery } from "@/redux/api/project.api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { data } = useGetProjectByIdQuery(projectId);
  const project = data?.data;
  return (
    <div>
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">{project?.title}</h1>
        <p className="text-gray-600 mt-3">{project?.description}</p>

        <Image
          src={project?.image}
          alt={project?.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mt-5"
        />

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {project?.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project?.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Live Demo
          </a>
          <a
            href={project?.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
