import { useState } from "react";
import { CloudDownload } from "lucide-react";

export default function LiquidButton() {
  const [waveY, setWaveY] = useState(80);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;

    // map mouse Y to wave curve (tweak for feel)
    const newY = 50 + (y / rect.height) * 50;
    setWaveY(newY);

    // setWaveY((prev) => prev + (newY - prev) * 0.15);
  };

  return (
    <a
      href="https://drive.google.com/uc?export=download&id=11zJibj20bmlJfBKAfIanDEAROcCAiEES"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-black/20 dark:border-white/20 text-black dark:text-white font-medium overflow-hidden group"
    >
      {/* Wave */}
      <span className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d={`M0,${waveY} C150,${waveY + 20} 350,${waveY - 20} 500,${waveY} L500,150 L0,150 Z`}
            className="fill-black dark:fill-white transition-all duration-200"
          />
        </svg>
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
        <CloudDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        <span className="hidden sm:inline">Resume</span>
      </span>
    </a>
  );
}
