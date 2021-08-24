import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Working Experience</h3>
            <Resumecontent
              title="MERN Developer"
              date="July 2021 - Present"
              content={[
                "Remote.JS",
                ,
              ]}
            />
            <Resumecontent
              title="SOFTWARE ENGINEER"
              date="June 2020 - May 2021"
              content={[
      
                "(CODEBOX Solutions Private Limited)",
              ]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="ReactJS- A Complete Guide for Frontend Web Development"
              content={[
                "from udemy.com",
              ]}
            />
            <Resumecontent
              title="JavaScript Algorithms and Data Structures"
              content={[
                "from freecodecamp.com",
              ]}
            />
            <Resumecontent
              title="Programming in HTML with JavaScript and CSS"
              content={[
                "from eduonix.com",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelors in Computer Science [University f Karachi] "
              date="2013 - 2018"
              content={[]}
            />
            <Resumecontent
              title="Intermediate in Pre-Engineering [Govt. Dehli College]"
              date="2011 - 2013"
              content={[ ]}
            />
            <Resumecontent
              title="Matriculation [Little Folk's School] "
              date="2000 - 2010"
              content={[]}
            />
            <h3 className="resume-title">Co-Curricular Activities</h3>
            <Resumecontent
              title=""
              content={[
                `Public Relations Team Member in UBIT proBattle`,
                `Volunteering in ProQuest`,
                "Member of Marketing Department in UBIT Annual Dinner",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
