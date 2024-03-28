// src/components/testimonialsection.js

// react and plugins
import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import VanillaTilt from 'vanilla-tilt';

// components
import PackageCardComponent from '../components/packagecard';
import '../components/css/packagesection.css';

const PackagesSection = ({ darkMode }) => {
    
    const data = useStaticQuery(graphql`
        query {
            packageBGImageDark: file(relativePath: { eq: "christian-wiediger-WkfDrhxDMC8-unsplash.jpg" }) {
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

            packageBGImageLight: file(relativePath: { eq: "christopher-gower-m_HRfLhgABo-unsplash.jpg" }) {
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

            allSanityPackages(sort: {price: ASC}) {
                edges {
                    node {
                        id
                        package
                        price
                        _rawDescriptor(resolveReferences: { maxDepth: 5 })
                    }
                }
            }
        }
    `);

    const packageBGImageDark = getImage(data.packageBGImageDark);
    const packageBGImageLight = getImage(data.packageBGImageLight);
    
    // Fancy tilt card effect
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    useEffect(() => {
        if(!isSafari) {
            const cards = document.querySelectorAll(".package-card");
            if (cards.length) {
                VanillaTilt.init(cards, {
                    max: 5,
                    speed: 1000,
                    glare: true,
                    "max-glare": 0.5,
                });
            }
        }
    })

    return (
        <section id="packages" name="packages">
            <div className="pkg-bgImage-container">
                <BgImage image={darkMode ? packageBGImageDark : packageBGImageLight} className='pkgBgImage'>
                <div className="body-container">
                    <div className="body-heading"><h1>Web Design Packages</h1></div>
                    <p>I offer three web design packages to cater for projects of all sizes.</p>
                    <div className="package-container">
                        {data.allSanityPackages.edges.map((edge, index) => {
                            const card = edge.node;
                            return (
                                <PackageCardComponent key={card.id} webpackage={card} />
                            );
                        })}
                    </div>
                </div>
                </BgImage>
            </div>
        </section>
    );
};

export default PackagesSection;