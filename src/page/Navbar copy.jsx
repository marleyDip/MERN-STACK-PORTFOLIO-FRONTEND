import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      }
    });
  }, []);

  return (
    <>
      {/* <div className="absolute inset-0 -z-10 dark:hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[120px] top-10 left-10" />
        <div className="absolute w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] bottom-10 right-10" />
      </div> */}

      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#e8d7d7]/60 rounded-full blur-[120px] top-10 left-10 will-change-transform" />
        <div className="absolute w-[500px] h-[500px] bg-[#d9e2f2]/60 rounded-full blur-[120px] bottom-10 right-10 will-change-transform" />
      </div> */}

      {/* <div
        className="fixed w-11/12 rounded-full blur-[120px]  inset-0  -z-10 translate-y-[-80%]"
        style={{
          background: `linear-gradient(
        135deg,
        #f3f1ed 0%,
        #e6e4ef 25%,
        #d9e2f2 50%,
        #d6cbe6 75%,
        #e8d7d7 100%
      )`,
        }}
      /> */}

      <div className="fixed top-0 right-0 w-11/12 blur-3xl -z-10 translate-y-[-80%] dark:hidden">
        <img src="header-bg-color.png" alt="" className="w-full" />
      </div>

      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0"> */}

      <header
        ref={navRef}
        className="fixed top-0 z-50 w-full px-4 lg:px-0 max-w-7xl mx-auto h-14"
      >
        <div className="mx-2 flex items-center justify-between w-full">
          {/* Logo */}
          <a
            className="flex items-center text-xl sm:text-2xl font-bold text-primary hover:opacity-80"
            href="#"
          >
            {/* <img src="/logo.png" alt="" className="w-36" /> */}
            Sofian Hasan
          </a>

          {/* <nav className="md:flex hidden items-center space-x-6 text-lg font-medium "> */}

          <nav
            ref={navLinkRef}
            className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/30 dark:bg-transparent"
          >
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#About"
            >
              About
            </a>

            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#Portfolio"
            >
              Portfolio
            </a>

            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#Skills"
            >
              Skills
            </a>

            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#Contact"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
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

            {/* Mobile Menubar */}
            <button
              className="inline-flex items-center justify-center rounded-md md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#About"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                About
              </a>

              <a
                href="#Portfolio"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Portfolio
              </a>

              <a
                href="#Contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
