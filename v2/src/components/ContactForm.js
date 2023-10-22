// src/components/ContactForm.js
import React, { useState } from 'react';
import '../css/inputforms.css';

const FormComponent = () => {
    const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //todo: save formData to a JSON file for later use.
        console.log("Form submitted:", formData);
};

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row-parent">
            <div className="row-1">
                <div className="form-name">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="form-input form-name form-requiredField"
                        name="name"
                        maxLength="32"
                        id="form-name"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-email">
                    <input
                        type="email"
                        placeholder="e-mail address"
                        className="form-input form-email form-requiredField"
                        name="email"
                        maxLength="32"
                        id="form-email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row-2">
                <textarea 
                    type="text"
                    placeholder="Comment"
                    className="form-textarea form-comment"
                    name="comment"
                    maxLength="500"
                    id="form-comment"
                    required
                    aria-required="true"
                    value={formData.comment}
                    onChange={handleChange}
                />
            </div>
            <div className='row-3'><button type="submit" className="button-link">Submit</button></div>
        </div>
        </form>
    );
};

export default FormComponent;