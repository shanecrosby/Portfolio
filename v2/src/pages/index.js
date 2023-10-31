//src/pages/index.js
// react and plugins
import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

// components
import Footer from '../components/Footer'; // Import your footer component
import TestimonialCardComponent from '../components/TestimonialCard'
import SiteCardComponent from '../components/sitecard';
import QuoteCardComponent from '../components/QuoteCard';

const IndexPage = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
    }, [darkMode]);

    const changeMode = () => setDarkMode(prevMode => !prevMode);

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const data = useStaticQuery(graphql`
    query {
        allSanityTestimonial {
            edges {
                node {
                    name
                    website
                    content
                }
            }
        }
        
        allSanityWebsite {
            edges {
                node {
                    name
                    url
                    description
                    thumbnail {
                        asset {
                            gatsbyImageData(
                                fit: FILLMAX
                                placeholder: BLURRED
                                width: 1000
                            )
                        }
                    }
                    caption
                }
            }
        }

        allSanityQuotation {
            edges {
                node {
                    name
                    company
                    quote
                }
            }
        }

        heroImage: file(relativePath: { eq: "code-1839406.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }

        projectsImage: file(relativePath: { eq: "apple-606761.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
        }
    }
`);

    return (
        <div id="page-container">
            <header>
                <div className="page-controls">
                    <div className="control-button" 
                        onClick={changeMode}
                        onKeyDown={(e) => {
                            if (e.key === 'm') {
                                changeMode();
                            }
                        }} role="button" tabIndex="-1">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                </div>
                <div className='nav-container' onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} onTouchEnd={toggleMenu}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key ===' ') {
                                toggleMenu();
                            }
                        }} role="button" tabIndex="0">
                    <div className='logo'>{/*<GatsbyImage image={getImage(data.logoImage)} alt="Shane Crosby - Web Designer" className="logo-img" />*/}</div>
                    <div className="control-button">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <nav className={`nav-bar ${isOpen ? 'open' : 'closed'}`}>
                        <ul className='menu'>
                            <Link to="/" activeClassName='active'><li>Home</li></Link>
                            <Link to="/about" activeClassName='active'><li>About</li></Link>
                            <Link to="/contact" activeClassName='active'><li>Contact</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero">
                    <div className="image-container">
                        <GatsbyImage image={getImage(data.heroImage)} alt="" className="hero-bgImage" />
                    </div>
                    <div className='hero'>
                        <h1 className='main-heading'>Shane Crosby</h1><h2>Web Designer</h2>
                    </div>
                    <div className='intro-container'>
                        <p className='intro-p'>My name is Shane and I make websites.</p>
                    </div>
                </section>
                <section id="projects">
                    <GatsbyImage image={getImage(data.projectsImage)} alt="" className="projects-bgImage" />
                    <div className="body-section">
                        <h1 className="section-title">Projects</h1>
                        {/*<div className="one-column-container flex">
                            <ul className='menu'>
                                <a href="https://itsyourday.au"><li>Tonia Bovell - It's Your Day</li></a>
                                <a href="https://brushquest.com.au"><li>BrushQuest</li></a>
                                <a href="https://bellabakes.shanecrosby.com"><li>Bella Bakes, Bakery and Patisserie (Sample site)</li></a>
                                <a href="https://inkwell.shanecrosby.com"><li>InkWell Stationers (Sample Site)</li></a>
                            </ul>
                        </div>*/}
                    
                        <div id="project-summary">
                            {/* Portfolio site card component */
                                data.allSanityWebsite.edges.map(edge => {
                                    const card = edge.node;
                                    return <SiteCardComponent key={card.id} examplesite={card} />;
                                })
                            }
                        </div>
                        <div id="testimonial-card">
                            {/* Testimonial card component */
                                data.allSanityTestimonial.edges.map(edge => {
                                const card = edge.node;
                                return <TestimonialCardComponent key={card.id} testimonial={card} />;
                            })}
                        </div> 
                    </div>
                </section>
                <section id="testimonials">
                    <div className="body-section">
                        <div className="one-column-container flex">
                            <p className="body-text">
                                These are some nice things other people have said about me.
                            </p>
                            <div className="column-one">
                                {/* Quote site card component */
                                    data.allSanityQuotation.edges.map(edge => {
                                        const card = edge.node;
                                        return <QuoteCardComponent key={card.id} quote={card} />;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default IndexPage;
