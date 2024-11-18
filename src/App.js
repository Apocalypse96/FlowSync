import React, { createContext, useState } from "react";
import FlowSimulation from "/home/aayush/newsletter-renewal/src/components/FlowSimulation.js";
import "./styles.css"; // Global styles

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
      
          {/* <h1>Newsletter Subscription Renewal Flow</h1> */}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
    
        <FlowSimulation />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
