//src/pages/index.js
// react and plugins
import React, { useEffect, useState, Suspense } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars, faArrowDown, faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink, animateScroll as scroll, Events, scrollSpy } from 'react-scroll';

// components
import { SearchEngineOptimisation } from '../components/seo'
const AboutSection = React.lazy(() => import('../components/aboutsection'));
const ProjectSection = React.lazy(() => import( '../components/projectsection'));
const ContactSection = React.lazy(() => import( '../components/contactsection'));
const TestimonialSection = React.lazy(() => import( '../components/testimonialsection'));
const PackageSection = React.lazy(() => import( '../components/packagesection'));

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

            logoImageBig: file(relativePath: { eq: "SC-Colour-Wide-Dark.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1200,
                        placeholder: NONE, 
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }

            logoImageSml: file(relativePath: { eq: "SC-Colour-Vert-Dark.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 600,
                        placeholder: NONE, 
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }

            projectsBGImage: file(relativePath: { eq: "ProjectSection-Background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 2000,
                        quality: 50,
                        placeholder: NONE, 
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
                                gatsbyImageData(
                                    fit: FILLMAX, 
                                    placeholder: NONE, 
                                    width: 2000,
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    `);
    const logoImageBig = getImage(data.logoImageBig);
    const logoImageSml = getImage(data.logoImageSml);
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
                <div className='nav-container' onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} aria-label='Toggle Menu'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key ===' ') {
                                toggleMenu();
                            }
                        }} role="button" tabIndex="0">
                    <div className="control-button" onTouchEnd={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <nav className={`nav-bar ${isOpen ? 'open' : 'closed'}`}>
                        <ul className='menu'>
                            <ScrollLink to="hero" smooth='easeInOutCubic' duration={1000}><li>Home</li></ScrollLink>
                            <ScrollLink to="about" smooth='easeInOutCubic' duration={1000}><li>About</li></ScrollLink>
                            <ScrollLink to="projects" smooth='easeInOutCubic' duration={1000}><li>Projects</li></ScrollLink>
                            <ScrollLink to="testimonials" smooth='easeInOutCubic' duration={1000}><li>Testimonials</li></ScrollLink>
                            <ScrollLink to="packages" smooth='easeInOutCubic' duration={1000}><li>Packages</li></ScrollLink>
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
                        {/*<h1 className='main-heading'>Shane Crosby</h1><h2 className='main-heading'>Web Designer</h2>*/}
                        <GatsbyImage image={logoImageBig} alt="Shane Crosby - Web Designer" className='main-heading wide-logo' />
                        <GatsbyImage image={logoImageSml} alt="Shane Crosby - Web Designer" className='main-heading square-logo' />
                    </div>
                    <div className='intro-container'>
                        <p className='intro-p'>My name is Shane and I like to make beautiful and functional websites.</p>
                    </div>
                </section>
                <Suspense fallback={<div>Loading section...</div>}>
                    <AboutSection darkMode={darkMode} />
                    <ProjectSection projects={projects} background={projectsBGImage} />
                    <TestimonialSection />
                    <PackageSection darkMode={darkMode}/>
                    <ContactSection />
                </Suspense>
            </main>
            <footer>
                <div className="footer-container">
                    <h3>Shane Crosby</h3><p>2 Cortona Grove, Sinagra, WA, 6065 <br /><b>Phone:</b> +61 407 472 944 | <b>ABN:</b> 41781010072</p>
                    <ul className='social-icons'>
                        <a href="https://facebook.com/crosbyshane" aria-label="Facebook" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                        <a href="https://twitter.com/crosbyshane" aria-label="Twitter" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faXTwitter} /></li></a>
                        <a href="https://instagram.com/crosbyshane" aria-label="Instagram" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faInstagram} /></li></a>
                        <a href="https://www.youtube.com/@ShaneCrosby" aria-label="Youtube" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faYoutube} /></li></a>
                        <a href="tel:+61407472944" title="+61407472944" aria-label="Telephone" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faPhone} /></li></a>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default IndexPage;

export const Head = () => {
    <SearchEngineOptimisation />
}