import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="home" className="hero-section sec-p-tb mt-5">
          <Hero />
        </section>
        
        <section id="about" className="sec-p-tb">
          <Container>
            <About />
          </Container>
        </section>
        
        <section id="skills" className="py-5 bg-light">
          <Container>
            <Skills />
          </Container>
        </section>
        
        <section id="projects" className="py-5">
          <Container>
            <Projects />
          </Container>
        </section>
        
        <section id="education" className="py-5 bg-light">
          <Container>
            <Education />
          </Container>
        </section>
        
        <section id="contact" className="py-5">
          <Container>
            <Contact />
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default App;