import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

export default function Resume() {
  const skillsObj = [
    {
      skillName: 'HTML',
      parsent: 100,
    },
    {
      skillName: 'CSS/CSS3',
      parsent: 100,
    },
    {
      skillName: 'Bootstrap & Tailwind',
      parsent: 98,
    },
    {
      skillName: 'JavaScript/NodeJs',
      parsent: 99,
    },
    {
      skillName: 'React & Vue',
      parsent: 95,
    },

    {
      skillName: 'NextJS',
      parsent: 85,
    },
    {
      skillName: 'ExpressJS',
      parsent: 98,
    },

    {
      skillName: 'MongoDB',
      parsent: 90,
    },
    {
      skillName: 'MySql',
      parsent: 90,
    },

    {
      skillName: 'WordPress/CMS',
      parsent: 80,
    },
    {
      skillName: 'PHP / Laravel',
      parsent: 80,
    },
  ];
  return (
    <Container id="resume">
      <h4 className="text-center p-3">
        <span className="border-bottom text-uppercase">Resume</span>
      </h4>
      <Row>
        <Col lg={6}>
          <h5 className="m-4 fs-3">Professional Experience</h5>
          <div className="side_stick">
            <p className="fw-bold">FREELANCE WEB DEVELOPER</p>
            <p>2021 - Present</p>
            <p>Upwork, fiverr</p>
            <ul>
              <li>Complated client project within deadline.</li>
              <li>Client is satisfied after deliver project.</li>
            </ul>
          </div>
          <div className="side_stick">
            <p className="fw-bold">JUNIOR WEB DEVELOPER</p>
            <p>2019 - 2021</p>
            <p>Webbilder co LTD.</p>
            <ul>
              <li>Developed numerous web applications.</li>
              <li>
                Managed up to 5 projects or tasks at a given time while under
                pressure.
              </li>
            </ul>
          </div>

          <h5 className="m-4 fs-3">Deploma Training</h5>
          <div className="side_stick">
            <p className=" text-uppercase fw-bold">
              Computer science & Web Tecnology
            </p>
            <p>2018 - 2022</p>
          </div>
          <h5 className="m-4 fs-3">Education</h5>
          <div className="side_stick">
            <p className="fw-bold">BSc IN PHYSICS</p>
            <p>2021 - Present</p>
          </div>
          <div className="side_stick">
            <p className="fw-bold">HSC</p>
            <p>2020</p>
          </div>
        </Col>
        <Col lg={6} className="my-2">
          <h5 className="m-4 fs-3">Skills</h5>
          {skillsObj.map((v, key) => (
            <div className="m-3" key={key}>
              <span>{v.skillName}</span>
              <ProgressBar now={v.parsent} label={`${v.parsent}%`} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
