import React from 'react';
import './Projects.css'; // Import the CSS file specific to this component

const Projects = () => {
  return (
    <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-container">
            <div className="project-card">
                <h3>Conversational RAG Bot</h3>
                <p>Built using Langchain, Hugging Face, FAISS, Groq API.</p>
            </div>
            <div className="project-card">
                <h3>Deepfake Detector</h3>
                <p>Achieved 85-90% accuracy using TensorFlow and PyTorch.</p>
            </div>
            {/* Add more project cards here */}
        </div>
    </section>
  );
};

export default Projects;
