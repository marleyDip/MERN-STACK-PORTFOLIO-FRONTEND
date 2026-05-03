// import { useTheme } from "@/contexts/ThemeContext";
// import { Menu, Moon, Sun, X } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const sideMenuRef = useRef();
//   const navRef = useRef();
//   const navLinkRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(-16rem)";
//   };
//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(16rem)";
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (scrollY > 50) {
//         navRef.current.classList.add(
//           "bg-white",
//           "bg-opacity-50",
//           "backdrop-blur-lg",
//           "shadow-sm",
//           "dark:bg-darkTheme",
//           "dark:shadow-white/20",
//         );
//         navLinkRef.current.classList.remove(
//           "bg-white",
//           "shadow-sm",
//           "bg-opacity-50",
//           "dark:border",
//           "dark:border-white/30",
//           "dark:bg-transparent",
//         );
//       } else {
//         navRef.current.classList.remove(
//           "bg-white",
//           "bg-opacity-50",
//           "backdrop-blur-lg",
//           "shadow-sm",
//           "dark:bg-darkTheme",
//           "dark:shadow-white/20",
//         );
//         navLinkRef.current.classList.add(
//           "bg-white",
//           "shadow-sm",
//           "bg-opacity-50",
//           "dark:border",
//           "dark:border-white/30",
//           "dark:bg-transparent",
//         );
//       }
//     });
//   }, []);

//   return (
//     <>
//       <div className="fixed top-0 right-0 w-11/12 blur-3xl -z-10 translate-y-[-80%] dark:hidden">
//         <img src="header-bg-color.png" alt="" className="w-full" />
//       </div>

//       <header
//         ref={navRef}
//         className="fixed top-0 z-50 w-full px-4 lg:px-0 max-w-5xl mx-auto h-14"
//       >
//         <div className="mx-2 flex items-center justify-between w-full">
//           {/* Logo */}
//           <a
//             className="flex items-center text-xl sm:text-2xl font-bold text-primary hover:opacity-80"
//             href="#"
//           >
//             Sofian Hasan
//           </a>

//           <nav
//             ref={navLinkRef}
//             className="hidden md:flex items-center text-lg font-medium gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/30 dark:bg-transparent"
//           >
//             <a
//               className="transition-colors hover:text-foreground/80 text-foreground/60"
//               href="#About"
//             >
//               About
//             </a>

//             <a
//               className="transition-colors hover:text-foreground/80 text-foreground/60"
//               href="#Portfolio"
//             >
//               Portfolio
//             </a>

//             <a
//               className="transition-colors hover:text-foreground/80 text-foreground/60"
//               href="#Skills"
//             >
//               Skills
//             </a>

//             <a
//               className="transition-colors hover:text-foreground/80 text-foreground/60"
//               href="#Contact"
//             >
//               Contact
//             </a>
//           </nav>

//           <div className="flex items-center gap-4">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg hover:bg-secondary transition-colors"
//             >
//               {theme === "dark" ? (
//                 <Sun className="w-5 h-5 text-foreground" />
//               ) : (
//                 <Moon className="w-5 h-5 text-foreground" />
//               )}
//             </button>

//             {/* Mobile Menubar */}
//             <button
//               className="block md:hidden ml-3"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               <a
//                 href="#About"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//               >
//                 About
//               </a>

//               <a
//                 href="#Portfolio"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//               >
//                 Portfolio
//               </a>

//               <a
//                 href="#Contact"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;

import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "text-foreground hover:opacity-70 transition-colors font-medium";

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 lg:px-0 max-w-5xl mx-auto h-14 transition-all duration-300 ${
        scrolled
          ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold text-primary hover:opacity-80"
        >
          Sofian Hasan
        </a>

        {/* NAV */}
        <nav className="hidden md:block">
          <ul
            className={`flex items-center gap-8 px-10 py-2 transition-all duration-300 ${
              scrolled
                ? "rounded-lg bg-white/50 shadow-sm backdrop-blur-md dark:bg-transparent dark:border dark:border-white/20"
                : "rounded-full bg-white/50 shadow-sm backdrop-blur-md"
            }`}
          >
            <li>
              <a className={linkClass} href="#About">
                About
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 pb-4 pt-2 bg-white/80 dark:bg-darkTheme/80 backdrop-blur-lg space-y-2">
          <li>
            <a
              className="block py-2 text-gray-700 dark:text-gray-200"
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="block py-2 text-gray-700 dark:text-gray-200"
              href="#Portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="block py-2 text-gray-700 dark:text-gray-200"
              href="#Skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="block py-2 text-gray-700 dark:text-gray-200"
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
