// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Chatbot from './components/Chatbot/Chatbot';
import Skills from './components/Skills/Skills';
import SkillProficiency from './components/SkillProficiency/SkillProficiency';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Chatbot />
      <hr />
      <Skills />
      <hr />
      <SkillProficiency />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
