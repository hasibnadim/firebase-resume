import React from "react";
import { Card, Container } from "react-bootstrap";

export default function Portfolio() {
  const portfolio = [
    {
      title: "Mobile Banking Calculator",
      desc: "Calculate cashout for bkash or others, react",
      link: "https://mbcalculator.web.app/",
    },
    {
      title: "Multi-Aplication Service",
      desc: "Multi-Aplication Service, nextJs",
      link: "https://cryptn.vercel.app/",
    },
    {
      title: "React todo",
      desc: "Todo Application, react",
      link: "https://hasibnadim.github.io/todo-react/",
    },
    {
      title: "Covid Report",
      desc: "Covid report, react/free rest api",
      link: "https://hasibnadim.github.io/covid-report-react/",
    },
    {
      title: "Photographer site",
      desc: "Static Photograpy site",
      link: "https://hasibnadim.github.io/photographer-site/",
    },
    {
      title: "Vcall",
      desc: "Zoom clone, ejs/express/socket.io/peerjs",
      link: "https://nvcall.herokuapp.com/",
    },
  ];
  return (
    <Container id="portfolio">
      <h4 className="text-center pt-3">
        <span className="border-bottom text-uppercase">Portfolio</span>
      </h4>
      <div className="d-flex flex-wrap justify-content-center">
        {portfolio.map((p, key) => (
          <Card
            key={key}
            style={{ width: "18rem" }}
            className="p-2 m-2 portfolio_card"
          >
            <Card.Header>{p.title}</Card.Header>
            <Card.Body>{p.desc}</Card.Body>
            <Card.Footer>
              <a href={p.link} target="_blank" rel="noreferrer" >
                View Live <i class="fas fa-external-link-alt"></i>
              </a>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  );
}
