import Hero from "./sub-components/Hero";
import Timeline from "./sub-components/Timeline";
import About from "./sub-components/About";
import Skills from "./sub-components/Skills";
import Portfolio from "./sub-components/Portfolio";
import Apps from "./sub-components/Apps";
import Contact from "./sub-components/Contact";

import Navbar from "./sub-components/Navbar";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Navbar />
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <Apps />
      <Contact />
    </article>
  );
};

export default Home;
