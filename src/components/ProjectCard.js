import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webLink }) => {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
      onClick={() => {
        window.open(`${webLink}`, "_blank", "noreferrer");
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imageCards" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
