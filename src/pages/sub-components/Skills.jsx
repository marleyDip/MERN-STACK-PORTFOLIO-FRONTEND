import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axiosInstance.get("/skill/getall");
      setSkills(data.skills);
    };

    getMySkills();
  }, []);

  return (
    <div className="w-full mx-auto py-0 sm:py-5">
      {/* Header */}
      <div className="mb-10 text-center">
        <h4 className="text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mb-2">
          What I Work With
        </h4>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          My Skills
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5">
          Full-stack tools and technologies I use to build, ship, and scale web
          applications.
        </p>
      </div>

      {/* Grid Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 my-20">
        {skills &&
          skills.map((element) => (
            <div
              key={element._id}
              className="sk-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/8 shadow-sm dark:shadow-none cursor-default"
              // style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* glow dot behind image */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 rounded-full bg-violet-400/10 dark:bg-violet-500/10 blur-xl" />

                {/* Image */}
                <img
                  src={element.svg?.url}
                  alt={element.title}
                  className="sk-img h-10 sm:h-12 w-auto object-contain relative z-10 drop-shadow-sm"
                />
              </div>

              {/* Title */}
              <p className="sk-title text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium text-center tracking-wide">
                {element.title}
              </p>
            </div>
          ))}
      </div>

      {/* empty state */}
      {skills?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-px bg-slate-300 dark:bg-zinc-700" />
          <p className="text-slate-400 dark:text-zinc-600 text-xs tracking-[0.25em] uppercase">
            No skills added yet
          </p>
        </div>
      )}
    </div>
  );
};

export default Skills;
