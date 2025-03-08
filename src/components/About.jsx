import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaUserGraduate, FaLaptopCode, FaFlask } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-white fs-1 mb-3" />,
      title: 'Education',
      description: 'Currently pursuing a degree in [Your Major] at [Your University].'
    },
    {
      icon: <FaLaptopCode className="text-white fs-1 mb-3" />,
      title: 'Technical Skills',
      description: 'Proficient in [Your Skills], with experience in [Your Experience].'
    },
    {
      icon: <FaFlask className="text-white fs-1 mb-3" />,
      title: 'Research',
      description: 'Involved in [Your Research Projects] focusing on [Research Areas].'
    }
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="section-title display-4">About Me</h2>
        <p className=" dscr">
          Get to know more about me, my background, and what drives me.
        </p>
      </div>

      <Row className="g-5">
        <Col lg={6} data-aos="fade-right">
          <h3 className="h2 mb-4 title">My Story</h3>
          <p className="dscr mb-4">

              Hello! I'm Chanaka Madhuranga, an undergraduate student at Cardiff Metropolitan University majoring in Full-Stack Web Development, Networking, and Cybersecurity. I'm passionate about creating secure and user-friendly web applications and aspire to work in a dynamic tech environment where I can contribute to innovative and scalable solutions.
          </p>
          <p className="dscr mb-4">My academic journey began with a keen interest in technology and computer systems. Since then, I've been focused on developing my skills in web development, networking, and cybersecurity through coursework, personal projects, and certifications, including a course on KodeKloud.
          </p>
          <p className="dscr mb-4">Outside of academics, I enjoy exploring new technologies, coding side projects, and engaging in online communities related to web development and cybersecurity. These activities help me maintain a balanced life and often inspire my academic and professional work.
          </p>
        </Col>

        <Col lg={6} data-aos="fade-left">
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={12} key={index}>
                <div className="card h-100 border-0 shadow-sm rounded">
                  <div className="card-body text-white text-center p-4">
                    {feature.icon}
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <p className="text-white mb-0">{feature.description}</p>
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