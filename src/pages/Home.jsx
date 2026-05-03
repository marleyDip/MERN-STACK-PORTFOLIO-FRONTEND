import { lazy } from "react";

// Lazy load components
const Hero = lazy(() => import("./sub-components/Hero"));
const Timeline = lazy(() => import("./sub-components/Timeline"));
const About = lazy(() => import("./sub-components/About"));
const Skills = lazy(() => import("./sub-components/Skills"));
const Portfolio = lazy(() => import("./sub-components/Portfolio"));
const Apps = lazy(() => import("./sub-components/Apps"));
const Contact = lazy(() => import("./sub-components/Contact"));

const Home = () => {
  return (
    <>
      {/* Main Content */}
      <main className="px-6 sm:px-8 mt-0 sm:mt-2 md:mt-6 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
        <Hero />

        <Timeline />

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <Apps />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
