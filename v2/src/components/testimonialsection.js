// src/components/testimonialsection.js

// react and plugins
import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

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

    const shuffledCards = data.allSanityQuotation.edges.sort(() => 0.5 - Math.random());
    
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