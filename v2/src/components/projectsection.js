// src/components/projectsection.js

// react and plugins
import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BgImage } from "gbimage-bridge";

// components
import SiteCardComponent from '../components/sitecard';
import TestimonialCardComponent from '../components/TestimonialCard';

const ProjectSection = () => {

    const data = useStaticQuery(graphql`
        query {
            allSanityTestimonial {
                edges {
                    node {
                        id
                        name
                        website
                        content
                    }
                }
            }
            
            allSanityWebsite {
                edges {
                    node {
                        id
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
        }
    `);
    
    const projectsBGImage = getImage(data.projectsBGImage);

    return (
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
    );
};

export default ProjectSection;