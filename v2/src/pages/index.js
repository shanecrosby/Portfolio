//src/pages/index.js
// react and plugins
import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

// components
import Footer from '../components/Footer'; // Import your footer component
import TestimonialCardComponent from '../components/TestimonialCard'
import SiteCardComponent from '../components/sitecard';
import QuoteCardComponent from '../components/QuoteCard';

const IndexPage = () => {
    /* Handle the light/dark mode switching */
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
    }, [darkMode]);
    const changeMode = () => setDarkMode(prevMode => !prevMode);

    /* Hanlde the main menu pop-out */
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    /* Handle the page scroll up/down */
    const [currentSection, setCurrentSection] = useState(0);

    const handleScroll = (direction) => {
        const sections = document.querySelectorAll('section');
        const currentSectionElement = sections[currentSection];
        let targetSection;
        if (direction === 'down') {
            targetSection = currentSectionElement.nextElementSibling;
        } else {
            targetSection = currentSectionElement.previousElementSibling;
        }
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const updateSectionIndex = () => {
            window.addEventListener('scroll', () => {
                const sections = document.querySelectorAll('section');
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        setCurrentSection(index);
                    }
                });
                const scrollUpButton = document.getElementById('scrollup-button');
                const scrollDnButton = document.getElementById('scrolldn-button');

                if (window.scrollY === 0) {
                    scrollUpButton.classList.add('hidden');
                } else {
                    scrollUpButton.classList.remove('hidden');
                }

                if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                    scrollDnButton.classList.add('hidden');
                } else {
                    scrollDnButton.classList.remove('hidden');
                }
            });
        };

        window.addEventListener('scroll', updateSectionIndex);

        return () => {
            window.removeEventListener('scroll', updateSectionIndex);
        };
    }, []);  // Empty array means this useEffect runs once, similar to componentDidMount

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
                    <div className="mode-button">
                        <div className="control-button" 
                            onClick={changeMode}
                            onKeyDown={(e) => {
                                if (e.key === 'm') {
                                    changeMode();
                                }
                            }} role="button" tabIndex="-1" aria-label="Switch Light/Dark Mode">
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                    </div>
                    <div id='scrollup-button' className='hidden' 
                        onClick={() => handleScroll('up')}
                        onKeyDown={(e) => {
                            if (e.key === 'up') {
                                changeMode();
                            }
                        }} role="button" tabIndex="-1" aria-label="Scroll up">
                        <div className="control-button"><FontAwesomeIcon icon={faArrowUp} /></div>
                    </div>
                    <div id='scrolldn-button' 
                        onClick={() => handleScroll('down')}
                        onKeyDown={(e) => {
                            if (e.key === 'down') {
                                changeMode();
                            }
                        }} role="button" tabIndex="-1" aria-label="Scroll down">
                        <div className="control-button"><FontAwesomeIcon icon={faArrowDown} /></div>
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
