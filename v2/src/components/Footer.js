// src/components/Footer.js

import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer>
            {/* Section 1 - Left: */}
            <div className="footer-container">
                <div className="footer-bar">
                        <p>&copy; 2023 Shane Crosby. All Rights Reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;