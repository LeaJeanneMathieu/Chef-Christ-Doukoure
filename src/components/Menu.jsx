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
                Le Chef Christ Doukouré vous invite à découvrir une cuisine raffinée où chaque plat est imaginé pour éveiller les
                sens et sublimer votre moment à table.
              </p>
              <p>
                À travers des produits de saison soigneusement sélectionnés, il propose une cuisine inspirée de la gastronomie
                française, enrichie par les influences de ses origines et par sa créativité.
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
