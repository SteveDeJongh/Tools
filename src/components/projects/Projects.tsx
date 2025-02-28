import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./projects.css";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "../../assets/projectDetails";
import { CardFooter, Col, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <section id="projects">
      <Row>
        <Col>
          <div className="bg-light m-3 pl-3 rounded text-left">
            <h2>Projects</h2>
          </div>{" "}
        </Col>
      </Row>
      <Row className="">
        <Col>
          <Row sm={1} md={2} lg={3} className="g-3 m-3">
            {PROJECTS.map((project) => {
              return (
                <Col key={project.title}>
                  <Card className="border-1 border-dark rounded h-100">
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
                                "p-1 m-1 fs-xs bg-secondary text-white rounded"
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
                        <Button variant="primary">See the project</Button>
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

export { Projects };
