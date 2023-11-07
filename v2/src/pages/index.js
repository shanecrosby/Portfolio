//src/pages/index.js
// react and plugins
import React, { useEffect, useState, Suspense } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, animateScroll as scroll, Events, scrollSpy } from 'react-scroll';
//import { Link } from "gatsby";

// components
const AboutSection = React.lazy(() => import('../components/aboutsection'));
const ProjectSection = React.lazy(() => import( '../components/projectsection'));
const ContactSection = React.lazy(() => import( '../components/contactsection'));
const TestimonialSection = React.lazy(() => import( '../components/testimonialsection'));
const Footer = React.lazy(() => import( '../components/Footer')); // Import your footer component

const IndexPage = () => {
    //Handle the light/dark mode switching
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
        console.log("Dark mode:",darkMode);
    }, [darkMode]);
    const changeMode = () => setDarkMode(prevMode => !prevMode);

    // Handle the main menu pop-out
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // Handle the page scroll up/down
    const [currentSection, setCurrentSection] = useState(0);
    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin scrolling', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end scrolling', to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);
    const handleScroll = (direction) => {
        const sections = document.querySelectorAll('section');
        const currentSectionElement = sections[currentSection];
        console.log("Current Section:",currentSectionElement);
        if (direction === 'down') {
            console.log('Scrolling down');
            scroll.scrollMore(window.innerHeight, { duration: 1000, smooth: 'easeInOutCubic' });
        } else {
            console.log('Scrolling up');
            scroll.scrollMore(-window.innerHeight, { duration: 1000, smooth: 'easeInOutCubic' });
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
            heroBGImage: file(relativePath: { eq: "luca-bravo-XJXWbfSo2f0-unsplash.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 2000,
                        quality: 50,
                        placeholder: BLURRED, 
                        formats: [AUTO, WEBP, AVIF],
                        webpOptions: {quality: 70}
                    )
                }
            }

            projectsBGImage: file(relativePath: { eq: "ProjectSection-Background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 2000,
                        quality: 50,
                        placeholder: BLURRED, 
                        formats: [AUTO, WEBP, AVIF],
                        webpOptions: {quality: 70}
                    )
                }
            }
            
            allSanityWebsite {
                edges {
                    node {
                        id
                        name
                        clientname
                        url
                        _rawDescription(resolveReferences: { maxDepth: 5 })
                        _rawTestimonial(resolveReferences: { maxDepth: 5 })
                        caption
                        thumbnail {
                            asset {
                                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 1000)
                            }
                        }
                    }
                }
            }
        }
    `);
    const heroBGImage = getImage(data.heroBGImage);
    const projectsBGImage = getImage(data.projectsBGImage);
    const projects = data.allSanityWebsite.edges.map(edge => edge.node);

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
                                handleScroll('up');
                            }
                        }} role="button" tabIndex="-1" aria-label="Scroll up">
                        <div className="control-button"><FontAwesomeIcon icon={faArrowUp} /></div>
                    </div>
                    <div id='scrolldn-button' 
                        onClick={() => handleScroll('down')}
                        onKeyDown={(e) => {
                            if (e.key === 'down') {
                                handleScroll('down');
                            }
                        }} role="button" tabIndex="-1" aria-label="Scroll down">
                        <div className="control-button"><FontAwesomeIcon icon={faArrowDown} /></div>
                    </div>
                </div>
                <div className='nav-container' onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key ===' ') {
                                toggleMenu();
                            }
                        }} role="button" tabIndex="0">
                    <div className='logo'>{/*<GatsbyImage image={getImage(data.logoImage)} alt="Shane Crosby - Web Designer" className="logo-img" />*/}</div>
                    <div className="control-button" onTouchEnd={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <nav className={`nav-bar ${isOpen ? 'open' : 'closed'}`}>
                        <ul className='menu'>
                            <ScrollLink to="hero" smooth='easeInOutCubic' duration={1000}><li>Home</li></ScrollLink>
                            <ScrollLink to="about" smooth='easeInOutCubic' duration={1000}><li>About</li></ScrollLink>
                            <ScrollLink to="projects" smooth='easeInOutCubic' duration={1000}><li>Projects</li></ScrollLink>
                            <ScrollLink to="testimonials" smooth='easeInOutCubic' duration={1000}><li>Testimonials</li></ScrollLink>
                            <ScrollLink to="contact" smooth='easeInOutCubic' duration={1000}><li>Contact</li></ScrollLink>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero" name="hero">
                    <div className="hero-bgImage-container">
                        <BgImage image={heroBGImage} className="hero-bgImage">&nbsp;</BgImage>
                    </div>
                    <div className='hero main-heading'>
                        <h1 className='main-heading'>Shane Crosby</h1><h2 className='main-heading'>Web Designer</h2>
                    </div>
                    <div className='intro-container'>
                        <p className='intro-p'>My name is Shane and I like to make beautiful and functional websites.</p>
                    </div>
                </section>
                <Suspense fallback={<div>Loading section...</div>}>
                    <AboutSection darkMode={darkMode} />
                    <ProjectSection projects={projects} background={projectsBGImage} />
                    <TestimonialSection />
                    <ContactSection />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default IndexPage;
