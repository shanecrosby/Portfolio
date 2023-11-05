//src/pages/index.js
// react and plugins
import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars, faArrowDown, faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SweetScroll from 'sweet-scroll';
//import { Link } from "gatsby";

// components
import Footer from '../components/Footer'; // Import your footer component
import TestimonialCardComponent from '../components/TestimonialCard';
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
        console.log("Current Section:",currentSectionElement);
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

        projectsBGImage: file(relativePath: { eq: "radek-grzybowski-eBRTYyjwpRY-unsplash.jpg" }) {
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
    }
`);

    const heroBGImage = getImage(data.heroBGImage);
    const projectsBGImage = getImage(data.projectsBGImage);

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
                            <a href="#hero"><li>Home</li></a>
                            <a href="#about"><li>About</li></a>
                            <a href="#projects"><li>Projects</li></a>
                            <a href="#testimonials"><li>Testimonials</li></a>
                            <a href="#contact"><li>Contact</li></a>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero">
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
                <section id="about">
                    <div className="body-container">
                        <div className="body-heading"><h1>About Me</h1></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatibus quasi eius ducimus deleniti rerum quis? Sit est dignissimos, quasi voluptate reiciendis amet minus hic repellat dolore adipisci, velit ipsum.</p>
                    </div>
                </section>
                <section id="projects">
                    <div className="bgImage-container">
                        <BgImage image={projectsBGImage} className="bgImage">&nbsp;</BgImage>
                    </div>
                    <div className="body-container">
                        <div className="body-heading"><h1>Projects</h1></div>
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
                    <div className="body-container">
                        <div className="body-heading"><h1>Testimonials</h1></div>
                        <p>These are some nice things my former colleagues have said about me.</p>
                        <div className="one-column-container flex">
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
                <section id="contact">
                    <div className="body-container">
                        <div className="body-heading"><h1>I'd love to hear from you!</h1></div>
                        <p>Let's make something beautiful together. Leave me a message with a brief summary of what you're looking for, and I'll get in touch to see how best I can help you achieve your vision.</p>
                        {/* Insert Contact Form Here */}
                        <div className="address-block">
                            <p>
                                <b>Shane Crosby</b><br />
                                2 Cortona Grove<br />
                                Sinagra, Western Australia, 6065<br />
                                <b>Phone:</b> +61 407 472 944<br />
                                <b>ABN:</b> 41781010072<br />
                            </p>
                            <ul className='social-icons'>
                                <a href="https://facebook.com/crosbyshane" aria-label="Facebook" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                                <a href="https://twitter.com/crosbyshane" aria-label="Twitter" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faXTwitter} /></li></a>
                                <a href="https://instagram.com/crosbyshane" aria-label="Instagram" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faInstagram} /></li></a>
                                <a href="https://www.youtube.com/@ShaneCrosby" aria-label="Youtube" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faYoutube} /></li></a>
                                <a href="tel:+61407472944" title="+61407472944" aria-label="Telephone" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faPhone} /></li></a>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default IndexPage;
