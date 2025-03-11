import { Card, CardGroup, Col, Row, Stack } from "react-bootstrap";
import { Project } from "../../../assets/projectDetails";
import { Link } from "@tanstack/react-router";

type props = {
  project: Project;
};

function ProjectQuickHits({ project }: props) {
  return (
    <section id={`quick-hits-${project.title}`} className="mt-5">
      <Row>
        <Col>
          <h2>{project.title}</h2>
          <p>
            <small>{project.readTime} minute read</small>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{project.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardGroup>
            <Card className="border-0">
              <Card.Title>Type</Card.Title>
              <Card.Body>
                <Stack>
                  <div>{project.subTitle}</div>
                </Stack>
              </Card.Body>
            </Card>
            <Card className="border-0">
              <Card.Title>Stack</Card.Title>
              <Card.Body>
                <Stack>
                  {project.tags.map((tech) => {
                    return <div key={tech}>{tech}</div>;
                  })}
                </Stack>
              </Card.Body>
            </Card>
            <Card className="border-0">
              <Card.Title>Live</Card.Title>
              <Card.Body>
                <Stack>
                  <Link to={project.linkTo} className="text-decoration-none">
                    Live
                  </Link>
                </Stack>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </section>
  );
}

export { ProjectQuickHits };
