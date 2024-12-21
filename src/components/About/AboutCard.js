import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sourabh Bhakar </span>
            from <span className="purple"> Gurgoan ,India.</span>
            <br />
            I am currently Complete InternShip as a software developer at Code
            Tech It Solution.
            <br />
            I have completed Integrated BSc (NM) in Maths and Mern Stack course
            Gurgoan.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Vollyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sourabh Bhakar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
