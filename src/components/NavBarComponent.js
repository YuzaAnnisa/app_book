import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap'


export default function NavbarComponent () {
    return (
        <Navbar className="navbar-dark navbar-expand-md" expand="lg">
        <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="container-fluid">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Search</Nav.Link>
                <Nav.Link href="/list">Whilist</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </div>
          </div>
        </Navbar>
    )
}