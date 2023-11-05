//src/pages/index.js
// react and plugins
import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars, faArrowDown, faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink, animateScroll as scroll, Events, scrollSpy } from 'react-scroll';
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
                <section id="about" name="about">
                    <div className="body-container">
                        <div className="body-heading"><h1>About Me</h1></div>
                        <div className="body-text">
                            <p>Having devoted over 18 years to a career in IT, where my primary focus was user support and systems administration, my fascination with web design has always simmered beneath the surface. From as far back as my primary school days of the late 90s when I was first introduced to rudimentary HTML coding, this casual interest has slowly grown through occasional projects within the various client organisations I worked with in my previous role, culminating in a full-fledged dive into front-end web development in 2023.</p>
                            <p>Armed with a robust skill set in Javascript (React, Gatsby, ThreeJS), HTML5, CSS, and platforms like WordPress, Squarespace, and Wix, I am ready to help you build your business with a well-designed and functional website. My passion for refined typography and meticulous attention to detail are the fine threads that sew together engaging and user-centric web experiences.</p>
                        </div>
                    </div>
                </section>
                <section id="projects" name="projects">
                    <div className="bgImage-container">
                        <BgImage image={projectsBGImage} className="bgImage">&nbsp;</BgImage>
                    </div>
                    <div className="body-container">
                        <div className="body-heading heading-bg"><h1>Projects</h1></div>
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
                <section id="testimonials" name="testimonials">
                    <div className="body-container">
                        <div className="body-heading"><h1>Testimonials</h1></div>
                        <p>These are some nice things my former colleagues have said about me.</p>
                        <div className="one-column-flex">
                            <div className="three-columns">
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
                <section id="contact" name="contact">
                    <div className="body-container">
                        <div className="body-heading"><h1>I'd love to hear from you!</h1></div>
                        <div className="body-text">
                            <p>Let's make something beautiful together. Leave me a message with a brief summary of what you're looking for, and I'll get in touch to see how best I can help you achieve your vision.</p>
                        </div>
                        <div className="form-container">
                            <form method="post" action="#" id="contact-form">
                                <div className='two-column-grid'>
                                    <label for='name' className='grid-column-one'>My name is </label>
                                    <input type="text" name="name" id="name" aria-label='name' placeholder='John Doe' />
                                    <label for='email' className='grid-column-one'>You can reach me at </label>
                                    <input type="email" name="email" aria-label='email'id="email" placeholder='john@mybusiness.com'/>
                                    <input type="text" name="subject" id="subject" content="Website Form Submission" hidden />
                                    <label for='message' className='grid-column-one'>Message </label>
                                    <textarea name="message" id="message" rows="5" aria-label='message'/>
                                </div>
                                <button type="submit" className='grid-column-one'>Send</button><input type="reset" value="Clear"/>
                            </form>
                        </div>
                        <div className='one-column-flex'>
                            <div className="address-block">
                                <p>
                                    <b>Shane Crosby</b><br />
                                    <span className="smaller">2 Cortona Grove,<br />
                                    Sinagra, Western Australia, 6065<br /></span>
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default IndexPage;
