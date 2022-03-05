import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
export default function About() {
  return (
    <Container id="about">
      <h4 className="text-center p-3">
        <span className="border-bottom text-uppercase">About</span>
      </h4>
      <Row>
        <Col md={6}>
          <Image
            src="/profile_pic.jpg"
            className="about_profile_Pic rounded"
          ></Image>
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
            <a href="https://www.facebook.com/hasibnadimx/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/hasibnadim/">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.upwork.com/freelancers/~01879daa2503b0f3b1">
              <img
                src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t1.6435-9/182041204_3923210174435973_1501988843982898278_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-jhkZEpBqd9h14yBdZiYixHjcyV4OrBjEeNzJXg6sGKqfwGzBBRYirGq8RxUiKG3D-Jys5e6DHSwxfYXv_sDz&_nc_ohc=Vd64yTPN2dgAX8S-yc3&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT8FEAyaLnGiTjHf3BKY1yjBCMFje-njkdtAaGJJr-NQbg&oe=624A2EF2"
                alt=""
              />
            </a>
            <a href="https://www.fiverr.com/hadib_nadim">
              <img
                src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t1.6435-9/119040663_10158780700529286_2073467237365854866_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE4Y7yDqpt5wTv_VRKavCkCNcnFvkIz9rg1ycW-QjP2uDcDWdCMhGRMtpnH3cPkWfrzYPZ66MVtmVe1NWGJhPXp&_nc_ohc=An66CY3dDswAX_dS-i0&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT__YavR2iwK6tMsOwrv2b7gMyBll8_fZFS7UuDjAzM5fw&oe=62489103"
                alt=""
              />
            </a>
          </div>
        </Col>
      </Row>
      <h5 className="text-center p-3">
        <span className="border-bottom text-uppercase">Facts</span>
      </h5>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="d-flex flex-column align-items-center m-2">
          <i className="fas fa-smile p-3 m-2 text-light fs-3 rounded-circle bg-primary"></i>
          <span className="fs-6">Happy Clients</span>
          <span className="fw-bold">50+</span>
        </div>
        <div className="d-flex flex-column align-items-center m-2">
          <i className="fas fa-briefcase p-3 m-2 text-light fs-3 rounded-circle bg-primary"></i>
          <span className="fs-6">Successful Project</span>
          <span className="fw-bold">50+</span>
        </div>
        <div className="d-flex flex-column align-items-center m-2">
          <i className="fas fa-headphones p-3 m-2 text-light fs-3 rounded-circle bg-primary"></i>
          <span className="fs-6">Hours Of support</span>
          <span className="fw-bold">200+</span>
        </div>
        <div className="d-flex flex-column align-items-center m-2">
          <i className="fas fa-award p-3 m-2 text-light fs-3 rounded-circle bg-primary"></i>
          <span className="fs-6">Awards</span>
          <span className="fw-bold">5+</span>
        </div>
      </div>
    </Container>
  );
}
