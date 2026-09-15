import React, { useEffect } from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import ServicesSection from "../Services/ServicesSection";

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <ExperienceTimeline />
      <ServicesSection />
    </div>
  );
};

export default ExperiencePage;
