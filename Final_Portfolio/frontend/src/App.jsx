// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import SkillProficiency from './components/SkillProficiency/SkillProficiency';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <SkillProficiency />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
