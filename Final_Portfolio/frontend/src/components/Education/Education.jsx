// src/components/Education/Education.jsx
import React from 'react';
import './Education.css'; // Import the CSS file for styling

const educationData = [
    {
        degree: "B.Tech in Computer Engineering",
        institution: "Sardar Patel Institute of Technology, Mumbai, India",
        duration: "Aug 2022 - Present",
        description: "Pursuing a Bachelor's degree with a CGPA of 9.99."
    },
    {
        degree: "Minor in Management",
        institution: "SPJIMR (SP Jain Institute of Management and Research), Mumbai, India",
        duration: "Feb 2024 - Present",
        description: "Enrolled in a minor program focusing on management principles."
    },
    {
        degree: "11th and 12th Standard",
        institution: "Alpha College, Mumbai, India",
        duration: "2020 - 2022",
        description: "Achieved 97.5% in board exams, MHT-CET: 100%ile, JEE Mains: 99.53%ile."
    },
    {
        degree: "Secondary School Certificate (10th Standard)",
        institution: "Orion ICSE School, Mumbai, India",
        duration: "2007 - 2020",
        description: "Completed ICSE boards with a score of 98.2%."
    }
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
