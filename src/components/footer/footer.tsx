import React from "react";
import "./Footer.css"; // Archivo CSS para los estilos

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <div className="footer__section">
          <h4>Support</h4>
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer__section">
          <h4>Follow Us</h4>
          <div className="footer__social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;