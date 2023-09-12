import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Banner = () => {
  const [text] = useTypewriter({
    words: ["Full stack developer.", "Web developer.", "an amazing person."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Avni Goyal`}{" "}
                    <span className="wrap">
                      <h2>
                        {text}
                        <Cursor
                          cursorBlinking="false"
                          cursorStyle="|"
                          cursorColor="white"
                        />
                      </h2>
                    </span>
                  </h1>
                  <p>
                    Dedicated Full Stack Developer specializing in designing and
                    developing cutting-edge software solutions, with a
                    relentless focus on user-centric design and performance
                    excellence
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};