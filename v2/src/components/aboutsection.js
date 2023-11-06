// src/components/aboutsection.js

// react and plugins
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AboutSection = () => {
    
    return (
        <section id="about" name="about">
            <div className="body-container">
                <div className="body-heading"><h1>About Me</h1></div>
                <div className="body-text">
                    <p>Having devoted over 18 years to a career in IT, where my primary focus was user support and systems administration, my fascination with web design has always simmered beneath the surface. From as far back as my primary school days of the late 90s when I was first introduced to rudimentary HTML coding, this casual interest has slowly grown through occasional projects within the various client organisations I worked with in my previous role, culminating in a full-fledged dive into front-end web development in 2023.</p>
                    <p>Armed with a robust skill set in Javascript (React, Gatsby, ThreeJS), HTML5, CSS, and platforms like WordPress, Squarespace, and Wix, I am ready to help you build your business with a well-designed and functional website. My passion for refined typography and meticulous attention to detail are the fine threads that sew together engaging and user-centric web experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;