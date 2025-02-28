import { Link } from "@tanstack/react-router";
import { Card, Col, Row, Stack } from "react-bootstrap";
import { Icons } from "./Icons";

function Footer() {
  return (
    <footer className="footer mt-auto p-0" style={{ height: "150px" }}>
      <div className="bg-dark d-flex flex-row justify-content-around align-items-start pt-3 h-100">
        <div className="w-25">
          <Card className="border-0 bg-dark text-white ">
            <Card.Body>
              <h5>Steve</h5>
              <h5>De Jongh</h5>
            </Card.Body>
          </Card>
        </div>
        <div className="w-25">
          <Card className="border-0 bg-dark text-white">
            <Card.Header className="border-0">Links</Card.Header>
            <Card.Body className="pt-0">
              <Row>
                <Col>
                  <Stack>
                    <span>
                      <Link className={"text-decoration-none"} to="/about">
                        About
                      </Link>
                    </span>
                    <span>
                      <Link className={"text-decoration-none"} to="/">
                        Projects
                      </Link>
                    </span>
                  </Stack>
                </Col>
                <Col>
                  <Stack>
                    <span>
                      <Link className={"text-decoration-none"} to="/">
                        Contact me
                      </Link>
                    </span>
                  </Stack>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="w-25">
          <Card className="border-0 bg-dark text-white">
            <Card.Header className="border-0">Get in Touch</Card.Header>
            <Card.Body className="pt-0">
              <Icons />
            </Card.Body>
          </Card>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
