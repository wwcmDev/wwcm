import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaGitAlt, FaFigma, FaChartBar 
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-warning" />, level: 80 },
    { name: 'React', icon: <FaReact className="text-info" />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs className="text-success" />, level: 70 },
    { name: 'Python', icon: <FaPython className="text-primary" />, level: 85 },
    { name: 'SQL', icon: <FaDatabase className="text-secondary" />, level: 75 },
    { name: 'Git', icon: <FaGitAlt className="text-danger" />, level: 80 },
    { name: 'UI/UX', icon: <FaFigma className="text-purple" />, level: 70 },
    { name: 'Data Analysis', icon: <FaChartBar className="text-indigo" />, level: 75 },
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="section-title display-4">My Skills</h2>
        <p className="lead text-muted">
          Here are the technologies and skills I've acquired during my academic journey.
        </p>
      </div>

      <Row className="g-4">
        {skills.map((skill, index) => (
          <Col sm={6} md={4} lg={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="card-body">
                <div className="fs-1 mb-3">
                  {skill.icon}
                </div>
                <h3 className="h5 mb-3">{skill.name}</h3>
                <div className="progress">
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Skills;