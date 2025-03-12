import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

function Contact() {
  return (
    <section id="contact" className="m-auto p-5 w-75">
      <Row className="p-3">
        <Col>
          <div className="rounded text left">
            <h2>Get in touch</h2>
          </div>
        </Col>
      </Row>

      <Row className="p-3">
        <Stack direction="horizontal">
          <a href="mailto:myEmail@gmail.com">
            <h4 className="pb-3">myEmail@gmail.com</h4>
            <Button>Contact me</Button>
          </a>
          <Container className="">
            <img
              className={"d-block img-fluid mx-auto rounded"}
              src="https://picsum.photos/300/300"
            />
          </Container>
        </Stack>
      </Row>
    </section>
  );
}

export { Contact };
