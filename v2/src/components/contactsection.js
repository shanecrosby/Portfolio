// src/components/contactsection.js

// react and plugins
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import '../components/css/contactsection.css';

const ContactSection = () => {
    // Handle e-mail submission
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
            const submitButton = document.getElementById('submitbutton');
            submitButton.disabled = 'true';
            submitButton.classList.add('hidden');
        } else {
            console.log(serverState);
        }
    };
    const handleOnSubmit = e => {
        const messageBox = document.getElementById('confirmation-msg');
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/8e95c4a8-9cd7-4a65-946d-b99389db0339",
            data: new FormData(form)
        })
        .then(r => {
            handleServerResponse(true, "Thanks!", form);
            messageBox.classList.remove('hidden');
        })
        .catch(r => {
            console.log(r)
            messageBox.classList.remove('hidden');
            messageBox.innerText = "Something went wrong. Please refresh the page and try again. Don't forget to tick the box."
            messageBox.style.color = 'Red';
            //handleServerResponse(false, r.response.data.error, form);
        });
    };

    const enableSubmit = () => {
        const submitButton = document.querySelector("#contact-form button[type='submit']");
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('hidden');
    };


    return (
        <section id="contact" name="contact">
            <div className="body-container">
                <div className="body-heading"><h1>I'd love to hear from you!</h1></div>
                <div className="body-text">
                    <p>Let's make something beautiful together.<br />Leave me a message with a brief summary of what you're looking for, and I'll get in touch to see how best I can help you achieve your vision.</p>
                </div>
                <div className="form-container">
                    <form id="contact-form" onSubmit={handleOnSubmit}>
                        <div className='two-column-grid'>
                            <label htmlFor='name' className='grid-column-one'>My name is </label>
                            <input type="text" name="name" id="name" aria-required='true' placeholder='John Smith' />
                            <label htmlFor='company' className='grid-column-one'>I work for (optional)</label>
                            <input type="text" name="company" id="company" aria-required='true' placeholder='John Smith Enterprises' />
                            <label htmlFor='email' className='grid-column-one'>You can reach me at </label>
                            <input type="email" name="email" id="email" aria-required='true' placeholder='john@jse.com'/>
                            <input type="text" name="subject" id="subject" content="Website Form Submission" hidden />
                            {/* add hidden Honeypot input to prevent spam */}
                            <input type="hidden" name="_gotcha" className='hidden' />
                            <label htmlFor='message' className='grid-column-one'>Message </label>
                            <textarea name="message" id="message" rows="5" maxLength="500" aria-required="true" />
                        </div>
                        <div className="form-buttons">
                            <button id='submitbutton' type="submit" className='grid-column-one hidden' disabled>Send</button><input type="reset" value="Clear"/>
                        </div>
                        <ReCAPTCHA className="g-recaptcha" sitekey="6Lf1dAcTAAAAAEbFBDmhsy5QG9T0ICk-R-O-WMVK" onChange={enableSubmit} />
                        <div id="confirmation-msg" className="hidden">Message received. Thanks!</div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;