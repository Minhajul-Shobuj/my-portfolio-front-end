/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAddProjectMutation } from "@/redux/api/project.api";
import { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: [] as string[],
    image: "",
    liveLink: "",
    repoLink: "",
  });
  const [addProject] = useAddProjectMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "technologies") {
      setFormData({
        ...formData,
        technologies: value.split(",").map((tech) => tech.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await addProject(formData);
      if (res.error) {
        alert("something went wrong");
      } else {
        alert("successfully added a project");
      }
    } catch (err: any) {
      alert(err.messages);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Add New Project
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
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Live Link
              </label>
              <input
                type="url"
                name="liveLink"
                value={formData.liveLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Repo Link
              </label>
              <input
                type="url"
                name="repoLink"
                value={formData.repoLink}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="my-5">
            <label className="block text-sm font-medium text-gray-700">
              Project Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
