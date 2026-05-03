import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { axiosInstance } from "../utils/axiosInstance";
import { CircleCheckBig, X } from "lucide-react";

const ProjectView = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axiosInstance.get(`/project/get/${id}`);
        setProject(data.project);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to load project");
      }
    };

    if (id) getProject();
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-lime-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const descriptionList = project.description?.split(". ") || [];
  const technologiesList = project.technologies?.split(", ") || [];

  return (
    <section className="min-h-screen pt-24 sm:pt-36 pb-24">
      <div className="max-w-[1050px] mx-auto space-y-10 px-6 sm:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Project Details
          </h1>

          {/* <Button onClick={() => navigate("/")}>Back to Portfolio</Button> */}

          <Button onClick={() => navigate("/#portfolio")}>
            Back to Portfolio
          </Button>

          {/* <Button
            onClick={() => {
              navigate("/#portfolio");

              setTimeout(() => {
                const el = document.getElementById("portfolio");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            Back to Portfolio
          </Button> */}
        </div>

        {/* Project Card */}
        <div className="bg-white/70 dark:bg-darkHover/40 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 overflow-hidden">
          {/* Image */}
          <div className="w-full">
            <img
              src={project.projectBanner?.url || "/avatarHolder.jpg"}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-fill"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
                Description
              </h3>

              <ul className="list-disc ml-5 space-y-1 text-gray-600 dark:text-gray-300">
                {descriptionList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {technologiesList.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-lime-200/80 text-lime-700 dark:bg-lime-500/20 dark:text-lime-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.stack?.split(",").map((item, i) => (
                  <div key={i} className="relative group">
                    {/* animated border layer */}
                    <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500 opacity-100 group-hover:opacity-0 blur-sm transition duration-500 animate-gradient-x" />

                    {/* inner chip */}
                    <span className="relative px-3 py-1 rounded-full text-sm font-medium bg-lightHover dark:bg-darkHover text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {item.trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold mb-1">Stack</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.stack}
              </p>
            </div> */}

            {/* Status */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Deployment Status
              </h3>

              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium w-fit
              ${
                project.deployed
                  ? "bg-lime-200 text-lime-700 dark:bg-lime-500/20 dark:text-lime-400"
                  : "bg-red-200 text-red-700 dark:bg-red-500/10 dark:text-red-400"
              }`}
              >
                {project.deployed ? (
                  <>
                    <CircleCheckBig className="w-4 h-4" />
                    Deployed
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4" />
                    Not Deployed
                  </>
                )}
              </div>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold mb-1">Deployed</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {project.deployed ? (
                  <span className="flex items-center gap-2">
                    Yes{" "}
                    <CircleCheckBig className="w-5 h-5 text-lime-700 dark:text-lime-400" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    No <X className="w-5 h-5 text-red-700 dark:text-red-400" />
                  </span>
                )}
              </p>
            </div> */}

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.gitRepoLink && (
                <a
                  href={project.gitRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  GitHub Repo
                </a>
              )}

              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-lime-500 text-black font-medium hover:bg-lime-400 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectView;

/* <section className="min-h-screen pt-28 pb-16 px-6 bg-lightHover dark:bg-darkTheme"> */

/* <div className="space-y-2">
    <h3 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">
      Stack
    </h3>

    <div className="flex flex-wrap gap-2">
      {project.stack?.split(",").map((item, i) => (
        <span
          key={i}
          className="group relative px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-400/50"
        >
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-indigo-500/10 blur-md"/>

          <span className="relative">{item.trim()}</span>
        </span>
      ))}
    </div>
  </div>
*/

/* neon glow
import { useState } from "react";

const StackChips = ({ project }) => {
  const [activeStack, setActiveStack] = useState(null);

  const stacks = project.stack?.split(",") || [];

  return (
    <div className="space-y-2">
      <h3 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">
        Stack
      </h3>

      <div className="flex flex-wrap gap-3">
        {stacks.map((item, i) => {
          const isActive = activeStack === item.trim();

          return (
            <button
              key={i}
              onClick={() =>
                setActiveStack(isActive ? null : item.trim())
              }
              className="relative group"
            >
              // neon glow layer
              <span
                className={`absolute -inset-[2px] rounded-full transition duration-500 blur-md
                ${
                  isActive
                    ? "opacity-100 bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 animate-pulse"
                    : "opacity-0 group-hover:opacity-40 bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500"
                }`}
              />

              // chip
              <span
                className={`relative px-3 py-1 rounded-full text-sm font-medium
                border transition-all duration-300
                ${
                  isActive
                    ? "text-white bg-black/80 border-transparent scale-105 shadow-lg"
                    : "text-gray-700 dark:text-gray-200 bg-white dark:bg-darkHover border-gray-200/60 dark:border-white/10"
                }
                group-hover:-translate-y-1`}
              >
                {item.trim()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StackChips;
*/
