import React, { useEffect } from "react";
import AboutSection from "./AboutSection";
import SkillsSection from "../Skills/SkillsSection";
import EducationSection from "../Education/EducationSection";
import SEO from "../UI/SEO";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <SEO
        title="About Sourabh Bhakar | Full Stack Developer & AI Engineer"
        description="Learn about Sourabh Bhakar — Full Stack Developer with 2+ years of production experience building high-scale web applications with React.js, Next.js, Node.js, NestJS, Python, and MongoDB."
        keywords="About Sourabh Bhakar, Full Stack Developer, React.js, Next.js, TypeScript, NestJS, Python FastAPI, Software Engineer Profile, Gurugram"
        path="/about"
      />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
};

export default AboutPage;
