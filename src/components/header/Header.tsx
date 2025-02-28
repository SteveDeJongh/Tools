import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { createLink, LinkComponent } from "@tanstack/react-router";
import { NavLinkProps } from "react-bootstrap";
import React from "react";

interface BSLinkProps extends Omit<NavLinkProps, "href"> {
  opt?: string;
}

const BSLinkComponent = React.forwardRef<HTMLAnchorElement, BSLinkProps>(
  (props, ref) => {
    return <Nav.Link ref={ref} {...props} />;
  }
);

const CreatedLinkComponent: LinkComponent<typeof BSLinkComponent> =
  createLink(BSLinkComponent);

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/home">Steve De Jongh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CreatedLinkComponent to="/home">Home</CreatedLinkComponent>
              <CreatedLinkComponent to="/text-sanitizer">
                Text Sanitizer
              </CreatedLinkComponent>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export { Header };
