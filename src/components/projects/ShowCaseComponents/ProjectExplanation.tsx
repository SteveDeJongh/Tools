import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Project } from "../../../assets/projectDetails";

type props = {
  project: Project;
};

function createMarkup(string: string) {
  return { __html: string };
}

function ProjectExplanation({ project }: props) {
  return (
    <section id={`discussion-${project.title}`}>
      <Row>
        <Col>
          <h3>Project Purpose and Goal</h3>
          <p dangerouslySetInnerHTML={createMarkup(project.why)}></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Web stack and explanation</h3>
          <p dangerouslySetInnerHTML={createMarkup(project.stack)}></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Lessons learned</h3>
          <p dangerouslySetInnerHTML={createMarkup(project.lessons)}></p>
        </Col>
      </Row>
      {project.whatsNext ? (
        <Row>
          <Col>
            <h3>What's next?</h3>
            <p dangerouslySetInnerHTML={createMarkup(project.whatsNext)}></p>
          </Col>
        </Row>
      ) : null}
    </section>
  );
}

export { ProjectExplanation };
