import { useLenis } from "@/contexts/LenisContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // console.log("ScrollToHash fired", { hash, lenis: !!lenis, pathname });

    if (!hash || !lenis) return;

    const id = hash.replace("#", "");

    const timer = setTimeout(() => {
      lenis.scrollTo(`#${id}`, {
        offset: -90,
        duration: 1.2,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [hash, pathname, lenis]);

  return null;
};

export default ScrollToHash;

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useLenis } from "@/contexts/LenisContext";

// const ScrollToHash = () => {
//   const { hash, pathname } = useLocation();
//   const lenis = useLenis();

//   useEffect(() => {
//     if (!hash || !lenis) return;

//     const id = hash.replace("#", "");

//     const timer = setTimeout(() => {
//       requestAnimationFrame(() => {
//         const el = document.getElementById(id);
//         if (el) {
//           lenis.scrollTo(el, {
//             offset: -90,
//             duration: 1.2,
//           });
//         }
//       });
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [hash, pathname, lenis]);

//   return null;
// };

// export default ScrollToHash;
