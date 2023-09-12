import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon lastIcons">
              <a
                href="https://www.linkedin.com/in/avni-goyal-586558208/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon1" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092281548591"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon2" />
              </a>
              <a
                href="https://www.instagram.com/avnigoel113/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Icon3" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
