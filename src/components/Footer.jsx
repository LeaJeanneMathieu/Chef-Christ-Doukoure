import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <span className="footer-separator">l</span>
            <Link to="/mentions-legales">Mentions légales</Link>
            <span className="footer-separator">l</span>
            <Link to="/politique-cookies">Politique d'utilisation des cookies</Link>
            <span className="footer-separator">l</span>
            <a href="mailto:contact@chefdoukoure.fr">contact@chefdoukoure.fr</a>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="Chef Christ Doukouré" />
          </div>
          <div className="footer-social">
            <span className="footer-social-label">Suivez-nous</span>
            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/christ.doukoure"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@christ.doukoure"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

