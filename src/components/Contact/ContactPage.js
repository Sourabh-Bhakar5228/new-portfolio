import React, { useEffect } from "react";
import ContactSection from "./ContactSection";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
