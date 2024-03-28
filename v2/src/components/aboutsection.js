// src/components/aboutsection.js

// react and plugins
import React, { useEffect} from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import VanillaTilt from 'vanilla-tilt';

import '../components/css/aboutsection.css';

const AboutSection = ({ darkMode }) => {

    //aboutBGImageDark: file(relativePath: { eq: "eddie-bugajewski-VDoqMNZdRJQ-unsplash.jpg" }) {
    const data = useStaticQuery(graphql`
        query {
            aboutBGImageDark: file(relativePath: { eq: "panoramic-3107895.jpg" }) {
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
            aboutBGImageLight: file(relativePath: { eq: "elizabeth-quay-7291475.jpg" }) {
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

            shanePortrait: file(relativePath: { eq: "ShaneCrosbyPhoto.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 200,
                        quality: 100,
                        placeholder: BLURRED, 
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    `);

    const aboutBGImageDark = getImage(data.aboutBGImageDark);
    const aboutBGImageLight = getImage(data.aboutBGImageLight);
    const shanePortraitImg = getImage(data.shanePortrait);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


    // Fancy tilt card effect
    useEffect(() => {
        if (!isSafari) {
            VanillaTilt.init(document.querySelectorAll(".bio-image"), {
                max: 20,
                perspective: 2000,
                speed: 1000,
                glare: true,
                'max-glare': 0.20,
                gyroscope: true
            });
        }
    })

    return (
        <section id="about" name="about">
            <div className="bg-Image-container">
                <BgImage image={darkMode ? aboutBGImageDark : aboutBGImageLight} className='bgImage' alt='' >&nbsp;</BgImage>
            </div>
            <div className="body-container">
                <div className="body-heading"><h1>Who am I?</h1></div>
                <div className="spacer"><GatsbyImage image={shanePortraitImg} className='bio-image' alt='Portait of Shane Crosby' /></div>
                <div className="text-bg">
                    <div className="body-text">
                    <p>Hi there! I'm a Perth native with a lifelong passion for technology and creativity. My journey in the IT world has spanned over 18 years, where I honed my skills in user support and systems administration, however the allure of web design, a spark ignited during my school days dabbling in basic HTML, never faded. It's this passion that led me to fully embrace web development in 2023.</p>
                    <p>Today, I blend my technical expertise in Javascript (React, Gatsby, ThreeJS), HTML5, CSS, and various web platforms with a love for elegant design. Whether you're building a business or a community, I'm here to craft a website that's not just functional, but also a joy to use and explore. My focus? Creating sites that resonate with users, thanks to my eye for typography and detail.</p>
                    <p>Outside of work, I'm actively involved in <a href="https://wasda.au">WASDA</a> (WA Social Dancers Association) - a smooth-jive social dance club. I also love spending time with my extended family.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;