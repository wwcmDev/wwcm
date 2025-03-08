import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <Container className="h-100 d-flex align-items-center">
      <Row className="align-items-center">
        <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
          <h1 className="display-4 fw-bold mb-4">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <TypeAnimation
            sequence={[
              'Undergraduate Student',
              2000,
              'Software Developer',
              2000,
              'UI/UX Designer',
              2000
            ]}
            wrapper="h2"
            className="h3 text-secondary mb-4"
            repeat={Infinity}
          />
          
          <p className="lead text-muted mb-5">
            I'm passionate about [your field/major] with a focus on [your specialization/interests]. 
            Currently pursuing my degree at [Your University].
          </p>
          
          <div className="d-flex gap-3 mb-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon text-dark fs-4">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon text-dark fs-4">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon text-dark fs-4">
              <FaTwitter />
            </a>
          </div>
          
          <div className="d-flex gap-3">
            <Button
              as={Link}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              variant="primary"
              size="lg"
            >
              View My Work
            </Button>
            
            <Button
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              variant="outline-primary"
              size="lg"
            >
              Contact Me
            </Button>
          </div>
        </Col>
        
        <Col lg={6} className="text-center" data-aos="fade-left">
          <div className="rounded-circle bg-gradient mx-auto" style={{
            width: '400px',
            height: '400px',
            background: 'linear-gradient(135deg, var(--bs-primary) 0%, var(--bs-secondary) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem'
          }}>
            Your Photo Here
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;