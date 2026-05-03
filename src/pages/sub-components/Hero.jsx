import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

import { axiosInstance } from "@/utils/axiosInstance";

const Hero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axiosInstance.get("/user/me/portfolio");

      setUser(data.user);
    };

    getMyProfile();
  }, []);

  return (
    <div className="w-full pt-32">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2" />
        <p>Online</p>
      </div>

      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem]
        md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4"
      >
        Hey, I&apos;m {user.fullName}
      </h1>

      {/* <h1
        className="text-tubeLight-effect overflow-x-hidden text-[1.3rem]
        sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]"
      >
        <Typewriter
          words={[
            "FULL-STACK DEVELOPER",
            "EXPERIENCED WITH REACT & EXPRESS",
            "MERN & PERN STACK ENGINEER",
            "REST API & DATABASE ARCHITECT",
            "FROM CONCEPT TO DEPLOYMENT",
          ]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={70}
          delaySpeed={100}
        />
      </h1> */}

      {/* TypeWriter */}
      {/* <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] flex items-center"></div> */}
      <div className="min-h-20 sm:min-h-24 md:min-h-28 flex items-center">
        <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[6px] sm:tracking-[10px] font-semibold leading-tight">
          <Typewriter
            words={[
              "FULL-STACK DEVELOPER",
              "EXPERIENCED WITH REACT & EXPRESS",
              "MERN & PERN STACK ENGINEER",
              "REST API & DATABASE ARCHITECT",
              "FROM CONCEPT TO DEPLOYMENT",
            ]}
            loop={50}
            cursor
            typeSpeed={55}
            deleteSpeed={35}
            delaySpeed={600}
          />
        </h1>
      </div>

      {/* Social Links */}
      <div className="w-fit px-5 py-2 bg-slate-200/70 dark:bg-slate-50 rounded-[20px] backdrop-blur-md flex items-center gap-5 mt-6 md:mt-8 lg:mt-12 shadow-md">
        <Link to={user.instagramURL} target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>

        <Link to={user.facebookURL} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link>

        <Link to={user.linkedInURL} target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>

        <Link to={user.twitterURL} target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </Link>
      </div>

      {/* Github & Resume */}
      <div className="mt-4 md:mt-8 flex gap-3">
        <Link to={user.githubURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>

        <Link to={user.resume && user.resume.url} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
      </div>

      {/* About */}
      <p className="mt-8 text-base md:text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-300 tracking-normal">
        {user.aboutMe}
      </p>

      <hr className="my-8 md:my-10 border-gray-300 dark:border-white/10" />

      {/* <p className="mt-8 text-base md:text-xl text-justify tracking-[2px] ">
        {user.aboutMe}
      </p>

      <hr className="my-8 md:my-10 " /> */}
    </div>
  );
};

export default Hero;

// import {
//   ExternalLink,
//   Facebook,
//   Github,
//   Instagram,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

// import { useEffect, useState } from "react";
// import { Typewriter } from "react-simple-typewriter";
// import { Button } from "@/components/ui/button";
// import { axiosInstance } from "@/utils/axiosInstance";
// import { toast } from "react-toastify";

// const Hero = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getMyProfile = async () => {
//       try {
//         const { data } = await axiosInstance.get("/user/me");
//         setUser(data.user);
//       } catch (error) {
//         // avoid crashing UI
//         console.log("User not logged in");
//         console.log(error);
//         toast.error(error?.response?.data?.message || "Failed to load profile");
//       }
//     };

//     getMyProfile();
//   }, []); // ✅ FIXED

//   // ======================
//   // LOADING STATE
//   // ======================
//   if (!user) {
//     return (
//       <div className="py-10 animate-pulse">
//         <div className="h-6 w-32 bg-gray-300 mb-4 rounded"></div>
//         <div className="h-10 w-64 bg-gray-300 mb-6 rounded"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       {/* STATUS */}
//       <div className="flex items-center gap-2 mb-2">
//         <span className="bg-green-400 rounded-full h-2 w-2 animate-pulse"></span>
//         <p className="text-sm text-muted-foreground">Online</p>
//       </div>

//       {/* NAME */}
//       <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold tracking-wide mb-4">
//         Hey, I&apos;m{" "}
//         <span className="text-primary">{user?.fullName || "Developer"}</span>
//       </h1>

//       {/* TYPEWRITER */}
//       <h2 className="text-tubeLight-effect text-[1.2rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.6rem] tracking-[8px]">
//         <Typewriter
//           words={[
//             "FULL STACK DEVELOPER",
//             "PASSIONATE WEB DEVELOPER",
//             "ALWAYS LEARNING NEW THINGS",
//             "UI/UX DESIGNER",
//           ]}
//           loop={0}
//           cursor
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1200}
//         />
//       </h2>

//       {/* SOCIALS */}
//       <div className="w-fit px-5 py-2 bg-slate-50 rounded-2xl flex gap-5 items-center mt-6 shadow-sm">
//         {user?.instagramURL && (
//           <a href={user.instagramURL} target="_blank">
//             <Instagram className="text-pink-500 w-6 h-6 hover:scale-110 transition" />
//           </a>
//         )}

//         {user?.facebookURL && (
//           <a href={user.facebookURL} target="_blank">
//             <Facebook className="text-blue-700 w-6 h-6 hover:scale-110 transition" />
//           </a>
//         )}

//         {user?.linkedInURL && (
//           <a href={user.linkedInURL} target="_blank">
//             <Linkedin className="text-sky-500 w-6 h-6 hover:scale-110 transition" />
//           </a>
//         )}

//         {user?.twitterURL && (
//           <a href={user.twitterURL} target="_blank">
//             <Twitter className="text-blue-500 w-6 h-6 hover:scale-110 transition" />
//           </a>
//         )}
//       </div>

//       {/* BUTTONS */}
//       <div className="mt-6 flex gap-3 flex-wrap">
//         {user?.githubURL && (
//           <a href={user.githubURL} target="_blank">
//             <Button className="rounded-full flex items-center gap-2">
//               <Github />
//               Github
//             </Button>
//           </a>
//         )}

//         {user?.resume?.url && (
//           <a href={user.resume.url} target="_blank">
//             <Button className="rounded-full flex items-center gap-2">
//               <ExternalLink />
//               Resume
//             </Button>
//           </a>
//         )}
//       </div>

//       {/* ABOUT */}
//       <p className="mt-6 text-lg tracking-wide text-muted-foreground leading-relaxed">
//         {user?.aboutMe || "Passionate developer building modern web apps."}
//       </p>

//       <hr className="my-8" />
//     </div>
//   );
// };

// export default Hero;
