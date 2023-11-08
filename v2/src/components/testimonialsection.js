// src/components/testimonialsection.js

// react and plugins
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import VanillaTilt from 'vanilla-tilt';

// components
import QuoteCardComponent from '../components/QuoteCard';

const TestimonialSection = () => {

    const data = useStaticQuery(graphql`
        query {
            allSanityQuotation {
                edges {
                    node {
                        id
                        name
                        company
                        _rawQuote(resolveReferences: { maxDepth: 5 })
                    }
                }
            }
        }
    `);
    
    // Need to store the shuffled quotes in their own state so they don't change every time the menu is interacted with
    const [shuffledCards, setShuffledCards] = useState([]);

    // Shuffle once on component mount
    useEffect(() => {
        setShuffledCards(data.allSanityQuotation.edges.sort(() => 0.5 - Math.random()))
    }, [data.allSanityQuotation.edges]);

    // Fancy tilt card effect
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".quote-card"), {
            max: 5,
            speed: 1000,
            glare: true,
            'max-glare': 0.50,
            gyroscope: true
        });
    })
    
    return (
        <section id="testimonials" name="testimonials">
            <div className="body-container">
                <div className="body-heading"><h1>Testimonials</h1></div>
                <p>I've been fortunate to work with some incredible and lovely people over the years.<br />These are some nice things some of my former colleagues have said about me.</p>
                <div className="one-column-flex">
                    <div className="three-columns">
                        {/* Quote site card component */
                            shuffledCards.map(edge => {
                                const card = edge.node;
                                return <QuoteCardComponent key={card.id} quote={card} />;
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;