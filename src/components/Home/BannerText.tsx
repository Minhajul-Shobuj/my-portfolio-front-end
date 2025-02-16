"use client";

import { Typewriter } from "react-simple-typewriter";

const BannerText = () => {
  return (
    <div>
      <p className="text-lg font-medium">Hi, I am</p>

      <h1 className="text-5xl font-bold mt-2">
        <Typewriter words={["Md Minhajul Islam"]} typeSpeed={100} />
      </h1>

      <p className="text-lg font-semibold mt-2 text-white md:text-gray-500 ">
        <Typewriter
          words={[
            "Mern Stack Developer",
            "Front-end Developer",
            "Full Stack Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
    </div>
  );
};

export default BannerText;
