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
            <h2 className="section-title">DES ÉVÉNEMENTS<br />SUR MESURE</h2>
            <div className="evenements-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="evenements-image">
            <div className="evenements-image-wrapper">
              <img ref={imageRef} src={eventImage} alt="Préparation culinaire" />
            </div>
            <button className="evenements-button" onClick={scrollToPrestations}>
              DÉCOUVRIR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evenements;

