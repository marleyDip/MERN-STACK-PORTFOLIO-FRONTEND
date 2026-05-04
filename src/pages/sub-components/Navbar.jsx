import { useLenis } from "@/contexts/LenisContext";
import { useTheme } from "@/contexts/ThemeContext";
import { axiosInstance } from "@/utils/axiosInstance";
import {
  CloudDownload,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState({});
  const lenis = useLenis();

  // Fetch User
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axiosInstance.get("/user/me/portfolio");

      setUser(data.user);
    };

    getMyProfile();
  }, []);

  // Socials
  const socials = [
    {
      icon: Phone,
      href: user.phone ? `tel:${user.phone}` : null,
      label: "Call",
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      href: user.email ? `mailto:${user.email}` : null,
      label: "Email",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      href: user.facebookURL,
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Linkedin,
      href: user.linkedInURL,
      label: "LinkedIn",
      color: "hover:text-sky-500",
    },
    {
      icon: Github,
      href: user.githubURL,
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ].filter((item) => item.href);

  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef();
  const navLinkRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );

        navLinkRef.current?.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      } else {
        navRef.current?.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );

        navLinkRef.current?.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navbar
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (scrollY > 50) {
  //       navRef.current.classList.add(
  //         "bg-white",
  //         "bg-opacity-50",
  //         "backdrop-blur-lg",
  //         "shadow-sm",
  //         "dark:bg-darkTheme",
  //         "dark:shadow-white/20",
  //       );
  //       navLinkRef.current.classList.remove(
  //         "bg-white",
  //         "shadow-sm",
  //         "bg-opacity-50",
  //         "dark:border",
  //         "dark:border-white/30",
  //         "dark:bg-transparent",
  //       );
  //     } else {
  //       navRef.current.classList.remove(
  //         "bg-white",
  //         "bg-opacity-50",
  //         "backdrop-blur-lg",
  //         "shadow-sm",
  //         "dark:bg-darkTheme",
  //         "dark:shadow-white/20",
  //       );
  //       navLinkRef.current.classList.add(
  //         "bg-white",
  //         "shadow-sm",
  //         "bg-opacity-50",
  //         "dark:border",
  //         "dark:border-white/30",
  //         "dark:bg-transparent",
  //       );
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 blur-3xl -z-10 translate-y-[-80%] dark:hidden">
        <img src="header-bg-color.png" alt="" className="w-full" />
      </div>

      {/* Header */}
      <header ref={navRef} className="fixed top-0 z-50 w-full py-4 ">
        <nav className="max-w-[1050px] flex items-center justify-between px-6 sm:px-8 mx-auto">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => lenis?.scrollTo(0)}
            // onClick={() => window.scrollTo({ top: 0 })}
            className="flex items-center text-xl sm:text-2xl font-bold text-primary hover:opacity-80"
          >
            Sofian Hasan
          </Link>

          {/* Desktop Menu */}
          <ul
            ref={navLinkRef}
            className="hidden md:flex items-center text-lg font-medium gap-6 lg:gap-8 rounded-full px-6 lg:px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/30 dark:bg-transparent"
          >
            {["About", "Portfolio", "Skills", "Contact"].map((item, i) => {
              const id = item.toLowerCase().replace(" ", "");

              return (
                <li key={i}>
                  <Link
                    to={`/#${id}`}
                    className="hover:text-gray-500 dark:hover:text-gray-300 transition"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions Button */}
          <div className="flex items-center gap-2">
            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=11zJibj20bmlJfBKAfIanDEAROcCAiEES"
              className="group relative inline-flex items-center justify-center px-4 py-2 rounded-full shadow-sm border border-black/20 dark:border-white/30 dark:shadow-white/20 text-black dark:text-white font-medium overflow-hidden"
            >
              {/* SVG Wave */}
              <span className="absolute inset-0 z-0 overflow-hidden">
                <svg
                  className="absolute bottom-[-100%] left-0 w-full h-[200%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bottom-0"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 C150,120 350,0 500,80 L500,150 L0,150 Z"
                    // className="fill-black dark:fill-white"
                    className="fill-indigo-500 dark:fill-purple-400"
                  >
                    <animate
                      attributeName="d"
                      // dur="3s"
                      dur="6s"
                      repeatCount="indefinite"
                      values="
                        M0,80 C150,120 350,0 500,80 L500,150 L0,150 Z;
                        M0,60 C150,0 350,120 500,60 L500,150 L0,150 Z;
                        M0,80 C150,120 350,0 500,80 L500,150 L0,150 Z
                      "
                    />
                  </path>
                </svg>
              </span>

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                <CloudDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="hidden md:inline">Resume</span>
              </span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full shadow-sm border border-black/20 dark:border-white/30 dark:shadow-white/20 hover:bg-lightHover dark:hover:bg-darkHover hover:scale-105 transition-all duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full shadow-sm border border-black/20 dark:border-white/30 dark:shadow-white/20 hover:bg-lightHover dark:hover:bg-darkHover hover:scale-105 transition-all duration-300"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {/* OVERLAY */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
        ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className={`fixed top-0 left-0 h-screen w-64 z-50 transform transition-transform duration-500
        ${
          mobileMenuOpen ? "-translate-x-0" : "-translate-x-full"
        } bg-rose-50 dark:bg-darkHover dark:text-white shadow-xl`}
      >
        {/* HEADER */}
        <div className="relative flex items-center justify-between border-b dark:border-white/30 border-gray-400/80 px-6 py-5">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              lenis?.scrollTo(0);

              // window.scrollTo({ top: 0 });
            }}
            className="text-xl font-bold text-primary hover:opacity-80"
          >
            Sofian Hasan
          </Link>

          {/* Close Button */}
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6 hover:opacity-70 transition" />
          </button>
        </div>

        {/* MENU */}
        <ul className="flex flex-col gap-4 py-5 px-6">
          {["About", "Portfolio", "Skills", "Contact"].map((item, i) => {
            const id = item.toLowerCase().replace(" ", "");

            return (
              <li key={i}>
                <Link
                  to={`/#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center text-lg font-semibold transition-all duration-300 hover:translate-x-1 hover:opacity-70"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-3 px-3 py-5">
          {socials.map(({ icon: Icon, href, label, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`p-2 rounded-full bg-white/40 backdrop-blur-md
              dark:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10 ring-1 ring-black/5 dark:ring-white/10 ${color}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

/* Wave Download Resume Button
  <a
    href="https://drive.google.com/uc?export=download&id=11zJibj20bmlJfBKAfIanDEAROcCAiEES"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center gap-2 px-5 py-2.5
    rounded-full border border-black/20 dark:border-white/20
    text-black dark:text-white text-sm font-medium
    overflow-hidden group transition-all duration-300"
  >
    Liquid Background
    <span
      className="absolute inset-0 bg-black dark:bg-white
      translate-y-full group-hover:translate-y-0
      transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    />

    <span
      className="relative z-10 flex items-center gap-2
          group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
    >
      <CloudDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      <span className="hidden sm:inline">Resume</span>
    </span>
  </a>
*/

/* Download Resume Button
  <a
    href="/Md Sofian Hasan.pdf"
    download
    // download="Dip_Akand_Resume.pdf"
    className="inline-flex items-center gap-2 px-6 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    Download resume
  </a>

  <a
    href="/Md Sofian Hasan.pdf"
    target="_blank"
    rel="noopener noreferrer"

    className="inline-flex items-center gap-2 p-2 rounded-xl dark:text-white hover:bg-lightHover text-black dark:hover:bg-darkHover transition-all duration-300"
  >
    <CloudDownload className="w-5 h-5" /> resume
  </a>
*/

/* Actions Button
  <div className="flex items-center gap-1">
    <a
      href="https://drive.google.com/uc?export=download&id=11zJibj20bmlJfBKAfIanDEAROcCAiEES"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Resume"
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <CloudDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      <span className="hidden sm:inline">Resume</span>
    </a>

    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-lightHover dark:hover:bg-darkHover transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>

    <button
      className="block md:hidden ml-3"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <span className="sr-only">Open main menu</span>

      <Menu className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
*/

/* <ul className="flex flex-col gap-4 py-5 px-6">
    {["About", "Portfolio", "Skills", "Contact"].map((item, i) => (
      <li
        key={i}
        className="transition-all duration-300 hover:translate-x-1"
      >
        <Link
          to={`/#${item.toLowerCase().replace(" ", "")}`}
          // href={`#${item.toLowerCase().replace(" ", "")}`}
          onClick={() => setMobileMenuOpen(false)}
          className="hover:opacity-70 transition text-lg font-semibold"
        >
          {item}
        </Link>
      </li>
    ))}
  </ul>
*/
