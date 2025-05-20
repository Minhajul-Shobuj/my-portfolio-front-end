"use client";

import { useGetSkillsQuery } from "@/redux/api/skillApi";
import { TSkills } from "@/types";

function ManageSkills() {
  const { data, isLoading, isError } = useGetSkillsQuery(undefined);
  const skills: TSkills[] = data?.data ?? [];

  if (isLoading) return <p className="text-center py-10">Loading skills...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 py-10">Failed to load skills.</p>
    );

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Skills</h1>
      {skills.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-teal-700">
            {section.title}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded shadow-sm"
              >
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ManageSkills;
