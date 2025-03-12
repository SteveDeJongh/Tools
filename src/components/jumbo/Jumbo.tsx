import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Icons } from "../footer/Icons";

function Jumbo() {
  return (
    <section id="jumbo">
      <Row>
        <Col className="m-3 p-5 bg-light rounded">
          <h1 className="display-4">Steve De Jongh</h1>
          <p className="lead">Software Engineer </p>
          <hr className="my-2" />
          <h1>
            <Icons />
          </h1>
          <p>
            Aspiring FullStack software engineer with a passion for learning.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export { Jumbo };
