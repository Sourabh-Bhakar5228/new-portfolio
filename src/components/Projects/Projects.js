import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Sourabh-Bhakar5228/repos"
        );
        const data = await response.json();

        const filtered = data.filter((repo) => !repo.fork);
        const sorted = filtered.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      } catch (err) {
        console.error("Error fetching GitHub repositories", err);
      }
    };
    fetchRepos();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My GitHub <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          All my repositories (excluding forks), fetched directly via GitHub
          API.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {repos.map((repo) => (
            <Col md={4} className="project-card" key={repo.id}>
              <ProjectCard
                imgPath={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                isBlog={false}
                title={repo.name}
                description={generateDescription(repo)}
                ghLink={repo.html_url}
                demoLink={repo.homepage || null}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

function generateDescription(repo) {
  const {
    description,
    stargazers_count,
    language,
    topics = [],
    homepage,
  } = repo;

  const starsText =
    stargazers_count > 0
      ? `⭐ ${stargazers_count} star${stargazers_count > 1 ? "s" : ""}`
      : "";

  const langText = language ? `Built with **${language}**` : "";
  const topicsText = topics.length ? `; Topics: ${topics.join(", ")}` : "";
  const descText = description ? description : "No description provided.";

  const homepageText = homepage ? `Deployed at [Live Demo](${homepage}).` : "";

  return `${langText ? langText + "; " : ""}${descText}${topicsText}${
    starsText ? `; ${starsText}` : ""
  }${homepageText ? ` ${homepageText}` : ""}`;
}

export default Projects;
