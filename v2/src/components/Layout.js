// src/components/Layout.js
import React from 'react';
import Header from './Header'; // Import your header component
import Footer from './Footer'; // Import your footer component

const Layout = ({ children }) => {
    return (
        <div id="page-container">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;