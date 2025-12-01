import { useEffect, useRef } from 'react';
import eventImage from '../assets/images/DSCF0533_copie.jpg';
import './Evenements.css';

const Evenements = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      
      // Calculate parallax effect when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far the section center is from viewport center
        const sectionCenter = rect.top + (rect.height / 2);
        const distanceFromCenter = sectionCenter - windowCenter;
        
        // Parallax effect: image moves at 0.3x the scroll speed
        // This creates a smooth parallax effect
        const parallaxOffset = distanceFromCenter * 0.3;
        imageRef.current.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPrestations = () => {
    const element = document.getElementById('prestations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="evenements section" ref={sectionRef}>
      <div className="container">
        <div className="evenements-container">
          <div className="evenements-content">
            <div className="evenements-text">
              <h2 className="evenements-title">DES ÉVÉNEMENTS<br />SUR MESURE</h2>
              <p>
                Vivez une expérience gastronomique d'exception orchestrée par le Chef Christ DOUKOURÉ et ses équipes.
              </p>
              <p>
                Dans le cadre de votre choix, chaque menu est imaginé pour sublimer vos envies.
              </p>
              <p>
                Un moment privilégié, où la gastronomie se mêle à l'élégance, la générosité et l'émotion.
              </p>
              <button className="evenements-button" onClick={scrollToPrestations}>
                DÉCOUVRIR
              </button>
            </div>
          </div>
          <div className="evenements-image">
            <div className="evenements-image-wrapper">
              <img ref={imageRef} src={eventImage} alt="Préparation culinaire" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evenements;

