/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "@/redux/api/project.api";
import { TProject } from "@/types";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ManageProject() {
  const { data, refetch } = useGetProjectsQuery(undefined);
  const [deleteProject] = useDeleteProjectMutation();
  const projects: TProject[] = data?.data ? data.data : [];
  const handleDelete = async (projectId: string) => {
    try {
      const res = await deleteProject(projectId);
      if (res.error) {
        alert("something went wrong");
      } else {
        alert("successfully deleted a project");
        refetch();
      }
    } catch (err: any) {
      alert(err.messages);
    }
  };
  return (
    <>
      {projects.length === 0 ? (
        <div className="flex items-center justify-center h-full py-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            No Projects Available
          </h1>
        </div>
      ) : (
        <div className="my-10 grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="relative group">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
                {/* Project Image */}
                <Image
                  height={100}
                  width={100}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />

                {/* Delete Button (Shows on Hover) */}
                <button
                  onClick={() => handleDelete(project._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  ✖
                </button>

                {/* Project Info */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies List */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Section */}
                <div className="p-4 flex justify-between items-center border-t">
                  <Link
                    href={`/projects/${project._id}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    View Details
                  </Link>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-blue-500 flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      className="text-gray-500 flex items-center gap-2"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ManageProject;
