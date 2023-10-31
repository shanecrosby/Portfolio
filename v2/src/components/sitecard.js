// src/components/SiteCard.js

import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './css/sitecard.css';

const SiteCardComponent = ({ examplesite }) => {
    const imageData = getImage(examplesite.thumbnail.asset)
    
    return (
        <div className="sitecard">
            <div className="sitecard-text">
                <div className="sitecard-header"><a href={examplesite.url}>{examplesite.name}</a></div>
                <div className="sitecard-descriptor">{examplesite.description}</div>
            </div>
            <GatsbyImage image={imageData} alt={examplesite.caption} className='sitecard-thumbnail' />
        </div>
        
    );
};

export default SiteCardComponent;