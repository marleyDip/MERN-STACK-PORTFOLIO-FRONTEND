import { Outlet } from "react-router-dom";

import Footer from "@/pages/Footer";
import Navbar from "@/pages/sub-components/Navbar";

import ScrollToHash from "./ScrollToHash";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToHash />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// const Layout = () => {
//   return (
//     <>
//       {/* Smooth Scroll */}
//       <LenisScroll />

//       {/* Header */}
//       <Navbar />

//       {/* Scroll handlers */}
//       <ScrollToTop />
//       <ScrollToHash />

//       {/* Main Content */}
//       <main className="min-h-screen">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

export default Layout;
