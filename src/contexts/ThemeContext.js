import { createContext, useContext } from "react";

// Give default value (optional but cleaner)
const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export default ThemeContext;
