import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container id="contact">
      <h4 className="text-center p-3">
        <span className="border-bottom text-uppercase">Contact Me</span>
      </h4>
      <div className="p-2 m-2 fs-4">
        <i className="fas fa-at mx-3"></i>
        <a href="mailto:hasibnadim@gmail.com">hasibnadim@gmail.com</a>
      </div>
      <div className="p-2 m-2 fs-4">
        <i className="fas fa-phone mx-3"></i>
        <a href="tel:8801728604567">+8801728604567</a>
      </div>
      <div className="p-2 m-2 fs-4">
        <i className="fas fa-map-marker-alt mx-3"></i>
        <a
          href="https://goo.gl/maps/Q2FUTiwd5F3GVECr8"
          target="_blank"
          rel="noreferrer"
        >
          Rajshahi, Bangladesh
        </a>
      </div>
    </Container>
  );
}
