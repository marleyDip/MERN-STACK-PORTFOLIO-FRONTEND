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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

        .sk-wrap { font-family: 'Outfit', sans-serif; }

        /* card */
        .sk-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease;
        }
        .sk-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 0;
        }
        .sk-card:hover {
          transform: translateY(-6px);
        }
        .sk-card:hover::before { opacity: 1; }

        /* border glow on hover */
        .sk-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid transparent;
          background: linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.4)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 1;
          pointer-events: none;
        }
        .sk-card:hover::after { opacity: 1; }

        /* image float */
        .sk-img {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          z-index: 2;
        }
        .sk-card:hover .sk-img { transform: scale(1.12) translateY(-2px); }

        /* title */
        .sk-title {
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }
        .sk-card:hover .sk-title { color: #a78bfa; }

        /* stagger */
        @keyframes skillReveal {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sk-card { animation: skillReveal 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .sk-card:nth-child(1)  { animation-delay: 0.03s }
        .sk-card:nth-child(2)  { animation-delay: 0.06s }
        .sk-card:nth-child(3)  { animation-delay: 0.09s }
        .sk-card:nth-child(4)  { animation-delay: 0.12s }
        .sk-card:nth-child(5)  { animation-delay: 0.15s }
        .sk-card:nth-child(6)  { animation-delay: 0.18s }
        .sk-card:nth-child(7)  { animation-delay: 0.21s }
        .sk-card:nth-child(8)  { animation-delay: 0.24s }
        .sk-card:nth-child(9)  { animation-delay: 0.27s }
        .sk-card:nth-child(10) { animation-delay: 0.30s }

        /* divider gradient */
        .sk-divider {
          background: linear-gradient(90deg, transparent, #8b5cf6 30%, #06b6d4 70%, transparent);
        }
      `}</style>

      <div className="sk-wrap w-full mx-auto py-0 sm:py-5">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-5 h-px bg-violet-400/60" />
            <span className="text-violet-400/80 text-[10px] tracking-[0.3em] uppercase font-light">
              What I Work With
            </span>
            <div className="w-5 h-px bg-violet-400/60" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Skills
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Full-stack tools and technologies I use to build, ship, and scale
            web applications.
          </p>

          <div className="sk-divider h-px w-48 mx-auto mt-6 opacity-40" />
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 my-10">
          {skills &&
            skills.map((element) => (
              <div
                key={element._id}
                className="sk-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3
                bg-white dark:bg-zinc-900/60
                border border-slate-200/80 dark:border-white/8
                shadow-sm dark:shadow-none
                cursor-default"
              >
                {/* glow dot behind image */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full bg-violet-400/10 dark:bg-violet-500/10 blur-xl" />
                  <img
                    src={element.svg?.url}
                    alt={element.title}
                    className="sk-img h-10 sm:h-12 w-auto object-contain relative z-10 drop-shadow-sm"
                  />
                </div>

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
    </>
  );
};

export default Skills;
