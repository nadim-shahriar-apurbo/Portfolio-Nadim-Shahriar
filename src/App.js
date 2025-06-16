import React, { useState, useEffect } from "react";
import Header from "./component/Head/Header";
import Features from "./component/Features/Features";
import Home from "./component/Hero/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Skill from "./component/Skill/Skill";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("light-mode");
    return savedMode !== null ? JSON.parse(savedMode) : true; // Default to dark mode
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Header toggleMode={() => setDarkMode((prev) => !prev)} darkMode={darkMode} />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Skill />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
