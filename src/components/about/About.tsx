import { Link } from "@tanstack/react-router";
import Container from "react-bootstrap/Container";
import { INFO } from "./me";

function createMarkup(string: string) {
  return { __html: string };
}

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
        <h3>How we got here</h3>
        <p dangerouslySetInnerHTML={createMarkup(INFO.story)}></p>
        <h3>Developer</h3>
        <p>
          {/* <b>Approach to code</b> explaining my thoughts... */}
          <p dangerouslySetInnerHTML={createMarkup(INFO.code)}></p>
        </p>
        <p>
          {/* <b>Approach to problem solving</b> explaining my thoughts... */}
          <p dangerouslySetInnerHTML={createMarkup(INFO.problems)}></p>
        </p>
        <p>
          {/* <b>Approach to cleanliness and readability</b> explaining my */}
          {/* thoughts... */}
          <p dangerouslySetInnerHTML={createMarkup(INFO.clean)}></p>
        </p>
        <h3>As a person</h3>
        {/* <p>Some thoughts on how I work</p> */}
        <p dangerouslySetInnerHTML={createMarkup(INFO.thePerson)}></p>
        <h3>As a colleauge</h3>
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
