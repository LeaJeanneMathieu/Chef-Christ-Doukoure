import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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

  const handleDiscoverMenu = () => {
    navigate('/menu');
  };

  return (
    <section id="menu" className="menu section" ref={sectionRef}>
      <div className="container">
        <div className="menu-container">
          <div className="menu-title-section">
            <h2 className="section-title">LE MENU</h2>
          </div>
          <div className="menu-content">
            <div className="menu-text">
              <p>
                Le Chef Christ DOUKOURÉ vous invite à découvrir une sélection d'entrées, de plats et de desserts, 
                soigneusement imaginés pour exalter chaque instant de votre repas.
              </p>
              <p>
                La moindre de ses créations met à l'honneur des produits de saison et un savoir-faire inspiré 
                des plus grandes cuisines françaises.
              </p>
            </div>
            <a className="menu-link" onClick={(e) => { e.preventDefault(); handleDiscoverMenu(); }}>
              DÉCOUVREZ LE MENU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
