import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top when changing PAGE, not hash navigation
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
