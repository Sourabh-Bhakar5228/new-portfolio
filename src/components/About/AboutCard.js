import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sourabh Bhakar </span>
            from <span className="purple">Gurgaon, India.</span>
            <br />I am currently working at{" "}
            <span className="purple">Jaikvik Technology Pvt. Ltd.</span> since
            October 2024 as a Software Developer.
            <br />
            I have completed an Integrated BSc (NM) in Mathematics and a MERN
            Stack course in Gurgaon.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Sourabh Bhakar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
