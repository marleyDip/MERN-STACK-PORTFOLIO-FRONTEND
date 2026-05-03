import { lazy, Suspense } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
const Home = lazy(() => import("./pages/Home"));
const ProjectView = lazy(() => import("./pages/ProjectView"));

import { ThemeProvider } from "./contexts/ThemeProvider";
import { LenisProvider } from "./contexts/LenisProvider";

// Global loader (Suspense fallback)
const GlobalFallback = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-darkTheme">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-32 h-32 border-b-2 border-lime-500 rounded-full animate-spin" />
        {/* <div className="w-16 h-16 border-4 border-lime-500/30 border-t-lime-500 rounded-full animate-spin" /> */}

        {/* Text */}
        <p className="text-lg md:text-xl font-semibold text-center tracking-widest racking-widest text-gray-600 dark:text-gray-400">
          Md Sofian Hasan
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <LenisProvider>
          {/* Routes only inside Suspense */}
          <Suspense fallback={<GlobalFallback />}>
            <Routes>
              {/* Layout wrapper */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectView />} />
              </Route>
            </Routes>
          </Suspense>

          <ToastContainer position="bottom-right" theme="dark" />
        </LenisProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
