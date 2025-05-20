import Image from "next/image";
import sepImg from "@/assets/separatorBlack 1.png";
import gearIcon from "@/assets/c++.png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="text-center mb-10">
        <div className="border-4 border-black px-8 py-2 inline-block mb-4 hover:bg-black hover:text-white transition-all duration-300">
          <h2 className="text-lg font-bold tracking-[10px] font-montserrat">
            ABOUT ME
          </h2>
        </div>
        <p className="text-lg text-gray-600 max-w-lg px-4">
          Passionate about crafting elegant and efficient solutions, I thrive on
          building intuitive web experiences. With a strong foundation in
          front-end development and an eye for design, I transform ideas into
          responsive, user-friendly applications. Continuously learning and
          adapting, I aim to bridge the gap between functionality and aesthetics
          in the ever-evolving tech landscape.
        </p>
        <div className="flex justify-center mt-6">
          <Image width={80} height={20} src={sepImg} alt="separator" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl px-6">
        {[
          {
            title: "DESIGN",
            text: "I can design the site based on your needs and suggestions.",
            bgIcon: gearIcon,
          },
          {
            title: "DEVELOPMENT",
            text: "I can develop the site from scratch and consult you during the job.",
            bgIcon: gearIcon,
          },
          {
            title: "MAINTENANCE",
            text: "I can maintain the site and ensure smooth performance.",
            bgIcon: gearIcon,
          },
        ].map((service, index) => (
          <div key={index} className="relative text-center p-6">
            <Image
              src={service.bgIcon}
              alt="background icon"
              className="absolute -top-4 left-2 w-10 opacity-10"
            />

            <h3 className="text-lg font-bold uppercase tracking-wide">
              {service.title}
            </h3>

            <p className="mt-2 text-gray-600 text-sm">{service.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Image width={80} height={20} src={sepImg} alt="separator" />
      </div>
    </div>
  );
};

export default About;
