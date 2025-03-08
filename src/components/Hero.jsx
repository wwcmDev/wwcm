import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import photo from "../../public/photo.png";

const Hero = () => {
  return (
    <Container className="h-100 d-flex align-items-center ">
      <Row className="align-items-center">
        <Col lg={6} className="my-5 mb-lg-0" data-aos="fade-right">
          <h1 className="title display-4 fw-bold mb-1">
            Hi, I'm <span className="text-primary">Madhuranga</span>
          </h1>
          
          <TypeAnimation
            sequence={[
              'Undergraduate Student',
              2000,
              'Full Stack Software Developer',
              2000,
              'Cybersecurity Enthusiast',
              2000
            ]}
            wrapper="h2"
            className="subtitle text-secondary mb-4"
            repeat={Infinity}
          />
          
          <p className="lead  mb-5">
          I'm passionate about full-stack software development, networking, and cybersecurity, with a focus on building secure and scalable applications. Currently pursuing my degree at Cardiff Metropolitan University.
          </p>
          
          <div className="icon-area gap-3 mb-5">
            <a href="https://github.com/wwcmDev" target="_blank" rel="noopener noreferrer" className="social-icon fs-4">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/wwcm2000/" target="_blank" rel="noopener noreferrer" className="social-icon fs-4">
              <FaLinkedin />
            </a>
          </div>
          
          <div className="buttons d-flex gap-3">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'Dev_V1.0.pdf'; 
                link.download = 'Dev_V1.0.pdf'; 
                link.click();
              }}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              variant="btn btn-primary"
              size="lg"
            >
              View My CV
            </Button>
            
            <Button
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              variant="btn btn-outline"
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
            fontSize: '1.5rem',
          }}>
            <img src={photo} alt="Portfolio Logo" className="photo img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;