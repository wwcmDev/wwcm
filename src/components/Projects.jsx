import React, { useState } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Research Project',
      description: 'A research project focused on [research topic]. Implemented [technologies/methodologies] to analyze data and draw conclusions.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'research',
      technologies: ['Python', 'Data Analysis', 'Machine Learning'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Web Application',
      description: 'A full-stack web application built with [technologies]. Features include [key features] and [functionality].',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'A mobile application developed for [purpose]. Implemented [features] to enhance user experience.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'mobile',
      technologies: ['React Native', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'research', name: 'Research' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="section-title display-4">My Projects</h2>
        <p className="lead text-muted">
          Here are some of the projects I've worked on during my academic journey.
        </p>
      </div>

      <div className="text-center mb-5">
        <ButtonGroup>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'primary' : 'outline-primary'}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Row className="g-4">
        {filteredProjects.map((project, index) => (
          <Col lg={4} md={6} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-img-top position-relative overflow-hidden" style={{ height: '200px' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-body">
                <h3 className="h4 mb-3">{project.title}</h3>
                <p className="text-muted">{project.description}</p>
                
                <div className="mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="badge bg-light text-dark me-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="d-flex justify-content-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    <FaGithub className="me-2" /> Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt className="me-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;