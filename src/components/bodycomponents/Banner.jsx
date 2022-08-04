import React from "react";
import { Container, Image } from "react-bootstrap";
import Typed from "react-typed";
import BannerImg from "../../assets/img/hero-bg.jpg";
import Service from "./Service";
export default function Banner() {
  return (
    <div className="banner_block">
      <Image src={BannerImg} className="bannerImg" />
      <dir className="banner_info">
        <Container fluid className="info">
          <p className="fs-1 text-light">Md Hasib Nadim</p>
          <br />
          <h4 className="fs-5 fw-normal text-info">
            A{" "}
            <Typed
              className="text-info"
              strings={["Freelancer", "Developer", "Progmmer"]}
              typeSpeed={90}
              backSpeed={100}
              loop
            />
          </h4>
        </Container>

        <Container className="bottom_info">
          <Service />
        </Container>
      </dir>
    </div>
  );
}
