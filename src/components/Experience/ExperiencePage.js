import React, { useEffect } from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import ServicesSection from "../Services/ServicesSection";
import SEO from "../UI/SEO";

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <SEO
        title="Career Experience | Sourabh Bhakar — Full Stack Developer"
        description="Professional engineering tenure of Sourabh Bhakar at Lawyered (Lots247 AI Legal Chatbot, NestJS REST APIs) and Jaikvik Technology. Delivered 35% performance gains."
        keywords="Sourabh Bhakar Experience, Lawyered, Lots247, Jaikvik Technology, Full Stack Engineer Career, MERN Developer, NestJS, Work History"
        path="/experience"
      />
      <ExperienceTimeline />
      <ServicesSection />
    </div>
  );
};

export default ExperiencePage;
