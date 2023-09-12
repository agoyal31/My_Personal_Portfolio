import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Experienced Full Stack Developer with a strong skill set
                encompassing front-end technologies (HTML, CSS, JavaScript,
                React) and back-end development (Node.js, Express), along with
                expertise in database management, API design, and the ability to
                deliver end-to-end web solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image3" />
                  <h5>Agile/Scrum</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image4" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image5" />
                  <h5>Responsive Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image6" />
                  <h5>UI/UX Designer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image7" />
                  <h5>JavaScript(ES6)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image8" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image9" />
                  <h5>SQL Queries</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image10" />
                  <h5>Database Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image11" />
                  <h5>CI/CD</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image12" />
                  <h5>Cloud Services</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image13" />
                  <h5>Version control/Git</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image14" />
                  <h5>Web Security</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image15" />
    </section>
  );
};
