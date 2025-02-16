import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Portfolio from "@/components/Home/Portfolio";
import Skills from "@/components/Home/Skills";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePage;
