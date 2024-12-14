import React, { useEffect, useState } from 'react';
import './Hero.css'; // Import the CSS file specific to this component
import profileImg from '../../assets/profileImg.jpeg';
import resume from '../../assets/Manan_Kher_Resume_2024.pdf';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust this value based on your breakpoint

    useEffect(() => {
        // Check for screen size on resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Mousemove effect for the profile image
        const image = document.querySelector('.hero-image img');
        if (image) {
            const handleMouseMove = (event) => {
                const rect = image.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const glowX = ((x - centerX) / centerX) * 20;
                const glowY = ((y - centerY) / centerY) * 20;

                image.style.boxShadow = `${glowX}px ${glowY}px 20px 5px rgba(0, 255, 204, 0.7)`;
            };

            const handleMouseLeave = () => {
                image.style.boxShadow = '0px 0px 10px rgba(0, 255, 204, 0.5)';
            };

            image.addEventListener('mousemove', handleMouseMove);
            image.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup event listeners
            return () => {
                image.removeEventListener('mousemove', handleMouseMove);
                image.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []); // Empty dependency array to ensure it only runs once

    return (
        <section id="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        {isMobile ? (
                            <TypeAnimation
                                sequence={[
                                    "Hey, I'm Manan Kher",
                                    4000, // Pause before finishing
                                ]}
                                speed={200} // Typing speed
                                deletionSpeed={0} // No deletion for mobile
                                wrapper="span" // Element to wrap the animation
                                cursor={true} // Show cursor
                                repeat={0} // Do not repeat
                            />
                        ) : (
                            <TypeAnimation
                                sequence={[
                                    "Hey, I'm Manan Kher",
                                    4000, // Pause before deleting
                                    "Welcome to My Portfolio!", 
                                    4000, // Pause before deleting
                                    "Let's Explore Together!", 
                                    4000, // Pause before deleting
                                    () => { /* Callback after typing */ },
                                ]}
                                speed={200} // Typing speed
                                deletionSpeed={50} // Deletion speed
                                wrapper="span" // Element to wrap the animation
                                cursor={true} // Show cursor
                                repeat={Infinity} // Repeat forever
                            />
                        )}
                    </h1>
                    <p>
                        {isMobile ? (
                            <TypeAnimation
                                sequence={[
                                    "I'm a Data Scientist",
                                    2000, // Wait before showing the next role
                                    "I'm an AI/ML Enthusiast",
                                    2000,
                                    "I'm a Django Developer",
                                    2000,
                                    "I'm a Problem Solver",
                                    2000,
                                    () => { /* Callback after typing */ },
                                ]}
                                speed={200} // Typing speed
                                deletionSpeed={50} // Optional deletion speed
                                wrapper="span" // Element to wrap the animation
                                cursor={true} // Show cursor
                                repeat={Infinity} // Repeat forever
                            />
                        ) : (
                            <TypeAnimation
                                sequence={[
                                    "Data Scientist | AI/ML Enthusiast | Django Developer",
                                    3000, // Wait 2 seconds before deleting
                                    "Passionate about AI and innovation.",
                                    3000,
                                    () => { /* Callback after typing */ },
                                ]}
                                speed={200} // Typing speed
                                deletionSpeed={50} // Deletion speed (optional)
                                wrapper="span" // Element to wrap the animation
                                cursor={true} // Show cursor
                                repeat={Infinity} // Repeat forever
                            />
                        )}
                    </p>
                    <p id="about-me-snippet">
                        I am a passionate Computer Engineering student with a deep-rooted enthusiasm for innovation, teamwork, and communication. I thrive on solving complex problems through AI and Machine Learning, with a vision of revolutionizing technology and making a lasting impact through collaboration and cutting-edge advancements.
                    </p>
                    <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">View Resume</a>
                </div>
                <div className="hero-image">
                    <img src={profileImg} alt="Manan Kher" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
