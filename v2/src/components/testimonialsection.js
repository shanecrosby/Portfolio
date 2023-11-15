// src/components/testimonialsection.js

// react and plugins
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import VanillaTilt from 'vanilla-tilt';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

// components
import QuoteCardComponent from '../components/QuoteCard';
import '../components/css/testimonialsection.css';

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
        VanillaTilt.init(document.querySelectorAll(".carousel-container"), {
            max: 5,
            speed: 1000,
            glare: false
        });
    })

    // Slider settings
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="testimonials" name="testimonials">
            <div className="body-container">
                <div className="body-heading"><h1>Testimonials</h1></div>
                <p>I've been fortunate to work with some incredible and lovely people over the years.<br />These are some nice things some of my former colleagues have said about me.</p>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {shuffledCards.map((edge, index) => {
                            const card = edge.node;
                            const cardClass = `quote style-${index % 3 + 1}`;
                            return (
                                <QuoteCardComponent key={card.id} quote={card} additionalClass={cardClass} />
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;