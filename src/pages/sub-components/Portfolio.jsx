import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axiosInstance.get("/project/getall");
      // console.log("The project are", data);

      setProjects(data.projects);
    };

    getMyProjects();
  }, []);

  const displayed = viewAll ? projects : projects?.slice(0, 4);

  return (
    <div className="w-full mx-auto py-0 sm:py-5">
      {/* Header */}
      <div className="mb-10 text-center">
        <h4 className="text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mb-2">
          My portfolio
        </h4>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          My latest work
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5">
          A collection of full-stack projects built with the MERN and PERN
          stacks - from database design and REST APIs to clean, responsive React
          interfaces.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
        {displayed?.length > 0 ? (
          displayed.map((element, index) => (
            <div
              onClick={() => navigate(`/project/${element._id}`)}
              key={element._id}
              // className={`group relative overflow-hidden bg-zinc-900 min-h-[180px] sm:min-h-[220px] md:min-h-0 block cursor-pointer
              //   ${index === 0 ? "md:col-span-2 md:aspect-[16/9]" : "aspect-[4/3]"}
              // `}

              className={`group relative overflow-hidden bg-zinc-900 block cursor-pointer
                aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3]
                ${displayed.length === 1 ? "md:col-span-2 md:aspect-[16/9]" : ""}
              `}
            >
              {/* Image */}
              <img
                src={element.projectBanner?.url}
                alt={element.title || "Project"}
                className="absolute inset-0 w-full h-full object-fill scale-105 brightness-90 saturate-100 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-50 group-hover:saturate-150"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

              {/* Border Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-amber-300/40 transition-all duration-300 z-20 pointer-events-none" />

              {/* Index */}
              <span className="absolute top-4 left-5 z-30 text-zinc-600 text-[10px] tracking-[0.2em] font-light group-hover:text-amber-300 transition">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Live, Github & Preview Link */}
              <div className="absolute top-3 lg:top-4 right-5 z-30 opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all  duration-300 flex items-center gap-2">
                {/* Live Demo */}
                {element.projectLink && (
                  <a
                    href={element.projectLink}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    rel="noopener noreferrer"
                    className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-amber-400/40 flex items-center justify-center hover:border-amber-300 hover:shadow-[0_0_12px_rgba(251,191,36,0.35)] transition-all duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M2 10L10 2M10 2H4.5M10 2V7.5"
                        stroke="#e2c97e"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}

                {/* Preview */}
                <Link
                  to={`/project/${element._id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:border-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition-all duration-300"
                  title="Preview Project"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {/* GitHub Repo */}
                {element.gitRepoLink && (
                  <a
                    href={element.gitRepoLink}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    rel="noopener noreferrer"
                    className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-zinc-600/60 flex items-center justify-center hover:border-zinc-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] transition-all duration-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-zinc-300 hover:text-white"
                    >
                      <path d="M12 .5C5.7.5.5 5.9.5 12.4c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.2c-3.3.8-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.4-5.4-6.3 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.7.1-3.4 0 0 1.1-.3 3.5 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.5-1.3 3.5-1.3.7 1.7.2 3.1.1 3.4.8.9 1.3 2.1 1.3 3.5 0 4.9-2.8 6-5.5 6.3.4.4.9 1.1.9 2.2v3.2c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.5 5.9 18.3.5 12 .5z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-3 lg:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {/* Tag */}
                {/* {element.technologies && (
                  <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded-full mb-2 inline-block bg-amber-300/10 border border-amber-300/30 text-amber-300 backdrop-blur">
                    {Array.isArray(element.technologies)
                      ? element.technologies[0]
                      : element.technologies}
                  </span>
                )} */}

                {/* {Array.isArray(element.technologies) && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {element.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 rounded-full bg-amber-300/10 border border-amber-300/30 text-amber-300 backdrop-blur"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )} */}

                {/* You previously had: map is not a function, That means sometimes technologies is string, not array. When string, call this */}
                {element.technologies && (
                  <div className="flex flex-wrap gap-1 lg:gap-2 mb-1 lg:mb-2">
                    {(Array.isArray(element.technologies)
                      ? element.technologies
                      : element.technologies.split(",")
                    ).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[5px] sm:text-[6px] lg:text-[8px] px-1 sm:px-2 lg:px-3 py-1 tracking-[0.2em] uppercase rounded-full bg-amber-300/10 border border-amber-300/30 text-amber-300 backdrop-blur-md transition-all duration-300 ease-out hover:bg-amber-300/20 hover:border-amber-300/60 hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:-translate-y-0.5 animate-[fadeInUp_0.5s_ease_forwards]"
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold leading-snug tracking-tight mb-1 lg:mb-2 line-clamp-2">
                  {element.title || `Project ${index + 1}`}
                </p>

                {/* Stack */}
                {element.stack && (
                  <span className="group relative inline-flex items-center text-[8px] lg:text-[10px] px-3 py-1 font-medium uppercase tracking-[0.25em] text-zinc-300 border border-zinc-600 rounded-full bg-zinc-900/60 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.05]hover:border-amber-400/70 hover:text-amber-200 shadow-[0_0_0px_rgba(0,0,0,0)] hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]">
                    {/* Text */}
                    <span className="relative z-10">{element.stack}</span>

                    {/* Glow Aura */}
                    <span className="absolute inset-0 rounded-full opacity-0 bg-amber-400/10 blur-xl scale-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />

                    {/* Shimmer Sweep */}
                    <span className="absolute inset-0 rounded-full overflow-hidden">
                      <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.2s_ease-out]" />
                    </span>
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-10 h-px bg-zinc-700" />
            <p className="text-white text-xs tracking-[0.3em] uppercase">
              No projects yet
            </p>
          </div>
        )}
      </div>

      {/* Show More */}
      {projects?.length > 4 && (
        <div className="flex items-center gap-4 mt-[3px]">
          <div className="flex-1 h-px bg-gray-300 dark:bg-white/30" />

          <button
            onClick={() => setViewAll(!viewAll)}
            className="relative overflow-hidden bg-lightHover dark:bg-darkHover border border-gray-300 dark:border-white/30 hover:border-amber-400/60 text-zinc-400 text-[10px] tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300 group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              {viewAll ? "Collapse" : `All Projects ● ${projects.length}`}
            </span>

            {/* hover fill effect */}
            <span className="absolute inset-0 bg-amber-300 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
          </button>

          <div className="flex-1 h-px bg-gray-300 dark:bg-white/30" />
          {/*  <div className="flex-1 h-px bg-zinc-800" /> */}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

/* {element.technologies && (
      <div className="flex flex-wrap gap-3">
        {(Array.isArray(element.technologies)
          ? element.technologies
          : element.technologies.split(",")
        ).map((tech, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-[10px] uppercase tracking-[0.2em]
              text-amber-300 border border-amber-400/30 rounded-full

              bg-black/40 backdrop-blur-md

              transition-all duration-300
              hover:text-black
              hover:bg-amber-300
              hover:shadow-[0_0_10px_rgba(251,191,36,0.8),0_0_25px_rgba(251,191,36,0.6)]
              hover:-translate-y-[2px]
            "
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    )}
*/

/*  {element.technologies && (
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(element.technologies)
          ? element.technologies
          : element.technologies.split(",")
        ).map((tech, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-[10px] uppercase tracking-[0.2em]
              rounded-full text-white

              bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20
              border border-white/10 backdrop-blur-md

              transition-all duration-300
              hover:from-indigo-500 hover:to-pink-500
              hover:text-white
              hover:scale-105
            "
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    )}
*/

/* {element.technologies && (
      <div className="flex flex-wrap gap-3">
        {(Array.isArray(element.technologies)
          ? element.technologies
          : element.technologies.split(",")
        ).map((tech, i) => (
          <span
            key={i}
            className="group relative px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300 border border-zinc-700 rounded-full bg-zinc-900/60 backdrop-blur-md transition-all duration-300 ease-out hover:border-amber-400 hover:text-amber-300 hover:shadow-lg hover:-translate-y-[3px]"
          >
            <span className="relative z-10">{tech.trim()}</span>

            <span className="absolute inset-0 rounded-full opacity-0 bg-amber-400/10 blur-md group-hover:opacity-100 transition" />
          </span>
        ))}
      </div>
    )}
*/

// {
//   element.technologies && (
//     <div className="flex flex-wrap gap-2 mb-3">
//       {(Array.isArray(element.technologies)
//         ? element.technologies
//         : element.technologies.split(",")
//       ).map((tech, i) => (
//         <span
//           key={i}
//           style={{ animationDelay: `${i * 80}ms` }}
//           className="
//                           group relative px-3 py-1 text-[10px] uppercase tracking-[0.2em]
//                           rounded-full cursor-pointer

//                           text-zinc-300 border border-zinc-700
//                           bg-zinc-900/60 backdrop-blur-md

//                           transition-all duration-300 ease-out

//                           hover:text-amber-300
//                           hover:border-amber-400/70
//                           hover:-translate-y-[3px]
//                           hover:scale-[1.05]
//                           hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]

//                           animate-[fadeInUp_0.5s_ease_forwards]
//                         "
//         >
//           {/* Text */}
//           <span className="relative z-10">{tech.trim()}</span>

//           {/* Magnetic glow layer */}
//           <span
//             className="
//                         absolute inset-0 rounded-full
//                         bg-amber-400/10 blur-md opacity-0
//                         transition-all duration-300
//                         group-hover:opacity-100
//                         group-hover:scale-125
//                       "
//           />

//           {/* Border glow pulse */}
//           <span
//             className="
//                           absolute inset-0 rounded-full
//                           border border-amber-400/0
//                           group-hover:border-amber-400/40
//                           transition-all duration-300
//                         "
//           />
//         </span>
//       ))}
//     </div>
//   );
// }
