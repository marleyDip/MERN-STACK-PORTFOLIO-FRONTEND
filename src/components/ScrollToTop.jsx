import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/contexts/LenisContext";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // console.log("ScrollToTop fired", { pathname, hash });

    if (!hash && lenis) {
      // lenis.scrollTo(0, {
      //   immediate: true, // instant jump, no smooth scroll
      // });

      lenis.scrollTo(0);
    }
  }, [pathname, hash, lenis]);

  return null;
};

export default ScrollToTop;
