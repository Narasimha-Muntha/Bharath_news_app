import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'; 
import './Navbar.css';

const CustomNavbar = () => {
  const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1gSGOiYi7uH9iTcc8QjiWf5g5FwgSHM1GbBcqcSDi3aVzZGdwl6CuJ9lKi5f0kqeG0Q&usqp=CAU';

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoUrl}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="The Bharath News Logo"
          />
          The Bharath News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
