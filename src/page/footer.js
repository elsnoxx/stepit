import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        © <span id="currentYear">{currentYear}</span> Copyright:
        <a className="footer-link" href="/contact.html"> Richard Ficek</a>
      </div>
    </footer>
  );
};

export default Footer;
