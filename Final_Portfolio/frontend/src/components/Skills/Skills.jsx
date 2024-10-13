import React from 'react';
import './Skills.css'; // Import the CSS file specific to this component
import python from '../../assets/skills/python-logo.png'
import C from '../../assets/skills/C-logo.png'
import C__ from '../../assets/skills/C++-logo.png'
import java from '../../assets/skills/Java-logo.png'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="tech-stack" id="programming-languages">
          <h3>Programming Languages</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src={python} width="40" height="40" alt="Python Logo" />
              <p>Python</p>
            </div>
            <div className="logo-item">
              <img src={C} width="40" height="40" alt="C Logo" />
              <p>C</p>
            </div>
            <div className="logo-item">
              <img src={C__} width="40" height="40" alt="C++ Logo" />
              <p>C++</p>
            </div>
            <div className="logo-item">
              <img src={java} width="40" height="40" alt="Java Logo" />
              <p>Java</p>
            </div>
          </div>
        </div>

        <div className="tech-stack" id="web-development">
          <h3>Web Development</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src="path_to_html_logo.svg" alt="HTML Logo" />
              <p>HTML</p>
            </div>
            <div className="logo-item">
              <img src="path_to_css_logo.svg" alt="CSS Logo" />
              <p>CSS</p>
            </div>
            <div className="logo-item">
              <img src="path_to_leafletJS_logo.svg" alt="LeafletJS Logo" />
              <p>LeafletJS</p>
            </div>
            <div className="logo-item">
              <img src="path_to_chartJS_logo.svg" alt="ChartJS Logo" />
              <p>ChartJS</p>
            </div>
            <div className="logo-item">
              <img src="path_to_django_logo.svg" alt="Django Logo" />
              <p>Django</p>
            </div>
            <div className="logo-item">
              <img src="path_to_flask_logo.svg" alt="Flask Logo" />
              <p>Flask</p>
            </div>
          </div>
        </div>

        <div className="tech-stack" id="databases">
          <h3>Databases</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src="path_to_mysql_logo.svg" alt="MySQL Logo" />
              <p>MySQL</p>
            </div>
            <div className="logo-item">
              <img src="path_to_sqlite_logo.svg" alt="SQLite Logo" />
              <p>SQLite</p>
            </div>
            <div className="logo-item">
              <img src="path_to_mongodb_logo.svg" alt="MongoDB Logo" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>

        <div className="tech-stack" id="ml-frameworks">
          <h3>ML Frameworks</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src="path_to_tensorflow_logo.svg" alt="TensorFlow Logo" />
              <p>TensorFlow</p>
            </div>
            <div className="logo-item">
              <img src="path_to_keras_logo.svg" alt="Keras Logo" />
              <p>Keras</p>
            </div>
            <div className="logo-item">
              <img src="path_to_huggingface_logo.svg" alt="Hugging Face Logo" />
              <p>Hugging Face</p>
            </div>
            <div className="logo-item">
              <img src="path_to_langchain_logo.svg" alt="Langchain Logo" />
              <p>Langchain</p>
            </div>
            <div className="logo-item">
              <img src="path_to_sklearn_logo.svg" alt="Scikit-learn Logo" />
              <p>Scikit-learn</p>
            </div>
            <div className="logo-item">
              <img src="path_to_nltk_logo.svg" alt="NLTK Logo" />
              <p>NLTK</p>
            </div>
            <div className="logo-item">
              <img src="path_to_opencv_logo.svg" alt="OpenCV Logo" />
              <p>OpenCV</p>
            </div>
          </div>
        </div>

        <div className="tech-stack" id="data-analysis">
          <h3>Data Analysis & Visualization</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src="path_to_numpy_logo.svg" alt="NumPy Logo" />
              <p>NumPy</p>
            </div>
            <div className="logo-item">
              <img src="path_to_pandas_logo.svg" alt="Pandas Logo" />
              <p>Pandas</p>
            </div>
            <div className="logo-item">
              <img src="path_to_matplotlib_logo.svg" alt="Matplotlib Logo" />
              <p>Matplotlib</p>
            </div>
            <div className="logo-item">
              <img src="path_to_seaborn_logo.svg" alt="Seaborn Logo" />
              <p>Seaborn</p>
            </div>
            <div className="logo-item">
              <img src="path_to_plotly_logo.svg" alt="Plotly Logo" />
              <p>Plotly</p>
            </div>
          </div>
        </div>

        <div className="tech-stack" id="tools">
          <h3>Tools</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src="path_to_git_logo.svg" alt="Git Logo" />
              <p>Git</p>
            </div>
            <div className="logo-item">
              <img src="path_to_github_logo.svg" alt="GitHub Logo" />
              <p>GitHub</p>
            </div>
            <div className="logo-item">
              <img src="path_to_postman_logo.svg" alt="Postman Logo" />
              <p>Postman</p>
            </div>
          </div>
        </div>

        <div className="tech-stack" id="apis">
          <h3>APIs</h3>
          <div className="logos-container">
            <div className="logo-item">
              <img src="path_to_gemini_logo.svg" alt="Gemini API Logo" />
              <p>Gemini API</p>
            </div>
            <div className="logo-item">
              <img src="path_to_groq_logo.svg" alt="Groq API Logo" />
              <p>Groq API</p>
            </div>
            <div className="logo-item">
              <img src="path_to_ollama_logo.svg" alt="Ollama Logo" />
              <p>Ollama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
