import Lottie from "lottie-react";
import devAnimation from "../assets/rest-api-loop-spin.json";

import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axiosInstance.get("/user/me/portfolio");
      // console.log("The user data is", data);

      setUser(data.user);
    };

    getMyProfile();
  }, []);

  return (
    <section id="about" className="py-0 sm:py-5 scroll-mt-10">
      <div className="w-full flex flex-col overflow-x-hidden">
        {/* Header */}
        <div className="mb-10 text-center">
          <h4 className="text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mb-2">
            Introduction
          </h4>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
            About me
          </h2>
        </div>

        {/* CONTENT */}
        {/* <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14"> */}
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          {/* IMAGE */}
          <div className="max-w-max mx-auto relative">
            <img
              src={user?.avatar?.url || "/avatar-holder.avif"}
              alt={user?.fullName || "User"}
              className="w-64 sm:w-80 rounded-3xl max-w-none"
            />

            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center group transition-transform duration-300 group-hover:scale-105">
              {/* <img
                src="circular-text.png"
                alt=""
                className="w-full animate-spin_slow"
              /> */}

              {/* <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin_slow"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
                  />
                </defs>

                
                  fill="#111"
                  fontSize="13"
                  fontWeight="600"
                  letterSpacing="4"
                
                <text fill="black" fontSize="14" letterSpacing="3">
                  <textPath href="#circlePath">
                    FULL STACK DEVELOPER • FULL STACK DEVELOPER •
                  </textPath>
                </text>
              </svg> */}

              {/* <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin_slow"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7 " />
                    <stop offset="100%" stopColor="#22d3ee " />
                  </linearGradient>

                  <path
                    id="circlePath"
                    d="M 100, 100
         m -75, 0
         a 75,75 0 1,1 150,0
         a 75,75 0 1,1 -150,0"
                  />
                </defs>

                <text
                  fill="url(#grad)"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="4"
                >
                  <textPath href="#circlePath">
                    FULL STACK DEVELOPER • FULL STACK DEVELOPER •
                  </textPath>
                </text>
              </svg> */}

              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin_slow group-hover:pause-spin"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>

                  <path
                    id="circlePath"
                    d="M 100, 100
                     m -75, 0
                     a 75,75 0 1,1 150,0
                     a 75,75 0 1,1 -150,0"
                  />
                </defs>

                {/* <text
                  fill="url(#grad)"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="3"
                >
                  <textPath href="#circlePath">
                    FULL STACK DEVELOPER • FRONT-END DEVELOPER •
                  </textPath>
                </text> */}

                <text
                  fill="url(#grad)"
                  fontSize="13"
                  fontWeight="600"
                  letterSpacing="4.5"
                >
                  <textPath href="#circlePath">
                    FULL-STACK ● REACT ● NODE.JS ● REST API ● &nbsp;
                  </textPath>

                  {/* <textPath href="#circlePath">
                    FULL-STACK ✦ REACT • NODE.JS ● REST API ◆ &nbsp;
                  </textPath> */}
                  {/* <textPath href="#circlePath">
                    MERN STACK ✦ PERN STACK ✦ FULL-STACK DEV ✦&nbsp;
                  </textPath> */}

                  {/* <textPath href="#circlePath">
                    <tspan fill="#7c3aed">REACT</tspan>
                    <tspan fill="#ffffff"> · </tspan>
                    <tspan fill="#06b6d4">FRONTEND</tspan>
                    <tspan fill="#ffffff"> · </tspan>
                    <tspan fill="#f59e0b">API</tspan>
                    <tspan fill="#ffffff"> · </tspan>
                    <tspan fill="#10b981">BACKEND</tspan>
                    <tspan fill="#ffffff"> · </tspan>
                    <tspan fill="#ec4899">FULL-STACK</tspan>
                    <tspan fill="#ffffff"> ✦ </tspan>
                  </textPath> */}

                  {/* <textPath href="#circlePath">
                    <tspan fill="#a78bfa">FULL-STACK</tspan>
                    <tspan fill="#94a3b8"> ◆ </tspan>
                    <tspan fill="#38bdf8">REACT</tspan>
                    <tspan fill="#94a3b8"> · </tspan>
                    <tspan fill="#34d399">NODE.JS</tspan>
                    <tspan fill="#94a3b8"> · </tspan>
                    <tspan fill="#fb923c">REST API</tspan>
                    <tspan fill="#94a3b8"> · </tspan>
                  </textPath> */}
                </text>
              </svg>

              <div className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Lottie
                  animationData={devAnimation}
                  loop={true}
                  className="w-14 h-14"
                  // autoplay={true}
                />
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center items-center">
            <img
              // src={user.avatar && user.avatar.url}
              src={user?.avatar?.url || "/avatar-holder.avif"}
              alt={user?.fullName || "User"}
              className="bg-white p-2 sm:p-4 rotate-[10deg] hover:rotate-0 transition-all duration-300 h-[240px] sm:h-[340px] md:h-[350px] lg:h-[360px] rounded-xl shadow-lg object-cover"
            />
          </div> */}

          {/* TEXT */}
          <div className="flex flex-col justify-center tracking-[1px] text-lg sm:text-xl gap-5 text-muted-foreground leading-relaxed">
            <p>
              My name is{" "}
              <span className="text-primary font-semibold">
                {user?.fullName || "Developer"}
              </span>
              , and I am a passionate full-stack developer focused on building
              modern web applications.
            </p>

            <p>
              I enjoy working with MERN & PERN stack, and continuously learning
              new technologies to improve my development skills.
            </p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="tracking-[1px] text-lg sm:text-xl text-muted-foreground leading-relaxed">
          I believe in consistency, discipline, and building scalable systems
          that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;

/* <div className="text-center mb-10">
    <h4 className="text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mb-2">
      Introduction
    </h4>

    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 relative inline-block">
      About Me
      <span className="absolute left-1/2 -bottom-2 w-1/2 h-[2px] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-[0.5px]" />
    </h2>

    <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto">
      A quick introduction about who I am and what I do.
    </p>
  </div>
*/
