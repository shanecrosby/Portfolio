// src/components/QuoteCard.js
import React from 'react';
import './css/quotecard.css';

const QuoteCardComponent = ({ quote }) => {

    return (
        <div className="quote-card">
            <p className='quote-text'>"{quote.quote}"</p>
            <h2 className='quote-name'>{quote.name}</h2>
            <p className='quote-company'>{quote.company}</p>
        </div>
    );
};

export default QuoteCardComponent;