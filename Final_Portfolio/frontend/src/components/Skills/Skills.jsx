import React from 'react';
import './Skills.css'; // Import the CSS file specific to this component
import python from '../../assets/skills/python-logo.png';
import C from '../../assets/skills/C-logo.png';
import C__ from '../../assets/skills/C++-logo.png';
import java from '../../assets/skills/Java-logo.png';

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
      { name: 'HTML', logo: 'path_to_html_logo.svg' },
      { name: 'CSS', logo: 'path_to_css_logo.svg' },
      { name: 'LeafletJS', logo: 'path_to_leafletJS_logo.svg' },
      { name: 'ChartJS', logo: 'path_to_chartJS_logo.svg' },
      { name: 'Django', logo: 'path_to_django_logo.svg' },
      { name: 'Flask', logo: 'path_to_flask_logo.svg' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', logo: 'path_to_mysql_logo.svg' },
      { name: 'SQLite', logo: 'path_to_sqlite_logo.svg' },
      { name: 'MongoDB', logo: 'path_to_mongodb_logo.svg' },
    ],
  },
  {
    id: 'ml-frameworks',
    title: 'ML Frameworks',
    skills: [
      { name: 'TensorFlow', logo: 'path_to_tensorflow_logo.svg' },
      { name: 'Keras', logo: 'path_to_keras_logo.svg' },
      { name: 'Hugging Face', logo: 'path_to_huggingface_logo.svg' },
      { name: 'Langchain', logo: 'path_to_langchain_logo.svg' },
      { name: 'Scikit-learn', logo: 'path_to_sklearn_logo.svg' },
      { name: 'NLTK', logo: 'path_to_nltk_logo.svg' },
      { name: 'OpenCV', logo: 'path_to_opencv_logo.svg' },
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'NumPy', logo: 'path_to_numpy_logo.svg' },
      { name: 'Pandas', logo: 'path_to_pandas_logo.svg' },
      { name: 'Matplotlib', logo: 'path_to_matplotlib_logo.svg' },
      { name: 'Seaborn', logo: 'path_to_seaborn_logo.svg' },
      { name: 'Plotly', logo: 'path_to_plotly_logo.svg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', logo: 'path_to_git_logo.svg' },
      { name: 'GitHub', logo: 'path_to_github_logo.svg' },
      { name: 'Postman', logo: 'path_to_postman_logo.svg' },
    ],
  },
  {
    id: 'apis',
    title: 'APIs',
    skills: [
      { name: 'Gemini API', logo: 'path_to_gemini_logo.svg' },
      { name: 'Groq API', logo: 'path_to_groq_logo.svg' },
      { name: 'Ollama', logo: 'path_to_ollama_logo.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className='sticky-title'>
        <h2>Skills</h2>
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div
            id={`sticky-card-${index + 1}`}
            key={index}
            className="sticky-card tech-stack"
            style={{ '--card-index': index }} // Dynamically set the card index
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
    </section>
  );
};

export default Skills;
