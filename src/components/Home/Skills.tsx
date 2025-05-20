/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useGetSkillsQuery } from "@/redux/api/skillApi";

interface Skill {
  name: string;
  icon: StaticImageData;
}

interface SkillsSectionProps {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-md font-bold tracking-[7px] font-montserrat mb-6 self-start">
        {title}:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={skill.icon} alt={skill.name} width={64} height={64} />
            <span className="text-sm text-gray-600 mt-2 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { data, isLoading, isError } = useGetSkillsQuery(undefined);
  const skillsData = data?.data ?? [];

  const usingNow = skillsData.find(
    (s: any) => s.title.toUpperCase() === "USING NOW"
  );
  const learning = skillsData.find(
    (s: any) => s.title.toUpperCase() === "LEARNING"
  );
  const otherSkills = skillsData.find(
    (s: any) => s.title.toUpperCase() === "OTHER SKILLS"
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-700">Loading skills...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">Failed to load skills.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="text-center mb-10">
        <div className="border-4 border-black px-8 py-2 inline-block mb-4 hover:bg-black hover:text-white transition-all duration-300">
          <h2 className="text-lg font-bold tracking-[10px] font-montserrat">
            SKILLS
          </h2>
        </div>
      </div>

      <div className="max-w-4xl w-full p-6 flex flex-col items-center space-y-12">
        {usingNow && (
          <SkillsSection title={usingNow.title} skills={usingNow.skills} />
        )}
        {learning && (
          <SkillsSection title={learning.title} skills={learning.skills} />
        )}
        {otherSkills && (
          <SkillsSection
            title={otherSkills.title}
            skills={otherSkills.skills}
          />
        )}
      </div>
    </div>
  );
};

export default Skills;
