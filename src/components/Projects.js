import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Airbnb Replica",
      description: "Front-End and Back-End Web Development",
      imgUrl: projImg1,
      webLink: "https://breakable-jade-lingerie.cyclic.app/",
    },
    {
      title: "Memories",
      description: "MERN Stack Application",
      imgUrl: projImg2,
      webLink: "",
    },
    {
      title: "Movix",
      description: "React and Redux",
      imgUrl: projImg3,
      webLink: "",
    },
    {
      title: "Assembly Line",
      description: "Object Oriented Programming-C++",
      imgUrl: projImg4,
      webLink: "https://github.com/agoyal31/Assembly-line-project_CPP",
    },
    {
      title: "Maze Runner App",
      description: "Data Structures and Algorithms",
      imgUrl: projImg5,
      webLink: "https://github.com/agoyal31/DSA_Maze-Runner-Project",
    },
    {
      title: "Vacation Checklist",
      description: "React Fundamentals",
      imgUrl: projImg6,
      webLink: "https://calm-phoenix-bcb295.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="allu">
                    <h2>Projects</h2>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="uhu"></img>
    </section>
  );
};
