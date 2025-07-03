import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects';
import Personal from './components/Personal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import './App.css';

function App() {
  
  return (
    
    <div>
      <Navbar />
      <Resume />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Personal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;