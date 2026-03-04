import { useEffect, useRef, useState } from 'react';
import menu1 from '../../assets/Menus/Decouverte-entree.JPG';
import menu2 from '../../assets/Menus/Decouverte-plat.JPG';
import menu3 from '../../assets/Menus/Decouverte-dessert.JPG';
import menu4 from '../../assets/Menus/Romantique-entree.JPG';
import menu5 from '../../assets/Menus/Romantique-plat.JPG';
import menu6 from '../../assets/Menus/Romantique-dessert.JPG';
import image1 from '../assets/images/DSCF0386_copie.jpg';
import image2 from '../assets/images/DSCF0396_copie.jpg';
import image3 from '../assets/images/DSCF0468_copie.jpg';
import image4 from '../assets/images/DSCF0469_copie.jpg';
import image5 from '../assets/images/DSCF0484_copie.jpg';
import image6 from '../assets/images/DSCF0533_copie.jpg';
import './Galerie.css';

const Galerie = () => {
  const sectionRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  // Mix de photos de menus et de photos ambiance
  // On utilise uniquement les versions plus légères des photos de menus pour améliorer le chargement
  const images = [menu1, image1, menu2, image2, menu3, image3, menu4, image4];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const total = images.length;
      return (prev - 1 + total) % total;
    });
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const total = images.length;
      return (prev + 1) % total;
    });
  };

  return (
    <section className="galerie section" ref={sectionRef}>
      <div className="container">
        <div className="galerie-grid">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              className="galerie-item"
              onClick={() => openLightbox(index)}
              aria-label={`Agrandir la photo ${index + 1}`}
            >
              <img src={src} alt={`Plat ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div className="galerie-lightbox" onClick={closeLightbox}>
            <div
              className="galerie-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="galerie-lightbox-close"
                onClick={closeLightbox}
                aria-label="Fermer"
              >
                ×
              </button>
              <div className="galerie-lightbox-slider">
                <button
                  type="button"
                  className="galerie-lightbox-arrow galerie-lightbox-arrow-left"
                  onClick={showPrevImage}
                  aria-label="Image précédente"
                >
                  ‹
                </button>
                <div className="galerie-lightbox-placeholder">
                  <img
                    src={images[lightboxIndex]}
                    alt={`Photo ${lightboxIndex + 1} de la galerie`}
                    className="galerie-lightbox-image"
                  />
                </div>
                <button
                  type="button"
                  className="galerie-lightbox-arrow galerie-lightbox-arrow-right"
                  onClick={showNextImage}
                  aria-label="Image suivante"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galerie;

