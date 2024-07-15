import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css'; // Ensure you create and import this CSS file

export default function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" className="brand">
          <img
            src="./images/logo.jpg" // Replace with your actual logo URL
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="brand-title">BlockSavvy: Empowering Crypto Learners</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};


