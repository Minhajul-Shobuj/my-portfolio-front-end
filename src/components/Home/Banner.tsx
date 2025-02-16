import Image from "next/image";
import heroImg from "@/assets/Md_Minhajul_Islam.png";
import BannerText from "./BannerText";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="relative flex h-screen md:hidden">
        <Image
          src={heroImg}
          alt="Md Minhajul Islam"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          <BannerText />
          <div className="flex space-x-4 mt-4">
            <Link
              className="flex items-center justify-center w-[61px] h-[56px] bg-gray-400 shadow-md rounded-lg"
              href="https://github.com/Minhajul-Shobuj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-black" />
            </Link>
            <Link
              className="flex items-center justify-center w-[61px] h-[56px] bg-gray-400 shadow-md rounded-lg"
              href="https://www.linkedin.com/in/md-minhajul-islam-a537601a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-black" />
            </Link>
            <Link
              className="flex items-center space-x-2 px-4 py-2 bg-gray-400 shadow-md rounded-lg text-black font-medium hover:bg-gray-500 transition"
              href="https://drive.google.com/uc?export=download&id=1wCSuZsSowmMC_-0UMREJPSUqdAik9pwt
"
              download
            >
              <Download className="w-5 h-5 text-black" />
              <span>Download Resume</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between bg-gray-200 h-screen px-10">
        <div className="w-1/2">
          <BannerText />
          <div className="flex space-x-4 mt-6">
            <Link
              className="flex items-center justify-center w-[61px] h-[56px] bg-gray-400 shadow-md rounded-lg font-bold hover:bg-gray-500 transition"
              href="https://github.com/Minhajul-Shobuj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-black" />
            </Link>
            <Link
              className="flex items-center justify-center w-[61px] h-[56px] bg-gray-400 shadow-md rounded-lg font-bold hover:bg-gray-500 transition"
              href="https://www.linkedin.com/in/md-minhajul-islam-a537601a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-black" />
            </Link>
            <Link
              className="flex items-center space-x-2 px-4 py-2 bg-gray-400 shadow-md rounded-lg text-black font-bold hover:bg-gray-500 transition"
              href="https://drive.google.com/uc?export=download&id=1wCSuZsSowmMC_-0UMREJPSUqdAik9pwt"
              download
            >
              <Download className="w-5 h-5 text-black" />
              <span>Download Resume</span>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative h-full">
          <div className="absolute inset-0 bg-black -skew-x-12 origin-bottom-right" />
          <div className="relative z-10 w-full h-full">
            <Image
              src={heroImg}
              alt="Md Minhajul Islam"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
