import { Col, Row } from "react-bootstrap";
import "./home.css";
import { Icons } from "../footer/Icons";

function Jumbo() {
  return (
    <section id="jumbotron">
      <Row>
        <Col>
          <div className="jumbotron">
            <h1 className="display-4">Steve De Jongh</h1>
            <p className="lead">Software Engineer </p>
            <hr className="my-2" />
            <h1>
              <Icons />
            </h1>

            <p>
              Aspiring FullStack software engineer with a passion for learning.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export { Jumbo };
