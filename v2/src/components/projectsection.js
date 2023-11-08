// src/components/projectsection.js

// react and plugins
import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BgImage } from "gbimage-bridge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// components
import SiteCardComponent from '../components/sitecard';
import '../components/css/projectsection.css';

const ProjectSection = ({ projects, background }) => {
    // ** Function to control navigation of projects from main screen **
        // State to track current project index
        const [currentIndex, setCurrentIndex] = useState(0);
        const [transitioning, setTransitioning] = useState(false);

        const changeProject = (index) => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setTransitioning(false);
            }, 1000); //Time in msec - should match CSS transition time
        };

        // Navigate to next project in list
        // Will loop from last to first record, and vice versa when end of list is reached in either direction
        const handleNext = () => changeProject((currentIndex + 1) % projects.length);
        const handlePrev = () => changeProject((currentIndex - 1 + projects.length) % projects.length);

        // Get the current project and testimonials fields
        const currentProject = projects[currentIndex];
        const bgImage = getImage(currentProject.thumbnail.asset);

    return (
        <section id="projects" name="projects">
            <div className="bg-Image-container">
                { /* Background Image from Sanity */}
                <a href={currentProject.url} target='_blank' rel='noreferrer'><GatsbyImage key={currentProject.id} image={bgImage} alt={currentProject.caption} className={`bgImage ${transitioning ? 'fade-out' : 'fade-in'}`} /></a>
                {/* Default background image to appear during project cross-fade */}
                <BgImage key='static-projectBG'image={background} className={`bgImage section-bg`}>&nbsp;</BgImage>
            </div>
            <div className="body-container">
                <div className="body-heading text-bg"><h1>Projects</h1></div>
                <div id="project-summary">
                    {/* Portfolio site card component */}
                    <SiteCardComponent key={currentProject.id} examplesite={currentProject} transitioning={transitioning} />
                </div>
                <div className="project-controls">
                    <button className='control-button' onClick={handlePrev} aria-label='Previous Project'><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button className='control-button' onClick={handleNext} aria-label='Next Project'><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;