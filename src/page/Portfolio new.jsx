import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axiosInstance.get("/project/getall");
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);

  const displayed = viewAll ? projects : projects?.slice(0, 6);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');

        .pf-wrap { font-family: 'Outfit', sans-serif; }

        .pf-img {
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
                      filter 0.5s ease;
          transform: scale(1.05);
          filter: brightness(0.85) saturate(0.95);
        }
        .pf-card:hover .pf-img {
          transform: scale(1.13);
          filter: brightness(0.35) saturate(1.1);
        }

        .pf-grad {
          background: linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 100%);
          opacity: 0;
          transition: opacity 0.45s ease;
        }
        .pf-card:hover .pf-grad { opacity: 1; }

        .pf-info {
          transform: translateY(14px);
          opacity: 0;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.4s ease;
        }
        .pf-card:hover .pf-info { transform: translateY(0); opacity: 1; }

        .pf-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1.5px solid transparent;
          transition: border-color 0.4s ease;
          pointer-events: none;
          z-index: 20;
        }
        .pf-card:hover::after { border-color: rgba(226,201,126,0.45); }

        .pf-idx { transition: color 0.3s; }
        .pf-card:hover .pf-idx { color: #e2c97e; }

        .pf-arrow {
          opacity: 0;
          transform: translate(5px,-5px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .pf-card:hover .pf-arrow { opacity: 1; transform: translate(0,0); }

        .pf-tag {
          backdrop-filter: blur(8px);
          background: rgba(226,201,126,0.12);
          border: 1px solid rgba(226,201,126,0.3);
          color: #e2c97e;
        }

        .pf-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.35s ease;
        }
        .pf-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #e2c97e;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .pf-btn:hover::before { transform: scaleY(1); }
        .pf-btn:hover { color: #0a0a0a; }
        .pf-btn-txt { position: relative; z-index: 1; }

        .pf-featured { grid-column: span 2; }
        @media (max-width: 767px) { .pf-featured { grid-column: span 1; } }

        @keyframes rise {
          from { opacity:0; transform: translateY(28px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .pf-card { animation: rise 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .pf-card:nth-child(1){animation-delay:0.05s}
        .pf-card:nth-child(2){animation-delay:0.12s}
        .pf-card:nth-child(3){animation-delay:0.19s}
        .pf-card:nth-child(4){animation-delay:0.26s}
        .pf-card:nth-child(5){animation-delay:0.33s}
        .pf-card:nth-child(6){animation-delay:0.4s}
      `}</style>

      <div className="pf-wrap" id="Portfolio">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
          {displayed?.length > 0 ? (
            displayed.map((element, index) => (
              <Link
                to={`/project/${element._id}`}
                key={element._id}
                className={`pf-card relative overflow-hidden bg-zinc-900 block
                  ${index === 0 ? "pf-featured md:aspect-[16/9]" : "aspect-[4/3]"}
                `}
              >
                <img
                  src={element.projectBanner?.url}
                  alt={element.title || "Project"}
                  className="pf-img absolute inset-0 w-full h-full object-cover"
                />

                <div className="pf-grad absolute inset-0 z-10" />

                <span className="pf-idx absolute top-4 left-5 z-30 text-zinc-600 text-[10px] tracking-[0.2em] font-light">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="pf-arrow absolute top-4 right-5 z-30">
                  <div className="w-8 h-8 rounded-full border border-amber-400/40 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H4.5M10 2V7.5"
                        stroke="#e2c97e"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="pf-info absolute bottom-0 left-0 right-0 z-20 p-5">
                  {element.technologies && (
                    <span className="pf-tag text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-2 inline-block">
                      {Array.isArray(element.technologies)
                        ? element.technologies[0]
                        : element.technologies}
                    </span>
                  )}
                  <p className="text-white/95 text-sm font-light leading-snug mt-1">
                    {element.title || `Project ${index + 1}`}
                  </p>
                  {element.description && (
                    <p className="text-zinc-400 text-[11px] mt-1 line-clamp-1 font-light">
                      {element.description}
                    </p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-10 h-px bg-zinc-700" />
              <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
                No projects yet
              </p>
            </div>
          )}
        </div>

        {/* Show More */}
        {projects?.length > 6 && (
          <div className="flex items-center gap-4 mt-[3px]">
            <div className="flex-1 h-px bg-zinc-800" />
            <button
              className="pf-btn border border-zinc-700 hover:border-amber-400/60 text-zinc-400 text-[10px] tracking-[0.3em] uppercase px-10 py-4"
              onClick={() => setViewAll(!viewAll)}
            >
              <span className="pf-btn-txt">
                {viewAll ? "Collapse" : `All Projects · ${projects.length}`}
              </span>
            </button>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;

// import { axiosInstance } from "@/utils/axiosInstance";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Portfolio = () => {
//   const [viewAll, setViewAll] = useState(false);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const getMyProjects = async () => {
//       const { data } = await axiosInstance.get("/project/getall");
//       setProjects(data.projects);
//     };
//     getMyProjects();
//   }, []);

//   const displayed = viewAll ? projects : projects?.slice(0, 6);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');

//         .pf-section { font-family: 'Outfit', sans-serif; }

//         .pf-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-weight: 300;
//           font-style: italic;
//         }

//         .pf-card-img {
//           transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
//                       filter 0.5s ease;
//           transform: scale(1.04);
//           filter: brightness(0.82);
//         }
//         .pf-card:hover .pf-card-img {
//           transform: scale(1.11);
//           filter: brightness(0.45);
//         }

//         .pf-card-overlay {
//           background: linear-gradient(to top, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.25) 55%, transparent 100%);
//           opacity: 0;
//           transition: opacity 0.45s ease;
//         }
//         .pf-card:hover .pf-card-overlay { opacity: 1; }

//         .pf-card-content {
//           transform: translateY(12px);
//           opacity: 0;
//           transition: transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94),
//                       opacity 0.4s ease;
//         }
//         .pf-card:hover .pf-card-content {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         .pf-card-num { transition: color 0.3s ease; }
//         .pf-card:hover .pf-card-num { color: #e2c97e; }

//         .pf-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border: 1px solid transparent;
//           transition: border-color 0.4s ease;
//           pointer-events: none;
//           z-index: 10;
//         }
//         .pf-card:hover::after { border-color: rgba(226,201,126,0.4); }

//         .pf-arrow {
//           opacity: 0;
//           transform: translate(4px, -4px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }
//         .pf-card:hover .pf-arrow {
//           opacity: 1;
//           transform: translate(0, 0);
//         }

//         .pf-btn {
//           position: relative;
//           overflow: hidden;
//           transition: color 0.35s ease;
//         }
//         .pf-btn::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: #e2c97e;
//           transform: translateY(101%);
//           transition: transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
//           z-index: 0;
//         }
//         .pf-btn:hover::after { transform: translateY(0); }
//         .pf-btn:hover { color: #030712; }
//         .pf-btn-label { position: relative; z-index: 1; }

//         .pf-divider {
//           background: linear-gradient(90deg, transparent, #e2c97e 35%, rgba(226,201,126,0.15) 100%);
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(22px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .pf-card { animation: fadeUp 0.55s ease both; }
//         .pf-card:nth-child(1) { animation-delay: 0.04s; }
//         .pf-card:nth-child(2) { animation-delay: 0.1s; }
//         .pf-card:nth-child(3) { animation-delay: 0.16s; }
//         .pf-card:nth-child(4) { animation-delay: 0.22s; }
//         .pf-card:nth-child(5) { animation-delay: 0.28s; }
//         .pf-card:nth-child(6) { animation-delay: 0.34s; }
//       `}</style>

//       <section
//         className="pf-section bg-gray-950 py-24 px-5 sm:px-10 lg:px-20"
//         id="Portfolio"
//       >
//         <div className="max-w-6xl mx-auto">
//           {/* ── Header ── */}
//           <div className="mb-16">
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-5 h-px bg-amber-400/70" />
//               <span className="text-amber-400/75 text-[10px] tracking-[0.3em] uppercase font-light">
//                 Selected Works
//               </span>
//             </div>

//             <div className="flex items-end justify-between gap-4 flex-wrap">
//               <h2 className="pf-title text-white text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.9]">
//                 My{" "}
//                 <em
//                   className="not-italic text-transparent"
//                   style={{ WebkitTextStroke: "1px #e2c97e" }}
//                 >
//                   Portfolio
//                 </em>
//               </h2>
//               {projects?.length > 0 && (
//                 <span className="text-zinc-600 text-xs tracking-[0.22em] pb-1">
//                   {String(projects.length).padStart(2, "0")} Projects
//                 </span>
//               )}
//             </div>

//             <div className="pf-divider h-px mt-8" />
//           </div>

//           {/* ── Grid ── */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
//             {displayed?.length > 0 ? (
//               displayed.map((element, index) => (
//                 <Link
//                   to={`/project/${element._id}`}
//                   key={element._id}
//                   className="pf-card relative block overflow-hidden bg-zinc-900 aspect-[4/3]"
//                 >
//                   {/* index badge */}
//                   <span className="pf-card-num absolute top-4 left-4 z-20 text-zinc-700 text-[10px] tracking-[0.2em]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   {/* arrow */}
//                   <div className="pf-arrow absolute top-4 right-4 z-20 w-7 h-7 rounded-full border border-amber-400/50 flex items-center justify-center">
//                     <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
//                       <path
//                         d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7"
//                         stroke="#e2c97e"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>

//                   {/* image */}
//                   <img
//                     src={element.projectBanner?.url}
//                     alt={element.title || "Project"}
//                     className="pf-card-img absolute inset-0 w-full h-full object-cover"
//                   />

//                   {/* overlay */}
//                   <div className="pf-card-overlay absolute inset-0 z-10" />

//                   {/* bottom info */}
//                   <div className="pf-card-content absolute bottom-0 left-0 right-0 z-20 p-5">
//                     <p className="text-amber-400/70 text-[9px] tracking-[0.28em] uppercase mb-1.5 font-light">
//                       View Project
//                     </p>
//                     <p className="text-white/90 text-sm font-light leading-snug">
//                       {element.title || `Project ${index + 1}`}
//                     </p>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <div className="col-span-full flex flex-col items-center justify-center py-28 gap-4">
//                 <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center">
//                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <rect
//                       x="1"
//                       y="1"
//                       width="6.5"
//                       height="6.5"
//                       rx="0.5"
//                       stroke="#3f3f46"
//                       strokeWidth="1"
//                     />
//                     <rect
//                       x="10.5"
//                       y="1"
//                       width="6.5"
//                       height="6.5"
//                       rx="0.5"
//                       stroke="#3f3f46"
//                       strokeWidth="1"
//                     />
//                     <rect
//                       x="1"
//                       y="10.5"
//                       width="6.5"
//                       height="6.5"
//                       rx="0.5"
//                       stroke="#3f3f46"
//                       strokeWidth="1"
//                     />
//                     <rect
//                       x="10.5"
//                       y="10.5"
//                       width="6.5"
//                       height="6.5"
//                       rx="0.5"
//                       stroke="#3f3f46"
//                       strokeWidth="1"
//                     />
//                   </svg>
//                 </div>
//                 <p className="text-zinc-700 text-xs tracking-[0.25em] uppercase">
//                   No projects yet
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* ── Show More ── */}
//           {projects?.length > 6 && (
//             <div className="mt-14 flex items-center gap-5">
//               <div className="flex-1 h-px bg-zinc-800/80" />
//               <button
//                 className="pf-btn border border-amber-400/50 text-amber-400/80 text-[10px] tracking-[0.25em] uppercase px-9 py-3.5"
//                 onClick={() => setViewAll(!viewAll)}
//               >
//                 <span className="pf-btn-label">
//                   {viewAll ? "Show Less" : `Show All · ${projects.length}`}
//                 </span>
//               </button>
//               <div className="flex-1 h-px bg-zinc-800/80" />
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;
