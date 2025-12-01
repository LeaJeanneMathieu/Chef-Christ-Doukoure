import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <span className="footer-separator">l</span>
            <a href="/mentions-legales">Mentions légales</a>
            <span className="footer-separator">l</span>
            <a href="/politique-cookies">Politique d'utilisation des cookies</a>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="Chef Christ Doukouré" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

