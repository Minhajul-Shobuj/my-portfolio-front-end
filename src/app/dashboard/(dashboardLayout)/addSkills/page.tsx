/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

const AddSkills = () => {
  const [formData, setFormData] = useState({
    title: "",
    skills: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setFormData({
        ...formData,
        skills: value.split(",").map((tech) => tech.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Example: send data to API
      // await fetch("/api/skills", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
    } catch (err: any) {
      alert(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Add New Skills
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills.join(", ")}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;
