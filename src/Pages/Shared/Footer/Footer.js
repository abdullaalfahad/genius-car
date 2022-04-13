import React from 'react';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            <p><small>Copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;