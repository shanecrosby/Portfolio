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

    // Fancy tilt card effect
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".bio-image"), {
            max: 20,
            perspective: 2000,
            speed: 1000,
            glare: true,
            'max-glare': 0.20,
            gyroscope: true
        });
    })

    return (
        <section id="about" name="about">
            <div className="bg-Image-container">
                <BgImage image={darkMode ? aboutBGImageDark : aboutBGImageLight} className='bgImage'>&nbsp;</BgImage>
            </div>
            <div className="body-container">
                <div className="body-heading"><h1>Who am I?</h1></div>
                <div className="spacer"><GatsbyImage image={shanePortraitImg} className='bio-image' /></div>
                <div className="text-bg">
                    <div className="body-text">
                        <p>I was born and raised in Perth, Western Australia.</p>
                        <p>Having devoted over 18 years to a career in the IT service industry, where my primary focus was user support and systems administration, my fascination with web design has always simmered beneath the surface. From as far back as my primary school days of the late 90s when I was first introduced to rudimentary HTML coding, this casual interest has slowly grown through occasional projects within the various client organisations I worked with in my previous role, culminating in a full-fledged dive into front-end web development in 2023.</p>
                        <p>Armed with a robust skill set in Javascript (React, Gatsby, ThreeJS), HTML5, CSS, and platforms like WordPress, Squarespace, and Wix, I am ready to help you build your business or social organisation with a well-designed and functional website. My passion for refined typography and meticulous attention to detail are the fine threads that sew together engaging and user-centric web experiences.</p>
                        <p>In my spare time I help run the <a href="https://wasda.au">Western Australia Social Dancers Association (WASDA)</a> - a smooth-jive social dance club. I also love spending time with my three adorable nephews.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;