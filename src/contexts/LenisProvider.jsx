import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Lenis from "lenis";
import { LenisContext } from "./LenisContext";

export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    setLenis(instance);

    let rafId;
    const raf = (time) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

LenisProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
