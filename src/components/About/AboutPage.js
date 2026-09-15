import React, { useEffect } from "react";
import AboutSection from "./AboutSection";
import SkillsSection from "../Skills/SkillsSection";
import EducationSection from "../Education/EducationSection";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
};

export default AboutPage;
