import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);