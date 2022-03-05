import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default function Portfolio() {
  const portfolio = [
    {
      title: 'React todo',
      desc: 'Todo Application made By react',
      link: 'https://hasibnadim.github.io/todo-react/',
    },
    {
      title: 'Covid Report',
      desc: 'Covid report made By react and free rest api',
      link: 'https://hasibnadim.github.io/covid-report-react/',
    },
    {
      title: 'Photographer site',
      desc: 'Photograpy site made by html and bootstrap',
      link: 'https://hasibnadim.github.io/photographer-site/',
    },
    {
      title: 'Vcall',
      desc: 'Zoom clone, made by ejs, express, socket.io, peerjs',
      link: 'https://nvcall.herokuapp.com/',
    },
  ];
  return (
    <Container id="portfolio">
      <h4 className="text-center p-3">
        <span className="border-bottom text-uppercase">Portfolio</span>
      </h4>
      <div className="d-flex flex-wrap justify-content-center">
        {portfolio.map((p, key) => (
          <Card
            key={key}
            style={{ width: '18rem' }}
            className="p-2 m-2 portfolio_card"
          >
            <Card.Title>{p.title}</Card.Title>
            <Card.Subtitle>{p.desc}</Card.Subtitle>
            <Card.Link href={p.link} target="_blank">
              View Live
            </Card.Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
