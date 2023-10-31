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
                        <p className='address-block'>
                            2 Cortona Grove<br />
                            Sinagra, Western Australia, 6065<br />
                            <b>Phone:</b> +61 407 472 944<br />
                            <b>ABN:</b> 41781010072<br />
                        </p>
                    
                        {/* Social Buttons: */}
                            <ul className='social-icons'>
                                <a href="https://facebook.com/crosbyshane" aria-label="Facebook"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                                <a href="https://twitter.com/crosbyshane" aria-label="Twitter"><li><FontAwesomeIcon icon={faXTwitter} /></li></a>
                                <a href="https://instagram.com/crosbyshane" aria-label="Instagram"><li><FontAwesomeIcon icon={faInstagram} /></li></a>
                                <a href="https://www.youtube.com/planeshavewings" aria-label="Youtube"><li><FontAwesomeIcon icon={faYoutube} /></li></a>
                                <a href="tel:+61407472944" title="+61407472944" aria-label="Telephone"><li><FontAwesomeIcon icon={faPhone} /></li></a>
                            </ul>
                    </div>
                </div>
                <div className="footer-bar">
                        <p>&copy; 2023 Shane Crosby. All Rights Reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;