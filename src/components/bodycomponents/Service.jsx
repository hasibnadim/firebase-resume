import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default function Service() {
  const services = [
    {
      title: 'Html/Css Page',
      decs: 'I can design a gorgeous eye-catching look web page with modern animation.',
    },
    {
      title: 'NodeJS Backend server',
      decs: 'Any web application? I can build it with ultra security using express & mongodb.',
    },
    {
      title: 'React/Vue Frontend',
      decs: 'Build React/Redux and Vue/Vuex webpage or web application according to your requirement.',
    },
    {
      title: 'Full MERN Stack Application',
      decs: 'Make A Full MERN Stack Web application for you, with super optimized way.',
    },
    {
      title: 'Next.js Application',
      decs: 'Do you need Next.js web Application? Or need to fix it? I am here.',
    },
    {
      title: '24H Support',
      decs: 'I am giving 24h support for your problem.',
    },
  ];
  return (
    <Container id="service">
      <h4 className="text-center p-3">
        <span className="border-bottom text-uppercase">Services</span>
      </h4>
      <div className="d-flex flex-wrap justify-content-center">
        {services.map((s, key) => (
          <Card
            key={key}
            style={{ width: '18rem' }}
            className="m-1 text-center service_card"
          >
            <Card.Body>
              <Card.Title>
                <i class="fas fa-tools"></i>
              </Card.Title>
              <Card.Title>{s.title}</Card.Title>
              <Card.Text>{s.decs}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
