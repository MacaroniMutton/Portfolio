// src/components/Education/Education.jsx
import React from 'react';
import './Education.css'; // Import the CSS file for styling

const educationData = [
    {
        degree: "Bachelor of Engineering in Computer Engineering",
        institution: "Sardar Patel Institute of Technology",
        duration: "2021 - Present",
        description: "Pursuing a Bachelor's degree with a CGPA of 9.98."
    },
    {
        degree: "Bachelor of Engineering in Computer Engineering",
        institution: "Sardar Patel Institute of Technology",
        duration: "2021 - Present",
        description: "Pursuing a Bachelor's degree with a CGPA of 9.98."
    },
    {
        degree: "Higher Secondary Certificate",
        institution: "XYZ High School",
        duration: "2019 - 2021",
        description: "Completed with a focus on Science."
    },
    {
        degree: "Secondary School Certificate",
        institution: "ABC School",
        duration: "2015 - 2019",
        description: "General education with good performance."
    },
    // Add more educational qualifications here if needed
];

const Education = () => {
    return (
        <section id="education" className="section">
            <h2>Education</h2>
            <div className="timeline">
                {educationData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <h3>{item.degree}</h3>
                            <p className="institution">{item.institution}</p>
                            <p className="duration">{item.duration}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
