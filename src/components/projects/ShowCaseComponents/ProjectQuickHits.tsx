import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
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
      <Row className="mt-3 mb-3 justify-content-center">
        <Col className="" md={10}>
          <Image src={project.largeImg} fluid width={"100%"} height={"100%"} />
        </Col>
      </Row>
    </section>
  );
}

export { ProjectQuickHits };
