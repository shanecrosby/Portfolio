// src/components/SiteCard.js

// react and plugins
import React from 'react';
import './css/sitecard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import BlockContent from '@sanity/block-content-to-react'

const SiteCardComponent = ({ examplesite, transitioning }) => {
    const testimonialClass = examplesite._rawTestimonial ? 'testimonial-card' : 'testimonial-card hidden';
    const cardClass = transitioning ? `${testimonialClass} transitioning` : testimonialClass;

    return (
        <div className={`card-container ${transitioning ? 'fade-out' : 'fade-in'}`}>
            <div className="site-card">
                <div className="sitecard-header"><h1><a href={examplesite.url}>{examplesite.name}</a></h1></div>
                <div className="sitecard-descriptor"><BlockContent blocks={examplesite._rawDescription} /></div>
            </div>
            <div className={cardClass}> 
                <div className="testimonial-header"><h1>{examplesite.clientname}</h1></div>
                <div className="testimonial-text">
                    <div className="quote">
                        <FontAwesomeIcon icon={faQuoteLeft} className='left' />
                        <BlockContent blocks={examplesite._rawTestimonial} className='justify handwritten' />
                        <FontAwesomeIcon icon={faQuoteRight} className='right'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteCardComponent;