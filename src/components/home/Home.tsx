import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Steve Tools</h1>
      <p className="lead">
        A simple repository to store self developped tools for work and play.
      </p>
      <hr className="my-4" />
      <p>
        Projects use: React, TypeScript, Vite, Bootstrap, TanStack Router,
        React-Hook-Form
      </p>
    </div>
  );
}

export { Home };
