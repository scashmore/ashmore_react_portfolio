import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { A } from 'hookrouter'
import './styles.css'

function Header() {
  return (
    <div ClassName="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="font1 name">Susan Ashmore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="/">
            <A href="/"><Nav.Link>Home</Nav.Link></A>
            <A href="/projects"><Nav.Link>Projects</Nav.Link></A>
            <A href="/art-portfolio"><Nav.Link>Art Portfolio</Nav.Link></A>
            <A href="/resume"><Nav.Link>Resume</Nav.Link></A>
            <A href="/contact"><Nav.Link>Contact</Nav.Link></A>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default Header