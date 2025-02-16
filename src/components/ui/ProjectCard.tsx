import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { TProject } from "@/types";
import Image from "next/image";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <Image
        height={100}
        width={100}
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>

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
  );
};

export default ProjectCard;
