// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToHash = () => {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const el = document.querySelector(hash);

//       if (el) {
//         setTimeout(() => {
//           // el.scrollIntoView({ behavior: "auto" }); // for Lenis
//           window.scrollTo({ top: el.offsetTop, behavior: "auto" });
//         }, 100);
//       }
//     }
//   }, [hash]);

//   return null;
// };

// export default ScrollToHash;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (!el) return;

    const timer = setTimeout(() => {
      const offset = 90;

      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 200); // important delay for route render

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
