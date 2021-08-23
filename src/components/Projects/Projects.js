import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hr from "../../Assets/Projects/hr.png";
import rahilalab from "../../Assets/Projects/rahilalab.png";
import banking from "../../Assets/Projects/banking.png";
import tracking from "../../Assets/Projects/tracking.png";
import anmolerishta from "../../Assets/Projects/anmolerishta.png";
import Aliveandwell from "../../Assets/Projects/Aliveandwell.png";

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
              imgPath={tracking}
              isBlog={false}
              title="Tracking Mart Product System"
              description="Shortest Route Analysis using Mart floor map based on combinatorial optimization and searching algorithm."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hr}
              isBlog={false}
              title="Human Capital HR solutions"
              description="Human capital provides expert outsourced HR consultancy and support. They help client focusses on achieving competitive edge through identification assessment and recruitment of the right profile"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              isBlog={false}
              title="Internet banking Management System"
              description="A clone of some of the banking features including Bill payments, Transfer between accounts and Account management using MERN Stack."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aliveandwell}
              isBlog={false}
              title="Alive and Well"
              description="A customized Web-App for patient testing and serving remotely."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anmolerishta}
              isBlog={false}
              title="AnmoleRishta"
              description="AnmoleRishta is providing best platform in types of assistance for searching life partner/life accomplice to associate one another."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rahilalab}
              isBlog={false}
              title="Rahila Research and Reference Lab (Pvt) Ltd"
              description="is a clinical/research based Web App that offer laboratory testing services."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
