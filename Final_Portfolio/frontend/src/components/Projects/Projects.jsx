import React, { useRef } from 'react';
import './Projects.css'; // Import the CSS file specific to this component
import deepfake from '../../assets/deepfake.png'
import fashion from '../../assets/fashion.png'
import bayesian from '../../assets/bayesian.png'
import amazon from '../../assets/amazon.png'
import flappy from '../../assets/flappy.png'
import plant from '../../assets/plant.png'
import calorie from '../../assets/calorie.png'
import chat from '../../assets/chat.png'


const projectData = [
    {
        title: "Conversational RAG Bot",
        description: "The Conversational RAG (Retrieval-Augmented Generation) Bot is an advanced chatbot system designed to enhance user interaction by combining the capabilities of a generative model with retrieval mechanisms.",
        techStack: "Python, Langchain, FAISS, Groq API, Hugging Face",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*_zIYIh8BwufEnQngii8lfA.png"
    },
    {
        title: "Deepfake Detector",
        description: "Developed a model integrating video (TensorFlow) and audio (PyTorch) analysis to detect deepfake content with 85-90% accuracy, enhancing content verification tools.",
        techStack: "TensorFlow, PyTorch, Random Forest",
        image: deepfake
    },
    // Add more project objects as needed
    {
        title: "Fashion Recommender System",
        description: "Designed a personalized fashion recommender system combining image recognition (ResNet) and collaborative filtering, achieving top 12 in SE Hackathon.",
        techStack: "ResNet, Collaborative Filtering, Django, Gemini API",
        image: fashion
    },
    {
        title: "Plane Crash Search using Bayesian Search Theory",
        description: "Simulated rescue missions for plane crashes by combining Bayesian theory, geospatial visualization, and flight data analysis to generate optimal search paths.",
        techStack: "Django, Pygame, LeafletJS, Bayesian Theory, Selenium, Meteomatics API",
        image: bayesian
    },
    {
        title: "OCR for Product Dimension Extraction",
        description: "Built a VQA-based system using IDEFICS and OCR models to extract dimensions (weight, height, width) from Amazon product images, improving e-commerce workflows.",
        techStack: "IDEFICS, EasyOCR, KerasOCR, Pytesseract, Tensorflow, Keras",
        image: amazon
    },
    {
        title: "Chat Application",
        description: "Real-time chat app using WebSockets",
        techStack: "React, Flask, Socket.io",
        image: chat
    },
    {
        title: "Flappy Bird with Face Controls",
        description: "Developed a Flappy Bird game using face tracking to control the bird's movements. Integrated OpenCV's face detection with Pygame for a unique and interactive gaming experience.",
        techStack: "Pygame, OpenCV",
        image: flappy
    },
    {
        title: "Plant Species Classification App",
        description: "Classifies among 47 plant species using an ensemble of state of art CNN models, including VGGNet, InceptionNet, and ResNet, achieving 91% accuracy.",
        techStack: "Pytorch, Flask, React",
        image: plant
    },
    {
        title: "Calorie Tracker",
        description: "Tracks calories and nutrition for fitness enthusiasts.",
        techStack: "Django, HTML, CSS, Javascript, Nutrition API",
        image: calorie
    },
];

const Projects = () => {
    const projectContainerRef = useRef(null);

    // Scroll Left
    const scrollLeft = () => {
        projectContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    // Scroll Right
    const scrollRight = () => {
        projectContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <p className="swipe-indicator">Swipe left or right to see more projects</p>
            <div className="projects-wrapper">
                <button className="scroll-btn left-btn" onClick={scrollLeft}>&#10094;</button>
                <div className="projects-container" ref={projectContainerRef}>
                    {projectData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <br />
                            <p className="tech-stack-project">Tech Stack: {project.techStack}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-btn right-btn" onClick={scrollRight}>&#10095;</button>
            </div>
        </section>
    );
};

export default Projects;
