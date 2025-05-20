/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAddSKillMutation } from "@/redux/api/skillApi";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface FormData {
  title: string;
  skills: Skill[];
}

const AddSkills = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    skills: [],
  });

  const [currentSkill, setCurrentSkill] = useState<Skill>({
    name: "",
    icon: "",
  });

  const [addSkill] = useAddSKillMutation();

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentSkill({ ...currentSkill, [name]: value });
  };

  const addSkillToList = () => {
    if (currentSkill.name && currentSkill.icon) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill],
      });
      setCurrentSkill({ name: "", icon: "" }); // Reset inputs
    } else {
      alert("Both name and icon are required.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await addSkill(formData);
      if ("error" in res) {
        alert("Something went wrong");
      } else {
        alert("Successfully added skills");
        window.location.reload(); // Reload the page
      }
    } catch (err: any) {
      alert(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Add New Skills
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title{" "}
              <span className="text-xs text-gray-500">
                (USING NOW, LEARNING, OTHER SKILLS)
              </span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. USING NOW"
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Name
              </label>
              <input
                type="text"
                name="name"
                value={currentSkill.name}
                onChange={handleSkillChange}
                placeholder="e.g. JavaScript"
                className="mt-1 block w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Icon URL
              </label>
              <input
                type="text"
                name="icon"
                value={currentSkill.icon}
                onChange={handleSkillChange}
                placeholder="e.g. https://cdn.example.com/js-icon.png"
                className="mt-1 block w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={addSkillToList}
            className="mb-6 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Add Skill to List First
          </button>

          {formData.skills.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Skills to Submit:
              </h4>
              <ul className="list-disc list-inside">
                {formData.skills.map((skill, index) => (
                  <li key={index}>
                    {skill.name} –{" "}
                    <span className="text-blue-500">{skill.icon}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500"
          >
            Submit All
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;
