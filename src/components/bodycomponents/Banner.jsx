import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Typed from 'react-typed';
import BannerImg from '../../assets/img/hero-bg.jpg';
export default function Banner() {
  return (
    <div id="" className="position-relative banner_block">
      <Image src={BannerImg} className="position-absolute  bannerImg" />
      <Container className="d-flex justify-content-center flex-column banner_info px-5">
        <h1 className="fs-1">Md Hasib Nadim</h1>
        <h4 className="fs-5 fw-normal">
          I am{' '}
          <Typed
            className="text-info"
            strings={['Freelancer', 'Developer', 'Progmmer']}
            typeSpeed={90}
            backSpeed={100}
            loop
          />
        </h4>
      </Container>
    </div>
  );
}
