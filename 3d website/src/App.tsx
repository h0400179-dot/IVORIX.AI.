import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Solutions from './components/Solutions';
import Vision from './components/Vision';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Testimonials from './components/testimonials-section';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Solutions />
        <Vision />
        <Process />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
