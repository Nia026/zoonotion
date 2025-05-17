import React from "react"; 
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css';

function NavigationBar() {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/Logo.png"
            height="61"
            className="d-inline-block align-top"
            alt="Zoonotion Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}
              >
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                className={`nav-link-custom ${location.pathname === '/education' ? 'active' : ''}`}
              >
                EDUCATION
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/community"
                className={`nav-link-custom ${location.pathname === '/community' ? 'active' : ''}`}
              >
                COMMUNITY
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ticket"
                className={`nav-link-custom ${location.pathname === '/ticket' ? 'active' : ''}`}
              >
                TICKET
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/article"
                className={`nav-link-custom ${location.pathname === '/article' ? 'active' : ''}`}
              >
                ARTICLE
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/profile"
                className={`nav-link-custom ${location.pathname === '/profile' ? 'active' : ''}`}
              >
                PROFILE
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar