import React from 'react';
import About from './bodycomponents/About';
import Banner from './bodycomponents/Banner';
import Contact from './bodycomponents/Contact';
import Portfolio from './bodycomponents/Portfolio';
import Resume from './bodycomponents/Resume';

export default function Body() {
  return (
    <main>
      <Banner />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
}
