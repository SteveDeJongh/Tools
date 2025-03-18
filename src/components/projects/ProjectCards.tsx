import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./projects.css";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "../../assets/projectDetails";
import { CardFooter, Col, Row } from "react-bootstrap";

const ProjectCards = () => {
  return (
    <section id="projects" className="">
      <Row>
        <Col>
          <div className="m-3 pl-3 bg-light rounded text-left">
            <h2 className="p-3">Projects</h2>
          </div>
        </Col>
      </Row>
      <Row className="">
        <Col>
          <Row
            xs={1}
            sm={1}
            md={1}
            lg={2}
            xl={3}
            className="g-3 m-3 justify-content-center"
          >
            {PROJECTS.map((project) => {
              return (
                <Col key={project.title} className="">
                  <Card className="border-1 border-dark rounded h-100 limited m-auto">
                    <Card.Body className="">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        className="d-block mx-auto w-50"
                      />
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Subtitle>{project.subTitle}</Card.Subtitle>
                      <Card.Text className="d-flex flex-row flex-wrap">
                        {project.tags.map((tag) => {
                          return (
                            <span
                              key={tag}
                              className={
                                "p-1 m-1 fs-xs bg-primary text-white rounded"
                              }
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </Card.Text>
                      <Card.Text className={"mt-3"}>{project.text}</Card.Text>
                    </Card.Body>
                    <CardFooter>
                      <Link to={project.path}>
                        <Button variant="primary">Project Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export { ProjectCards };
