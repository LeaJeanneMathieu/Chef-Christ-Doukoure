import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MenuPage.css';

const MenuPage = () => {
  const [lightbox, setLightbox] = useState({ menuId: null, index: 0 });

  const openLightbox = (menuId) => {
    setLightbox({ menuId, index: 0 });
  };

  const closeLightbox = () => {
    setLightbox({ menuId: null, index: 0 });
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({ ...prev, index: 0 }));
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({ ...prev, index: 1 }));
  };

  return (
    <div className="menu-page">
      <Header />
      <div className="menu-page-content">
        <div className="container">
          <h1 className="menu-page-title">LE MENU</h1>
          <p className="menu-page-intro">
            Le Chef Christ DOUKOURÉ vous invite à découvrir une sélection d'entrées, de plats et de desserts, 
            soigneusement imaginés pour exalter chaque instant de votre repas.
          </p>
          <div className="menu-section">
            <h2 className="menu-section-title">Menu du Chef – Découverte</h2>
            <div
              className="menu-photo-placeholder"
              role="button"
              tabIndex={0}
              onClick={() => openLightbox('diner-romantique')}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox('diner-romantique')}
              aria-label="Agrandir la photo du menu"
            >
              <span className="menu-photo-placeholder-label">Photo à venir</span>
            </div>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Ceviche de thon, gombo, kiwi et concombre</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Souris d’agneau confite 6 h, jus d’agneau, purée de plantain</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Carpaccio de mangue ivoirienne, confit de gingembre, nuage de lait d’amande</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2 className="menu-section-title">Dîner Romantique</h2>
            <div
              className="menu-photo-placeholder"
              role="button"
              tabIndex={0}
              onClick={() => openLightbox('menu-decouverte')}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox('menu-decouverte')}
              aria-label="Agrandir la photo du menu"
            >
              <span className="menu-photo-placeholder-label">Photo à venir</span>
            </div>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Gambas en friture, tartare de betterave</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Magret de canard, purée de patates douces, jus de viande miellé</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Éclat de pavlova à l’eau de rose, fruits rouges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {lightbox.menuId && (
            <div className="menu-lightbox" onClick={closeLightbox}>
              <div
                className="menu-lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="menu-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Fermer"
                >
                  ×
                </button>
                <div className="menu-lightbox-slider">
                  <button
                    type="button"
                    className="menu-lightbox-arrow menu-lightbox-arrow-left"
                    onClick={showPrevImage}
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                  <div className="menu-lightbox-placeholder">
                    <span className="menu-lightbox-placeholder-label">
                      Image {lightbox.index + 1} à venir
                    </span>
                  </div>
                  <button
                    type="button"
                    className="menu-lightbox-arrow menu-lightbox-arrow-right"
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
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;

