// src/components/SiteCard.js

// react and plugins
import React from 'react';
import './css/sitecard.css';

const SiteCardComponent = ({ examplesite }) => {
    
    return (
        <div className="sitecard">
            <div className="sitecard-text">
                <div className="sitecard-header"><a href={examplesite.url}>{examplesite.name}</a></div>
                <div className="sitecard-descriptor">{examplesite.description}</div>
            </div>
        </div>
        
    );
};

export default SiteCardComponent;