import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

const petList = ["Dog", "Cat", "Rabbit", "Horse", "Bird"];
const PetTypes = () =>
  petList.map((type) => (
    <NavDropdown.Item key={type} as={Link} to={`/pets/${type.toLowerCase()}`}>
      {type}
    </NavDropdown.Item>
  ));

const auth = ["Login", "Register"];
const AuthTypes = () =>
  auth.map((type) => (
    <NavDropdown.Item key={type} as={Link} to={`/${type.toLowerCase()}`}>
      {type}
    </NavDropdown.Item>
  ));

export default function NavigationBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">PawHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Pets" id="navbarScrollingDropdown">
              <PetTypes />
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/pets">
                All Pets
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/donate">
              Donate
            </Nav.Link>
            <NavDropdown title="Account">
              <AuthTypes />
              <NavDropdown.Item as={Link} to="/pets"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
