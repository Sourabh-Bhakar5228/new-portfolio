import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ExperiencePage from "./components/Experience/ExperiencePage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ContactPage from "./components/Contact/ContactPage";
import ResumeNew from "./components/Resume/ResumeNew";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/UI/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./index.css";
import "./style.css";
import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project" element={<Navigate to="/projects" />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
