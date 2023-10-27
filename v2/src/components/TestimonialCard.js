// src/components/TestimonialCard.js
import React from 'react';

const TestimonialCardComponent = ({ testimonial }) => {

    return (
        <div className="home-card">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.website}</p>
            <p>{testimonial.content}</p>
        </div>
    );
};

export default TestimonialCardComponent;