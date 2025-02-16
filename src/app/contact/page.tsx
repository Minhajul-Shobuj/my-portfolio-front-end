/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import sepImg from "@/assets/separatorBlack 1.png";
import { usePostMessageMutation } from "@/redux/api/message.api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sentMessage] = usePostMessageMutation();
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await sentMessage(formData);
        if (res.error) {
          alert("something went wrong");
        } else {
          alert("Your message has been sent!");

          setFormData({ name: "", email: "", message: "" });
        }
      } catch (err: any) {
        alert(err.messages);
      }
    }
  };

  return (
    <div className="flex items-center justify-center my-[150px]">
      <div className="max-w-lg w-full px-6 text-center">
        <div className="text-center mb-10">
          <div className="border-4 border-black px-8 py-2 inline-block mb-4 hover:bg-black hover:text-white transition-all duration-300">
            <h2 className="text-lg font-bold tracking-[10px] font-montserrat">
              CONTACT
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-lg px-4">
            Have questions or want to work together? Fill out the form below,
            and we`ll get back to you as soon as possible. We look forward to
            hearing from you!
          </p>
          <div className="flex justify-center mt-6">
            <Image width={80} height={20} src={sepImg} alt="separator" />
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border-b bg-transparent px-2 py-3 text-sm outline-none ${
                errors.name ? "border-red-500" : "border-black"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">Name is required.</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-b bg-transparent px-2 py-3 text-sm outline-none ${
                errors.email ? "border-red-500" : "border-black"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                Valid email is required.
              </p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border-b bg-transparent px-2 py-3 text-sm outline-none min-h-[120px] ${
                errors.message ? "border-red-500" : "border-black"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">Message is required.</p>
            )}
          </div>
          <button
            type="submit"
            className="px-5 py-2 text-black text-[15px] font-semibold border-l-2 border-r-2 border-black bg-transparent hover:bg-black hover:text-white hover:border-white transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
