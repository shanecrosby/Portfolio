// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../css/header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className='header-container'>
                <div className='header-bg'>
                    <div className='nav-container'>
                        <div className='logo'>
                            <h1>Business Name</h1>
                            <h2>Subtitle</h2>
                        </div>
                        <div 
                            className="menu-icon" onClick={toggleMenu}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key ===' ') {
                                    toggleMenu();
                                }
                            }} role="button" tabIndex="0">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
                            <div className="inner">
                                <ul>
                                    <li><Link to="/" activeClassName='active'>Home</Link></li>
                                    <li><Link to="/about" activeClassName='active'>About</Link></li>
                                    <li><Link to="/contact" activeClassName='active'>Contact</Link></li>
                                </ul>
                            </div>
                            
                        </nav>
                    </div>
                </div>  
            </div>
        </header>
    );
};

export default Header;