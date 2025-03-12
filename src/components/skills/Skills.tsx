import { Link } from "@tanstack/react-router";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SKILLS = [
  {
    title: "Languages",
    values: "Ruby JavaScript TypeScript HTML CSS SQL".split(" "),
  },
  {
    title: "Frameworks and Libraries",
    values: [
      "React",
      "Ruby on Rails",
      "Sinatra",
      "Tanstack Query",
      "Tanstack Table",
      "React Hook Form",
    ],
  },
  { title: "Databases", values: "PostgreSQL SQlite".split(" ") },
  {
    title: "DevTools / Version Control",
    values: "Git GitHub VScode Heroku Docker Agile".split(" "),
  },
];

const ALLSKILLS = SKILLS.map((skill) => skill.values).flat();

function Skills() {
  return (
    <section id="Skills">
      <Row>
        <Col>
          <div className="bg-light m-3 pl-3 text-start text-dark rounded">
            <h2>My Skills</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className={"p-3"}>
            <Col className={"border-1 border-black"}>
              <div className="w-100">
                <img
                  className={"d-block img-fluid mx-auto rounded"}
                  src="https://picsum.photos/300/300"
                />
              </div>
            </Col>
            <Col xs={8} className={"border-1 border-black"}>
              <Row>
                <div className="d-flex flex-row flex-wrap">
                  {ALLSKILLS.map((skill) => {
                    return (
                      <p
                        key={skill}
                        className={"bg-dark text-white py-1 px-1 m-1 rounded"}
                      >
                        {skill}
                      </p>
                    );
                  })}
                </div>
              </Row>
              <Row>
                <div className="container mt-3">
                  <h4>Tinkerer at heart</h4>

                  <p>
                    Motivated professional transitioning from over a decade in
                    the bike industry to software development, having
                    successfully completed the Launch School curriculum. Skilled
                    in object-oriented programming, problem-solving, and
                    full-stack development, with hands-on experience building
                    personal projects with today's technologies. I’m eager to
                    apply my technical skills and a strong work ethic to
                    contribute to innovative software solutions.
                  </p>

                  <Link to="/about">
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export { Skills };
