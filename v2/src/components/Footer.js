// src/components/Footer.js

import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            {/* Section 1 - Left: */}
            <div className="footer-container">
                <div className='footer-bg'>
                    <div className="footer-left">
                        <h1>Title</h1>
                        <h2>Subtitle</h2>
                        <p className='address-block'>
                            123 Somerset Boulevard<br />
                            Sorrento, 6020<br />
                            <b>Phone:</b> 1300 975 708
                        </p>
                    
                        {/* Social Buttons: */}
                            <ul className='social-icons'>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faXTwitter} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                <li><FontAwesomeIcon icon={faPhone} /></li>
                            </ul>
                    </div>
                    {/*Section 2 - Right:*/}
                    <div className="footer-right">
                        <div className="columns">
                            {/* Column A: */}
                            <div className="column-left">
                                <h3>First Column</h3>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </div>
                            {/* Column B: */}
                            <div className="column-right">
                                <h3>Second Column</h3>
                                <ul>
                                    <li>Something</li>
                                    <li>Blog</li>
                                    <li>FAQs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bar">
                        <p>&copy; 2023 Business Name. All Rights Reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;