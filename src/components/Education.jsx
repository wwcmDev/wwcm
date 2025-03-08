import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaMedal, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in [Your Major]',
      institution: '[Your University]',
      location: '[City, Country]',
      period: '2021 - Present',
      description: 'Currently pursuing a degree with focus on [Your Specialization]. Relevant coursework includes [Course 1], [Course 2], and [Course 3].',
      icon: <FaGraduationCap className="text-primary fs-3" />
    },
    {
      id: 2,
      degree: 'High School Diploma',
      institution: '[Your High School]',
      location: '[City, Country]',
      period: '2017 - 2021',
      description: 'Graduated with honors. Participated in [Activities/Clubs] and excelled in [Subjects].',
      icon: <FaGraduationCap className="text-primary fs-3" />
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Dean's List",
      organization: '[Your University]',
      period: '2022 - 2023',
      description: 'Recognized for academic excellence with a GPA of [Your GPA].',
      icon: <FaMedal className="text-primary fs-3" />
    },
    {
      id: 2,
      title: 'Research Scholarship',
      organization: '[Research Program/Institution]',
      period: '2023',
      description: 'Awarded scholarship for research in [Your Research Area].',
      icon: <FaMedal className="text-primary fs-3" />
    }
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="section-title display-4">Education & Achievements</h2>
        <p className="lead text-muted">
          My academic journey, achievements, and certifications.
        </p>
      </div>

      <Row className="g-5">
        <Col lg={6}>
          <h3 className="h2 mb-4">
            <FaGraduationCap className="text-primary me-2" /> Education
          </h3>
          
          <div className="timeline">
            {education.map((item, index) => (
              <div 
                key={item.id} 
                className="timeline-item mb-4 ps-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      {item.icon}
                      <div className="ms-3">
                        <h4 className="h5 mb-1">{item.degree}</h4>
                        <p className="text-primary mb-0">{item.institution}</p>
                      </div>
                    </div>
                    <p className="text-muted small mb-2">{item.period}</p>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
        
        <Col lg={6}>
          <h3 className="h2 mb-4">
            <FaMedal className="text-primary me-2" /> Achievements
          </h3>
          
          <div className="timeline">
            {achievements.map((item, index) => (
              <div 
                key={item.id} 
                className="timeline-item mb-4 ps-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      {item.icon}
                      <div className="ms-3">
                        <h4 className="h5 mb-1">{item.title}</h4>
                        <p className="text-primary mb-0">{item.organization}</p>
                      </div>
                    </div>
                    <p className="text-muted small mb-2">{item.period}</p>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Education;