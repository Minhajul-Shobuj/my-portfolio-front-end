"use client";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-black text-white py-8 text-center">
      {/* Back to Top */}
      <button onClick={scrollToTop}>
        <div className="flex flex-col items-center mb-4">
          <span className="text-lg">↑</span>
          <p className="text-sm uppercase tracking-widest">Back to Top</p>
        </div>
      </button>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 my-4">
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FaInstagram />
        </a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-gray-400">
        Copyright &copy; {currentYear.getFullYear()} - All right reserved by Md
        Minhajul Islam
      </p>
    </footer>
  );
};

export default Footer;
