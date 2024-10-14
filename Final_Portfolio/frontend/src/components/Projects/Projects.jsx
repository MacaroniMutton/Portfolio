import React, { useRef } from 'react';
import './Projects.css'; // Import the CSS file specific to this component

const projectData = [
    {
        title: "Conversational RAG Bot",
        description: "The Conversational RAG (Retrieval-Augmented Generation) Bot is an advanced chatbot system designed to enhance user interaction by combining the capabilities of a generative model with retrieval mechanisms.",
        techStack: "Python, Langchain, FAISS, Groq API, Hugging Face",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*_zIYIh8BwufEnQngii8lfA.png"
    },
    {
        title: "Deepfake Detector",
        description: "Achieved 85-90% accuracy using TensorFlow and PyTorch.",
        techStack: "TensorFlow, PyTorch",
        image: "path-to-your-image2.jpg"
    },
    // Add more project objects as needed
    {
        title: "Fashion Recommender System",
        description: "Developed a system to suggest outfits based on user preferences.",
        techStack: "Django, HTML, CSS, JavaScript",
        image: "path-to-your-image3.jpg"
    },
    {
        title: "Sentiment Analysis Tool",
        description: "Analyzed user sentiment from social media using NLP techniques.",
        techStack: "Python, NLTK, Scikit-Learn",
        image: "path-to-your-image4.jpg"
    },
    {
        title: "Weather Forecast App",
        description: "A web app displaying real-time weather data using APIs.",
        techStack: "React, Node.js, OpenWeather API",
        image: "path-to-your-image5.jpg"
    },
    {
        title: "Task Management System",
        description: "A project management tool to track tasks and deadlines.",
        techStack: "Flask, SQLite, Bootstrap",
        image: "path-to-your-image6.jpg"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio to showcase projects and skills.",
        techStack: "HTML, CSS, JavaScript, React",
        image: "path-to-your-image7.jpg"
    },
    {
        title: "E-commerce Website",
        description: "Built a full-fledged e-commerce platform with payment integration.",
        techStack: "Django, React, Stripe API",
        image: "path-to-your-image8.jpg"
    },
    {
        title: "Chat Application",
        description: "Real-time chat app using WebSockets and Node.js.",
        techStack: "Node.js, Express, Socket.io",
        image: "path-to-your-image9.jpg"
    },
    {
        title: "Image Classification App",
        description: "Classifies images using CNN models.",
        techStack: "TensorFlow, Keras, Flask",
        image: "path-to-your-image10.jpg"
    },
    {
        title: "Fitness Tracker",
        description: "Tracks workouts and nutrition for fitness enthusiasts.",
        techStack: "React Native, Firebase",
        image: "path-to-your-image11.jpg"
    },
    {
        title: "Stock Price Predictor",
        description: "Predicts stock prices using machine learning algorithms.",
        techStack: "Python, Scikit-Learn, Matplotlib",
        image: "path-to-your-image12.jpg"
    },
    {
        title: "Quiz Application",
        description: "A quiz app with multiple choice questions.",
        techStack: "React, Node.js, Express",
        image: "path-to-your-image13.jpg"
    },
    {
        title: "Blog Platform",
        description: "Allows users to write and share their blogs.",
        techStack: "Django, React, PostgreSQL",
        image: "path-to-your-image14.jpg"
    },
    {
        title: "Event Management System",
        description: "Manage events, tickets, and attendees.",
        techStack: "Ruby on Rails, PostgreSQL",
        image: "path-to-your-image15.jpg"
    },
    {
        title: "Travel Planner",
        description: "Plan your trips and itineraries easily.",
        techStack: "Vue.js, Express, MongoDB",
        image: "path-to-your-image16.jpg"
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
