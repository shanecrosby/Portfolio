// src/components/projectsection.js

// react and plugins
import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from 'gatsby-plugin-image';
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
                                    placeholder: BLURRED
                                    width: 2000
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                        caption
                    }
                }
            }
        }
    `);

    return (
        <section id="projects" name="projects">
            <div className="bg-Image-container">
                { /* Background Image from Sanity */
                    data.allSanityWebsite.edges.map(edge => {
                        const card = edge.node;
                        const bgImage = getImage(card.thumbnail.asset)
                        return <BgImage key={card.id} image={bgImage} className="bgImage">&nbsp;</BgImage>
                    })
                }
            </div>
            <div className="body-container">
                <div className="body-heading text-bg"><h1>Projects</h1></div>
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