import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mypicture.jpeg";
import Tilt from "react-parallax-tilt";
import Techstack from '../About/Techstack'
import ToolStack from '../About/Toolstack'


function Skills() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <br/> <br/> 
                <h4 style={{ textAlign: "justify" }}>
                    <span className="purple"><strong>Technology Stack</strong> </span>
                </h4>
                <Techstack />
                <h4 style={{ textAlign: "justify" }}>
                    <span className="purple"><strong>Tool Stack </strong></span>
                </h4>
                <ToolStack />
            </Container>
        </Container>
    );
}
export default Skills;
