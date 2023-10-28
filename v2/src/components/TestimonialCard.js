// src/components/TestimonialCard.js
import React from 'react';

const TestimonialCardComponent = ({ testimonial }) => {

    return (
        <div className="testimonial-card">
            <h2 className='testimonial-name'>{testimonial.name}</h2>
            <p className='testimonial-url'>{testimonial.website}</p>
            <p className='testimonial-text'>{testimonial.content}</p>
        </div>
    );
};

export default TestimonialCardComponent;