import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Utility Tools</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classesfor typography and spacing to space content out
        within the larger container.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
}

export { Home };
