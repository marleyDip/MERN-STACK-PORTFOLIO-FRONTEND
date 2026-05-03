import { useLenis } from "@/contexts/LenisContext";
import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [user, setUser] = useState({});
  const lenis = useLenis();

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axiosInstance.get("/user/me/portfolio");

      setUser(data.user);
    };

    getMyProfile();
  }, []);

  return (
    <div className="px-6 sm:px-8 w-full max-w-[1050px] mx-auto">
      <footer className="bg-[#131314] w-full text-white pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-around">
          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-sm md:text-base">
            <Link
              to={"/"}
              onClick={() => lenis?.scrollTo(0)}
              // onClick={() => window.scrollTo({ top: 0 })}
              className="font-medium text-neutral-500 hover:text-neutral-400 transition-all"
            >
              Home
            </Link>

            <Link
              to={"/#about"}
              className="font-medium text-neutral-500 hover:text-neutral-400 transition-all"
            >
              About
            </Link>

            <Link
              to={"/#portfolio"}
              className="font-medium text-neutral-500 hover:text-neutral-400 transition-all"
            >
              Portfolio
            </Link>

            <Link
              to={"/#skills"}
              className="font-medium text-neutral-500 hover:text-neutral-400 transition-all"
            >
              Skills
            </Link>

            <Link
              to={"/#contact"}
              className="font-medium text-neutral-500 hover:text-neutral-400 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6 mt-6">
            {/* X (Twitter) */}
            <a
              href={user.twitterURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            {/* Github */}
            <a
              href={user.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* Linkedin */}
            <a
              href={user.linkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={user.instagramURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={user.facebookURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href={`tel:${user.phone}`}
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${user.email}`}
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-5xl mx-auto mt-12 pt-4 border-t border-neutral-700 flex justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Md Sofian Hasan
          </p>

          <p className="text-sm text-neutral-400">All right reserved.</p>
        </div>

        {/* Name */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-green-500 rounded-full blur-[170px] pointer-events-none" />
          <h3 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#0D542B] mt-4 sm:mt-6">
            Sofian
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
