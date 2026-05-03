// import { axiosInstance } from "@/utils/axiosInstance";

// import { useEffect, useState } from "react";

// const Timeline = () => {
//   const [timeline, setTimeline] = useState([]);

//   useEffect(() => {
//     const getMyTimeline = async () => {
//       const { data } = await axiosInstance.get("/timeline/getall");

//       setTimeline(data.timelines);
//     };

//     getMyTimeline();
//   }, []);

//   return (
//     <div>
//       <h1 className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] mb-4 font-extrabold">
//         Timeline
//       </h1>

//       <ol className="relative border-s border-gray-200 dark:border-gray-700">
//         {timeline &&
//           timeline.map((element) => {
//             return (
//               <li className="mb-10 ms-6" key={element._id}>
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>

//                 <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
//                   {element.title}
//                 </h3>

//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
//                   {element.timeline.from} -{" "}
//                   {element.timeline.to ? element.timeline.to : "Present"}
//                 </time>

//                 <p className="text-base font-normal text-gray-600 dark:text-gray-400">
//                   {element.description}
//                 </p>
//               </li>
//             );
//           })}
//       </ol>
//     </div>
//   );
// };

// export default Timeline;

// import { axiosInstance } from "@/utils/axiosInstance";
// import { useEffect, useRef, useState } from "react";

// const Timeline = () => {
//   const [timeline, setTimeline] = useState([]);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     const getMyTimeline = async () => {
//       const { data } = await axiosInstance.get("/timeline/getall");
//       setTimeline(data.timelines);
//     };

//     getMyTimeline();
//   }, []);

//   // 👇 Scroll Reveal Logic
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             observer.unobserve(entry.target); // run once
//           }
//         });
//       },
//       {
//         threshold: 0.2,
//       },
//     );

//     itemsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [timeline]);

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center animate-fade-down">
//         Timeline
//       </h1>

//       {/* Timeline */}
//       <div className="relative border-l border-gray-300 dark:border-gray-700">
//         {timeline.map((element, index) => (
//           <div
//             key={element._id}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="mb-10 ml-6 timeline-item"
//             style={{ transitionDelay: `${index * 120}ms` }}
//           >
//             {/* Dot */}
//             <span className="absolute -left-3 flex h-6 w-6">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30"></span>
//               <span className="relative inline-flex rounded-full h-6 w-6 bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md"></span>
//             </span>

//             {/* Card */}
//             <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                 {element.title}
//               </h3>

//               <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
//                 {element.timeline.from} - {element.timeline.to || "Present"}
//               </time>

//               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
//                 {element.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;

import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const getMyTimeline = async () => {
      const { data } = await axiosInstance.get("/timeline/getall");
      setTimeline(data.timelines);
    };

    getMyTimeline();
  }, []);

  // Scroll Reveal (same as before)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [timeline]);

  // Scroll Progress Line Logic
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height;
      const visible = windowHeight - rect.top;

      const progressValue = Math.min(Math.max(visible / totalHeight, 0), 1);

      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-0 sm:py-5">
      {/* Header */}
      <div className="mb-10 text-center">
        <h4 className="text-sm tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mb-2">
          Journey
        </h4>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Timeline
        </h2>
      </div>

      {/* <h4 className="text-center mb-1 text-lg font-medium">Journey</h4>
      <h2 className="text-4xl font-extrabold mb-10 text-center animate-fade-down bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
        Timeline
      </h2> */}

      {/* Timeline Container */}
      <div ref={containerRef} className="relative my-20">
        {/* Base line */}
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-300 dark:bg-gray-700" />

        {/* Progress line */}
        <div
          className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 to-indigo-500 transition-all duration-300 ease-out"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Items */}
        <div className="relative">
          {timeline.map((element, index) => (
            <div
              key={element._id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="mb-10 ml-6 timeline-item"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Dot */}
              <span className="absolute -left-3 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30" />

                <span className="relative inline-flex rounded-full h-6 w-6 bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md" />
              </span>

              {/* Dot */}
              {/* <span className="absolute -left-[7px] flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500" />
              </span> */}

              {/* <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"> */}

              {/* Card */}
              <div className="p-5 hover:bg-lightHover dark:hover:bg-darkHover rounded-xl hover:shadow-black dark:hover:shadow-white backdrop-blur-md border border-gray-300 dark:border-white/30 transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                  {element.title}
                </h3>

                <time className="block mb-2 text-sm text-gray-600 dark:text-white/80">
                  {element.timeline.from} - {element.timeline.to || "Present"}
                </time>

                <p className="text-gray-600 dark:text-white/80 text-sm leading-relaxed">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
