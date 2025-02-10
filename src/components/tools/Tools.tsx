import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./tools.css";

const Tools = () => {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Text Sanitizer</Card.Title>
          <Card.Text>
            Turn IConnect "Mail Deliverable Bikes" reports into email content.
          </Card.Text>
          <Button variant="primary">Go To Tool</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Tool Number 2</Card.Title>
          <Card.Text>A Second Tool!</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export { Tools };
