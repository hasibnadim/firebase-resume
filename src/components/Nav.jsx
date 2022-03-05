import React from 'react';

export default function Nav() {
  return (
    <nav>
      <a
        href="/#"
        className="text-uppercase  text-decoration-none m-1 p-1 rounded-pill"
      >
        <i className="fas fa-home"></i> <span className="link_text">Home</span>
      </a>
      <a
        href="/#about"
        className="text-uppercase  text-decoration-none m-1 p-1 rounded-pill"
      >
        <i className="fas fa-user"></i> <span className="link_text">About</span>
      </a>
      <a
        href="/#resume"
        className="text-uppercase  text-decoration-none m-1 p-1 rounded-pill"
      >
        <i className="fas fa-file"></i>{' '}
        <span className="link_text">Resume</span>
      </a>
      <a
        href="/#service"
        className="text-uppercase  text-decoration-none m-1 p-1 rounded-pill"
      >
        <i className="fas fa-server"></i>{' '}
        <span className="link_text">Service</span>
      </a>
      <a
        href="/#portfolio"
        className="text-uppercase  text-decoration-none m-1 p-1 rounded-pill"
      >
        <i className="fas fa-briefcase"></i>{' '}
        <span className="link_text">Portfolio Project</span>
      </a>
      <a
        href="/#contact"
        className="text-uppercase  text-decoration-none m-1 p-1 rounded-pill"
      >
        <i class="fas fa-envelope"></i>{' '}
        <span className="link_text">Contact me</span>
      </a>
    </nav>
  );
}
