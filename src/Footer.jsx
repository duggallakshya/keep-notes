import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer">
               <p>Copyright © {year} Keep App</p>
            </footer>
        </>
    )
}

export default Footer;