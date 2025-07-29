import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sourabh4.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been exploring ever
              since.
              <br />
              <br />I am skilled in technologies like:
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript,
                  React.js, Next.js, Node.js, Express.js, MongoDB, Firebase,
                  Git, GitLab, AWS, and Linux.
                </b>
              </i>
              <br />
              <br />
              My areas of interest include building &nbsp;
              <i>
                <b className="purple">web technologies and digital products</b>
              </i>
              , and I am also exploring opportunities in{" "}
              <b className="purple">Blockchain</b>.
              <br />
              <br />
              Whenever possible, I love to apply my skills in
              <b className="purple"> backend development</b> with{" "}
              <b className="purple">Node.js</b> and modern JavaScript libraries
              & frameworks like{" "}
              <i>
                <b className="purple">React.js and Next.js</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sourabh-Bhakar5228"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter" // <-- Replace with real Twitter if you have
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sourabh-bhakar-b3bb3324b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram" // <-- Replace with real Instagram if you have
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
