import React, { useEffect } from "react";
import ContactSection from "./ContactSection";
import SEO from "../UI/SEO";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <SEO
        title="Contact Sourabh Bhakar | Hire Full Stack & AI Developer"
        description="Get in touch with Sourabh Bhakar for software engineering roles, full-stack development, or AI collaborations. Based in Gurugram, India."
        keywords="Contact Sourabh Bhakar, Hire Full Stack Developer, Hire Next.js Developer, Software Engineer Contact, Email, Gurugram, India"
        path="/contact"
      />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
