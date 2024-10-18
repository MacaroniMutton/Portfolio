import React from 'react';
import './Skills.css'; // Import the CSS file specific to this component
import python from '../../assets/skills/python-logo.png';
import C from '../../assets/skills/C-logo.png';
import C__ from '../../assets/skills/C++-logo.png';
import java from '../../assets/skills/Java-logo.png';
import html from '../../assets/skills/html-logo.png';
import css from '../../assets/skills/css-logo.png';
import leafletjs from '../../assets/skills/leafletjs-logo.png';
import chartjs from '../../assets/skills/chartjs-logo.png';
import django from '../../assets/skills/django-logo.png';
import flask from '../../assets/skills/flask-logo.png';
import mysql from '../../assets/skills/mysql-logo.png';
import mongodb from '../../assets/skills/mongodb-logo.svg';
import sqlite from '../../assets/skills/sqlite-logo.jpeg';
import tensorflow from '../../assets/skills/tensorflow-logo.svg';
import keras from '../../assets/skills/keras-logo.png';
import huggingface from '../../assets/skills/huggingface-logo.svg';
import langchain from '../../assets/skills/langchain-logo.png';
import scikit_learn from '../../assets/skills/scikit-learn-logo.png';
import nltk from '../../assets/skills/nltk-logo.png';
import opencv from '../../assets/skills/opencv-logo.png';
import numpy from '../../assets/skills/numpy-logo.svg';
import pandas from '../../assets/skills/pandas-logo.png';
import matplotlib from '../../assets/skills/matplotlib-logo.png';
import seaborn from '../../assets/skills/seaborn-logo.svg';
import plotly from '../../assets/skills/plotly-logo.avif';
import git from '../../assets/skills/git-logo.png';
import github from '../../assets/skills/github-logo.png';
import postman from '../../assets/skills/postman-logo.svg';
import gemini from '../../assets/skills/gemini-logo.webp';
import groq from '../../assets/skills/groq-logo.png';
import ollama from '../../assets/skills/ollama-logo.png';

// Create a data structure to hold all the skill categories and items
const skillCategories = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', logo: python },
      { name: 'C', logo: C },
      { name: 'C++', logo: C__ },
      { name: 'Java', logo: java },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    skills: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'LeafletJS', logo: leafletjs },
      { name: 'ChartJS', logo: chartjs },
      { name: 'Django', logo: django },
      { name: 'Flask', logo: flask },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', logo: mysql },
      { name: 'SQLite', logo: sqlite },
      { name: 'MongoDB', logo: mongodb },
    ],
  },
  {
    id: 'ml-frameworks',
    title: 'ML Frameworks',
    skills: [
      { name: 'TensorFlow', logo: tensorflow },
      { name: 'Keras', logo: keras },
      { name: 'HuggingFace', logo: huggingface },
      { name: 'Langchain', logo: langchain },
      { name: 'Scikit-learn', logo: scikit_learn },
      { name: 'NLTK', logo: nltk },
      { name: 'OpenCV', logo: opencv },
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'NumPy', logo: numpy },
      { name: 'Pandas', logo: pandas },
      { name: 'Matplotlib', logo: matplotlib },
      { name: 'Seaborn', logo: seaborn },
      { name: 'Plotly', logo: plotly },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'Postman', logo: postman },
    ],
  },
  {
    id: 'apis',
    title: 'APIs',
    skills: [
      { name: 'Gemini API', logo: gemini },
      { name: 'Groq API', logo: groq },
      { name: 'Ollama', logo: ollama },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className='sticky-title'>
        <h2>Skills</h2>
      </div>
      {/* Desktop View */}
      <div className="skills-container desktop">
        {skillCategories.map((category, index) => (
          <div
            id={`sticky-card-${index + 1}`}
            key={index}
            className="sticky-card tech-stack"
            style={{ '--card-index': index }}
          >
            <h3>{category.title}</h3>
            <div className="logos-container">
              {category.skills.map((skill, skillIndex) => (
                <div className="logo-item" key={skillIndex}>
                  <img src={skill.logo} width="40" height="40" alt={`${skill.name} Logo`} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Mobile View */}
      <div className="skills-container mobile">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="logos-container">
              {category.skills.map((skill, skillIndex) => (
                <div className="logo-item" key={skillIndex}>
                  <img src={skill.logo} width="40" height="40" alt={`${skill.name} Logo`} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
