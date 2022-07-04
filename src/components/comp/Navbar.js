import React from "react";
import { Container } from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <Navbar class="navbar navbar-light">
        <Container>
          <Navbar.Brand className="logo">
            <p className="text">Sibox</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar;
