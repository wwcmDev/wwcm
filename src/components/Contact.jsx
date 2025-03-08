import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary fs-3" />,
      title: 'Email',
      content: 'your.email@university.edu',
      link: 'mailto:your.email@university.edu'
    },
    {
      icon: <FaPhone className="text-primary fs-3" />,
      title: 'Phone',
      content: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary fs-3" />,
      title: 'Location',
      content: 'Your University, City, Country',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="py-5">
      <div className="text-center mb-5">
        <h2 className="section-title display-4">Get In Touch</h2>
        <p className="lead text-muted">
          Have a question or want to work together? Feel free to contact me!
        </p>
      </div>

      <Row className="g-5">
        <Col lg={4} data-aos="fade-right">
          <h3 className="h2 mb-4">Contact Information</h3>
          
          <div className="d-flex flex-column gap-4 mb-5">
            {contactInfo.map((item, index) => (
              <div key={index} className="d-flex align-items-start">
                <div className="me-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="h5">{item.title}</h4>
                  <a 
                    href={item.link} 
                    className="text-decoration-none text-muted"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.content}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="h2 mb-4">Follow Me</h3>
          <div className="d-flex gap-3">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="btn btn-light rounded-circle p-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Col>
        
        <Col lg={8} data-aos="fade-left">
          <h3 className="h2 mb-4">Send Me a Message</h3>
          
          {submitSuccess && (
            <div className="alert alert-success d-flex align-items-center" role="alert">
              <FaPaperPlane className="me-2" />
              <div>Your message has been sent successfully! I'll get back to you soon.</div>
            </div>
          )}
          
          {submitError && (
            <div className="alert alert-danger" role="alert">
              There was an error sending your message. Please try again later.
            </div>
          )}
          
          <Form onSubmit={handleSubmit} className="contact-form">
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </Form.Group>
              </Col>
              
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </Form.Group>
              </Col>
              
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                  />
                </Form.Group>
              </Col>
              
              <Col xs={12}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="d-flex align-items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="me-2" /> Send Message
                    </>
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;