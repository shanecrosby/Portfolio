//src/pages/index.js

import React from 'react';
import Layout from '../components/layout'; // Import the layout component
import TestimonialCardComponent from '../components/TestimonialCard'
import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { Link } from "gatsby"


const IndexPage = () => {
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
    }
`);

    return (
        <Layout>
                <section id="hero">
                    <div className='hero'>
                        {/* Hero slideshow */}
                        <h1 className='main-heading'>Shane Crosby - Web Designer</h1>
                    </div>
                    <div className='intro-container'>
                        <p className='intro-p'>My name is Shane and I make websites.</p>
                    </div>
                </section>
                <section id="portfolio">
                    <div className="body-section">
                        <p className='body-text'>Here are some sites I've created.</p>
                        {/* Portfolio site card component */}
                        <ul>
                            <li>Tonia Bovell - It's Your Day</li>
                            <li>BrushQuest</li>
                            <li>Bella Bakes, Bakery and Patisserie (Sample site)</li>
                            <li>InkWell Stationers (Sample Site)</li>
                        </ul>
                    </div>
                </section>
                <section id="testimonials">
                    <div className="body-section">
                        <p className="body-text">
                            These are some nice things people have said about me.
                        </p>
                        {data.allSanityTestimonial.edges.map(edge => {
                            const card = edge.node;
                            return <TestimonialCardComponent key={card.id} testimonial={card} />;
                        })}
                    </div>
                </section>
        </Layout>
    );
};

export default IndexPage;
