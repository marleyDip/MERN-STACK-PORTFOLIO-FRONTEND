import Lottie from "lottie-react";
import devAnimation from "../../assets/gradient-layers-hover-slide.json";

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

  const data = [
    {
      name: "Languages",
      icon1: "code-icon.png",
      icon2: "code-icon-dark.png",
      description:
        "HTML, CSS, JavaScript, React Js, Next Js, Express Js, PostgreSQL",
    },
    {
      name: "Education",
      icon1: "edu-icon.png",
      icon2: "edu-icon-dark.png",
      description: "B.Sc in Information & Communication Engineering",
    },
    {
      name: "Projects",
      icon1: "project-icon.png",
      icon2: "project-icon-dark.png",
      description: "Built more than 10 projects",
    },
  ];

  return (
    <div className="w-full mx-auto py-0 sm:py-5 overflow-x-hidden">
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
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* IMAGE & CIRCLE */}
        <div className="max-w-max mx-auto relative">
          {/* Image */}
          <img
            src={user?.avatar?.url || "/avatar-holder.avif"}
            alt={user?.fullName || "User"}
            className="w-64 sm:w-80 h-full sm:h-96 aspect-square object-cover rounded-3xl max-w-none"
          />

          {/* Circle */}
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center group transition-transform duration-300 group-hover:scale-105">
            {/* spinning ring */}
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

              <text
                fill="url(#grad)"
                fontSize="13"
                fontWeight="700"
                letterSpacing="4.5"
              >
                <textPath href="#circlePath">
                  FULL-STACK ● REACT ● NODE.JS ● REST API ● &nbsp;
                </textPath>
              </text>
            </svg>

            {/* Icon */}
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Lottie
                animationData={devAnimation}
                loop={true}
                autoplay={true}
                className="w-14 h-14"
              />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl leading-relaxed text-justify tracking-normal">
            My focus is on the backend - designing REST APIs, structuring
            databases, and writing server-side logic that is clean, efficient,
            and built to scale. On the frontend, I build interfaces with React
            that are fast, responsive, and easy to maintain. I care deeply about
            how systems are architected - not just whether the code works, but
            whether it will hold up as the product grows.
            <br />
            <br />I approach every project with consistency and ownership. I
            don&apos;t just write features - I think about the full picture,
            from database schema to user experience.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((data) => (
              <li
                key={data.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 sm:p-4 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover/50 hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80"
              >
                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={data.icon2}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {data.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {data.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
