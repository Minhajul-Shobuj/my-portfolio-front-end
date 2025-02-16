"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { useGetProjectsQuery } from "@/redux/api/project.api";
import { TProject } from "@/types";
import React from "react";

const AllProjects = () => {
  const { data } = useGetProjectsQuery(undefined);
  const projects: TProject[] = data?.data ? data.data : [];
  console.log(projects);
  return (
    <>
      {projects.length === 0 ? (
        <div className="flex items-center justify-center h-full py-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            No Projects Available
          </h1>
        </div>
      ) : (
        <div className="my-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllProjects;
