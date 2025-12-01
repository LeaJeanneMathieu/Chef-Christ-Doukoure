import { useEffect, useRef } from 'react';
import heroImage from '../assets/images/DSCF0386_copie.jpg';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-image">
          <img src={heroImage} alt="Chef en cuisine" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title-1">CHEF</h1>
          <h2 className="hero-title-2">CHRIST DOUKOURÉ</h2>
          <p className="hero-subtitle">Cuisine & passion</p>
          <button className="hero-button" onClick={scrollToContact}>
            RÉSERVER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

