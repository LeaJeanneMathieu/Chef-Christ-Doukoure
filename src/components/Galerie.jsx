import { useEffect, useRef } from 'react';
import image1 from '../assets/images/DSCF0386_copie.jpg';
import image2 from '../assets/images/DSCF0396_copie.jpg';
import image3 from '../assets/images/DSCF0468_copie.jpg';
import image4 from '../assets/images/DSCF0469_copie.jpg';
import image5 from '../assets/images/DSCF0484_copie.jpg';
import image6 from '../assets/images/DSCF0533_copie.jpg';
import './Galerie.css';

const Galerie = () => {
  const sectionRef = useRef(null);

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

  const images = [
    { src: image1, type: 'vertical' },
    { src: image2, type: 'vertical' },
    { src: image3, type: 'vertical' },
    { src: image4, type: 'vertical' },
    { src: image5, type: 'vertical' },
    { src: image6, type: 'vertical' }
  ];

  return (
    <section className="galerie section" ref={sectionRef}>
      <div className="container">
        <div className="galerie-grid">
          {images.map((item, index) => (
            <div key={index} className={`galerie-item galerie-item-${item.type}`}>
              <img src={item.src} alt={`Plat ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galerie;

