//src/pages/404.js
import React, { useEffect, useState } from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";


const NotFoundPage = () => {
    //Handle the light/dark mode switching
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        document.body.classList.toggle('light-mode', !darkMode);
        console.log("Dark mode:",darkMode);
    }, [darkMode]);
    const changeMode = () => setDarkMode(prevMode => !prevMode);

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
            }
    `);
    const notfoundBGImage = getImage(data.heroBGImage);

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
        </div>
        </header>
        <main>
        <section id="hero" name="hero">
            <div className="hero-bgImage-container">
                <BgImage image={notfoundBGImage} className="hero-bgImage">&nbsp;</BgImage>
            </div>
            <div className='hero main-heading'>
                <h1 className='main-heading'>Page not found</h1>
            </div>
            <div className='intro-container'>
                <p className='intro-p'>Sorry, It appears the page you're looking for doesn't exist.<br />
                    This site only contains a single page so goodness knows how you ended up here!<br />
                    <FontAwesomeIcon icon={faArrowRight} /><Link to="/"><strong>This</strong></Link> is where you want to go.
                </p>
            </div>
        </section>
        </main>
        <footer>
            <div className="footer-container">
                <div className="footer-bar">
                        <p>&copy; 2023 Shane Crosby. All Rights Reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link></p>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default NotFoundPage

export const Head = () => <title>Page Not found</title>
