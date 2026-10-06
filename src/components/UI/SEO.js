import { useEffect } from "react";

const siteUrl = "https://sourabh-bhakar.vercel.app";

const updateMetaTag = (name, content, isProperty = false) => {
  if (!content) return;
  const attribute = isProperty ? "property" : "name";
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const updateCanonical = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};

const updateSchemaData = (schemaObj) => {
  const schemaId = "json-ld-structured-data";
  let script = document.getElementById(schemaId);
  if (!script) {
    script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObj);
};

const SEO = ({
  title = "Sourabh Bhakar | Full Stack Developer & AI Engineer",
  description = "Sourabh Bhakar — Full Stack Developer with 2+ years of production experience in React.js, Next.js, Node.js, TypeScript, NestJS, and AI/LLM interview platforms like Golu AI.",
  keywords = "Sourabh Bhakar, Full Stack Developer, Next.js Developer, NestJS Engineer, React Developer, Golu AI, TypeScript, MERN Stack, AI Interviewer, Portfolio",
  path = "/",
  schema = null,
}) => {
  useEffect(() => {
    const fullUrl = `${siteUrl}${path}`;

    // Update document title
    document.title = title;

    // Update standard SEO meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Sourabh Bhakar");
    updateMetaTag("robots", "index, follow");

    // Canonical link
    updateCanonical(fullUrl);

    // Open Graph
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:site_name", "Sourabh Bhakar Portfolio", true);
    updateMetaTag("og:image", `${siteUrl}/sourabh.jpg`, true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${siteUrl}/sourabh.jpg`);

    // Structured JSON-LD schema
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sourabh Bhakar",
      url: fullUrl,
      jobTitle: "Full Stack Developer & AI Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/Sourabh-Bhakar5228",
        "https://www.linkedin.com/in/sourabh-bhakar/",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "NestJS",
        "Python",
        "FastAPI",
        "MongoDB",
        "Golu AI",
        "WebRTC",
        "BullMQ",
        "Redis",
      ],
    };

    updateSchemaData(schema || defaultSchema);
  }, [title, description, keywords, path, schema]);

  return null;
};

export default SEO;
