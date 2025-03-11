import { Link } from "@tanstack/react-router";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-3">
      <section>
        <h1>A Tinkerer at heart</h1>
        <h5>
          Looking for my{" "}
          <Link className={"text-decoration-none"} to="/">
            CV
          </Link>
          ?
        </h5>
        <h4>How we got here</h4>
        <p>Some blurb about my story</p>
        <h4>Developer</h4>
        <p>
          <b>Approach to code</b> explaining my thoughts...
        </p>
        <p>
          <b>Approach to problem solving</b> explaining my thoughts...
        </p>
        <p>
          <b>Approach to cleanliness and readability</b> explaining my
          thoughts...
        </p>
        <h4>As a person</h4>
        <p>Some thoughts on how I work</p>
        <h4>As a colleauge</h4>
        <p>
          <b>Collaborative</b> some thoughts on working as a team.
        </p>
        <p>
          <b>Leader and learner</b> some thought on how I've lead teams, but
          have learn't from each member of the team.
        </p>
      </section>
    </Container>
  );
}

export { About };
