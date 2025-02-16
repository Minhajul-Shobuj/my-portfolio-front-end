import React from "react";
import Image, { StaticImageData } from "next/image";
import htmlIcon from "@/assets/skills/html.png";
import cssIcon from "@/assets/skills/css.png";
import sassIcon from "@/assets/skills/sass.png";
import jsIcon from "@/assets/skills/javascript.png";
import bootstIcon from "@/assets/skills/bootstrap-solid 1.png";
import reactIcon from "@/assets/skills/reactjs.png";
import gitIcon from "@/assets/skills/Git.png";
import figmaIcon from "@/assets/skills/figma-1 1.png";
import mySqlIcon from "@/assets/skills/mysql.png";
import mongodbIcon from "@/assets/skills/mongodb-icon-1.png";
import typescIcon from "@/assets/skills/typescript.png";
import cIcon from "@/assets/skills/c-lang.png";
import cPlusIcon from "@/assets/skills/c++.png";
import englishcIcon from "@/assets/skills/english.png";
import spanishIcon from "@/assets/skills/spain.png";
import nodeJsIcon from "@/assets/skills/nodejs.png";

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
  const usingNow = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "SASS", icon: sassIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Bootstrap", icon: bootstIcon },
    { name: "Git", icon: gitIcon },
    { name: "Figma", icon: figmaIcon },
  ];

  const learning = [
    { name: "Node.js", icon: nodeJsIcon },
    { name: "MySQL", icon: mySqlIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "TypeScript", icon: typescIcon },
  ];

  const otherSkills = [
    { name: "English C1/C2", icon: englishcIcon },
    { name: "Spanish B1/B2", icon: spanishIcon },
    { name: "C++", icon: cPlusIcon },
    { name: "C", icon: cIcon },
  ];

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
        <SkillsSection title="USING NOW" skills={usingNow} />
        <SkillsSection title="LEARNING" skills={learning} />
        <SkillsSection title="OTHER SKILLS" skills={otherSkills} />
      </div>
    </div>
  );
};

export default Skills;
