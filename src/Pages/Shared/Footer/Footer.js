import React from 'react';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className='bg-dark py-4'>
            <p className='text-center mb-0 text-white'>Copyright by Abdulla Al Fahad - {year}</p>
        </footer>
    );
};

export default Footer;