import React, { useState } from 'react';
import logo from "../../public/assest/image/logo-white.png";
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navbar = ({ scrolled }) => {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <BsNavbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 mx-0 px-0 w-100`}
    >
      <Container>
        <BsNavbar.Brand 
          as={Link}
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="fw-bold text-primary cursor-pointer"
        >
          <img src={logo} alt="Portfolio Logo" className="main-logo img-fluid" />
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.name}
                as={Link}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3"
                onClick={() => setExpanded(false)}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;