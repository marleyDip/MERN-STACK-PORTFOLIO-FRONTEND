// const Footer = () => {
//   return (
//     <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">
//       <hr />
//       <h1 className="text-tubeLight-effect flex text-center text-3xl mt-5 justify-center sm:justify-start tracking-[8px]">
//         Thanks For Scrolling
//       </h1>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Branding */}
        <div>
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Dip<span className="text-amber-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Crafting modern web experiences with performance, scalability, and
            clean design.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-sm text-zinc-500 uppercase tracking-[0.2em] mb-4">
            Navigation
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="#Portfolio"
              className="text-zinc-400 hover:text-white transition"
            >
              Portfolio
            </a>
            <a
              href="#About"
              className="text-zinc-400 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#Contact"
              className="text-zinc-400 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right - Social */}
        <div className="md:text-right">
          <h3 className="text-sm text-zinc-500 uppercase tracking-[0.2em] mb-4">
            Connect
          </h3>

          <div className="flex md:justify-end gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:youremail@gmail.com"
              className="text-zinc-400 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Dip Akand. All rights reserved.</p>

          <p className="tracking-wide">Built with React · Tailwind · Node</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
