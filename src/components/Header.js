import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import './styles.css'

function Header() {
  return (
    <div ClassName="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="font1 name">Susan Ashmore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="/">
            <Nav.Link><Link className="linkcol" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="linkcol" to="/projects">Projects</Link></Nav.Link>
            <Nav.Link><Link className="linkcol" to="/art-portfolio">Art Portfolio</Link></Nav.Link>
            <Nav.Link><Link className="linkcol" to="/resume">Resume</Link></Nav.Link>
            <Nav.Link><Link className="linkcol" to="/contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default Header