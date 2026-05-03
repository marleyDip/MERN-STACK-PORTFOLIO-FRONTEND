import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // MENU
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  //  SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* background decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] blur-3xl dark:hidden">
        <img src="header-bg-color.png" alt="" className="w-full" />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full py-4 flex items-center justify-between z-50 transition
        ${
          scrolled
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a
          className="flex items-center text-xl sm:text-2xl font-bold text-primary hover:opacity-80"
          href="#"
        >
          Sofian Hasan
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 font-Ovo
  bg-white/50 shadow-sm backdrop-blur-lg
  dark:border dark:border-white/30 dark:bg-transparent
  transition-all duration-500 ease-in-out

  ${scrolled ? "rounded-lg" : "rounded-full"}
  `}
        >
          {["Home", "About me", "Services", "My Work", "Contact me"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-gray-500 dark:hover:text-gray-300 transition"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>

          {/* Contact button */}
          {/* <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 rounded-full ml-4 font-Ovo hover:bg-slate-100/70 dark:hover:bg-darkHover dark:border-white/30"
          >
            Contact
            <img
              src="./assets/arrow-icon.png"
              className="w-3 dark:hidden"
              alt=""
            />
            <img
              src="./assets/arrow-icon-dark.png"
              className="w-3 hidden dark:block"
              alt=""
            />
          </a> */}

          {/* Mobile menu button */}
          <button onClick={openMenu} className="md:hidden">
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 z-50 transform transition-transform duration-500 font-Ovo
        ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } bg-rose-50 dark:bg-darkHover dark:text-white`}
      >
        {/*  <button className="absolute right-6 top-6" onClick={closeMenu}>
          <img
            src="./assets/close-black.png"
            className="w-5 dark:hidden"
            alt=""
          />
          <img
            src="./assets/close-white.png"
            className="w-5 hidden dark:block"
            alt=""
          />
        </button> */}

        <ul className="flex flex-col gap-4 py-20 px-10">
          {["Home", "About me", "Services", "My Work", "Contact me"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}
