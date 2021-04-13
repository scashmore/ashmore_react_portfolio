import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return(
        <div ClassName="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Susan Ashmore</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="#home" active>Home</Nav.Link>
      <Nav.Link eventKey={2} href="#projects">
        Projects
      </Nav.Link>
      <Nav.Link eventKey={2} href="#art-portfolio">
        Art Portfloio
      </Nav.Link>
      <Nav.Link eventKey={2} href="#resume">
        Resume
      </Nav.Link>
      <Nav.Link eventKey={2} href="#contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
};

export default Header