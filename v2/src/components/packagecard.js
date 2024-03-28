// src/components/packageCard.js
import React from 'react';
import BlockContent from '@sanity/block-content-to-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const PackageCardComponent = ({ webpackage }) => {

    return (
        <div className="package-card">
            <div className="package-inner">
                <div className="package-details">
                    <h2 className='package-name'>{webpackage.package}</h2>
                    <h3 className='package-price'><FontAwesomeIcon icon={faDollarSign}/>{webpackage.price}</h3>
                    <BlockContent blocks={webpackage._rawDescriptor} className='package-descriptor'/>
                    <div class='card-buttons'>
                        <ScrollLink to="contact" smooth='easeInOutCubic' duration={1000}><div class='link-button'>Order now</div></ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCardComponent;