import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const fallbackImg =
    "https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1";

  const [imgSrc, setImgSrc] = useState(props.imgPath || fallbackImg);

  const handleImageError = () => {
    setImgSrc(fallbackImg);
  };

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgSrc}
        alt="Project preview"
        onError={handleImageError}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
