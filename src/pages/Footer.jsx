import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-info text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque fringilla nulla id nunc feugiat, eget luctus quam
              tempus.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              1234 Main Street,
              City, State ZIP
            </p>
            <p>
              Email: info@example.com
            </p>
            <p>
              Phone: (123) 456-7890
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-muted">
              © {year} Your Company Name. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
