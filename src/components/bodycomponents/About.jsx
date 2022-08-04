import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
export default function About() {
  return (
    <Container id="about">
      <h4 className="text-center pt-3">
        <span className="border-bottom text-uppercase">About</span>
      </h4>
      <Row>
        <Col md={6}>
          <Image src="/profile_pic.jpg" className="about_profile_Pic"></Image>
        </Col>
        <Col md={6}>
          <p className="fs-4 text-info">Web Developer & JavaScript Progmmer</p>
          <p>A Professional Web Developer and JS Progmmer.</p>
          <p>
            <i className="fas fa-angle-right text-success fs-6"></i>
            <b> Degree: </b>
            <span>Honours (Physics)</span>
          </p>
          <p>
            <i className="fas fa-angle-right text-success fs-6"></i>
            <b> Freelance: </b>
            <span>Available</span>
          </p>
          <p>
            <i className="fas fa-angle-right text-success fs-6"></i>
            <b> Age: </b>
            <span>21</span>
          </p>
          <p>
            <i className="fas fa-angle-right text-success fs-6"></i>
            <b> City: </b>
            <span>Rajshahi, Bangladesh</span>
          </p>
          <div className="social_link">
            <a href="https://www.linkedin.com/in/hasibnadim/">
              <i class="fab fa-linkedin"></i>
            </a>

            <a href="https://www.upwork.com/freelancers/~01879daa2503b0f3b1">
              <img
                src="https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg"
                alt="Upwork"
                className="rounded"
              />
            </a>
            <a href="https://www.fiverr.com/hadib_nadim">
              <img
                src="https://pbs.twimg.com/profile_images/1453339438029869059/Mpk9QXje_400x400.jpg"
                alt="Fiver"
                className="rounded"
              />
            </a>
            <a href="https://www.facebook.com/hasibnadimx/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/hasibnadim">
            <i class="fab fa-github"></i>
            </a>
           
          </div>
        </Col>
      </Row>
    
    </Container>
  );
}
