import { useEffect, useRef } from 'react';
import eventImage from '../assets/images/DSCF0484_copie.jpg';
import './Evenements.css';

const Evenements = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Animation fade-in à l'apparition
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

  // VRAI effet de parallaxe : l'image se déplace à une vitesse différente
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculer quand la section est visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculer la progression de scroll de la section (0 à 1)
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        
        // L'image se déplace de -20% à +20% de sa hauteur
        // Légèrement plus rapide / prononcé
        const maxMove = 20; // pourcentage
        const yPos = (scrollProgress - 0.5) * maxMove * 2;
        
        imageRef.current.style.transform = `translate3d(0, ${yPos}%, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Appel initial

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
              <h2 className="evenements-title">
                DES ÉVÉNEMENTS<br />SUR MESURE
              </h2>
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
              <img 
                ref={imageRef} 
                src={eventImage} 
                alt="Préparation culinaire" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evenements;