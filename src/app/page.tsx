import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Blog from "@/components/Home/Blog";
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
      <Blog />
    </div>
  );
};

export default HomePage;
