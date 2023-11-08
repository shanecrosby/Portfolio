// src/components/QuoteCard.js
import React from 'react';
import BlockContent from '@sanity/block-content-to-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const QuoteCardComponent = ({ quote }) => {

    return (
        <div className="quote-card">
            <div className="quote-inner">
                <div className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} className='left' />
                    <BlockContent blocks={quote._rawQuote} className='block-content' />
                    <FontAwesomeIcon icon={faQuoteRight} className='right'/>
                </div>
                <div className="attribution">
                    <h2 className='quote-name'>{quote.name}</h2>
                    <p className='quote-company'>{quote.company}</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteCardComponent;