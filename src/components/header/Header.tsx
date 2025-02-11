import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { createLink, LinkComponent } from "@tanstack/react-router";
import { NavLinkProps } from "react-bootstrap";
import React from "react";

interface BSLinkProps extends Omit<NavLinkProps, "href"> {}

const BSLinkComponent = React.forwardRef<HTMLAnchorElement, BSLinkProps>(
  (props, ref) => {
    return <Nav.Link ref={ref} {...props} />;
  }
);

const CreatedLinkComponent: LinkComponent<typeof BSLinkComponent> =
  createLink(BSLinkComponent);

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Steve Tools</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CreatedLinkComponent to="/home">Home</CreatedLinkComponent>
              <CreatedLinkComponent to="/Text-sanitizer">
                Text Sanitizer
              </CreatedLinkComponent>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export { Header };
