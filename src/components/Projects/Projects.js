import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dance website with Pug "
              description="This dance website is a modern and visually appealing platform that showcases various dance styles, events, classes, and instructor profiles. It is built with Pug for efficient and readable HTML templating, ensuring clean and modular code."
              ghLink="https://github.com/Sourabh-Bhakar5228"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mern Social Media App"
              description="A fully functional Social Media Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to connect, share posts, like and comment on others' posts, and build their network. It incorporates modern UI/UX, authentication, and efficient backend services."
              ghLink="https://github.com/Sourabh-Bhakar5228"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Real Estate Aplication "
              description="A comprehensive Real Estate Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to search, list, buy, sell, and rent properties seamlessly. The application incorporates advanced features such as property filters, map integration, and user management for buyers, sellers, and agents."
              ghLink="https://github.com/Sourabh-Bhakar5228"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mern E-commerce"
              description="A robust and scalable E-commerce Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application supports a seamless shopping experience, offering features like user authentication, product browsing, cart management, order processing, and an admin panel for inventory and order management."
              ghLink="https://github.com/Sourabh-Bhakar5228"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blog Applications"
              description="A feature-rich Blog Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create, read, update, and delete blog posts, comment on blogs, and manage their profiles. An admin panel provides tools to manage content and users, ensuring a smooth blogging experience for all."
              ghLink="https://github.com/Sourabh-Bhakar5228"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Weather , Clones  and so on.."
              description="A collection of diverse and innovative web applications, ranging from real-world weather dashboards and social media clones to creative applications like e-commerce platforms and workflow management systems. All projects leverage Sourabh's expertise in the MERN stack, React Native, Tailwind CSS, and advanced UI/UX practices to deliver high-quality, scalable, and user-friendly solutions."
              ghLink="https://github.com/Sourabh-Bhakar5228"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
