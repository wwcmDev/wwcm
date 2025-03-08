import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaUserGraduate, FaLaptopCode, FaFlask } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-primary fs-1 mb-3" />,
      title: 'Education',
      description: 'Currently pursuing a degree in [Your Major] at [Your University].'
    },
    {
      icon: <FaLaptopCode className="text-primary fs-1 mb-3" />,
      title: 'Technical Skills',
      description: 'Proficient in [Your Skills], with experience in [Your Experience].'
    },
    {
      icon: <FaFlask className="text-primary fs-1 mb-3" />,
      title: 'Research',
      description: 'Involved in [Your Research Projects] focusing on [Research Areas].'
    }
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="section-title display-4">About Me</h2>
        <p className="lead text-muted">
          Get to know more about me, my background, and what drives me.
        </p>
      </div>

      <Row className="g-5">
        <Col lg={6} data-aos="fade-right">
          <h3 className="h2 mb-4">My Story</h3>
          <p className="text-muted mb-4">
            Hello! I'm [Your Name], an undergraduate student at [Your University] majoring in [Your Major]. 
            I'm passionate about [Your Interests] and aspire to [Your Career Goals].
          </p>
          <p className="text-muted mb-4">
            My academic journey began with [How You Started]. Since then, I've been focused on developing my skills in 
            [Your Skills] through coursework, projects, and extracurricular activities.
          </p>
          <p className="text-muted">
            Outside of academics, I enjoy [Your Hobbies/Interests]. These activities help me maintain a balanced life 
            and often inspire my academic and professional work.
          </p>
        </Col>

        <Col lg={6} data-aos="fade-left">
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={12} key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    {feature.icon}
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;