import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MenuPage.css';
import decouverteEntree from '../../assets/Menus/Decouverte-entree.JPG';
import decouvertePlat from '../../assets/Menus/Decouverte-plat.JPG';
import decouverteDessert from '../../assets/Menus/Decouverte-dessert.JPG';
import romantiqueEntree from '../../assets/Menus/Romantique-entree.JPG';
import romantiquePlat from '../../assets/Menus/Romantique-plat.JPG';
import romantiqueDessert from '../../assets/Menus/Romantique-dessert.JPG';

const menusImages = {
  'menu-decouverte': [decouverteEntree, decouvertePlat, decouverteDessert],
  'diner-romantique': [romantiqueEntree, romantiquePlat, romantiqueDessert],
};

const MenuPage = () => {
  const [lightbox, setLightbox] = useState({ menuId: null, index: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const touchStartXRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const openLightbox = (menuId, startIndex = 0) => {
    setLightbox({ menuId, index: startIndex });
  };

  const closeLightbox = () => {
    setLightbox({ menuId: null, index: 0 });
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    if (isMobile) return;
    setLightbox((prev) => {
      if (!prev.menuId) return prev;
      const images = menusImages[prev.menuId] || [];
      const total = images.length;
      if (!total) return prev;
      const newIndex = (prev.index - 1 + total) % total;
      return { ...prev, index: newIndex };
    });
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    if (isMobile) return;
    setLightbox((prev) => {
      if (!prev.menuId) return prev;
      const images = menusImages[prev.menuId] || [];
      const total = images.length;
      if (!total) return prev;
      const newIndex = (prev.index + 1) % total;
      return { ...prev, index: newIndex };
    });
  };

  const goToPrevImage = () => {
    if (isMobile) return;
    setLightbox((prev) => {
      if (!prev.menuId) return prev;
      const images = menusImages[prev.menuId] || [];
      const total = images.length;
      if (!total) return prev;
      const newIndex = (prev.index - 1 + total) % total;
      return { ...prev, index: newIndex };
    });
  };

  const goToNextImage = () => {
    if (isMobile) return;
    setLightbox((prev) => {
      if (!prev.menuId) return prev;
      const images = menusImages[prev.menuId] || [];
      const total = images.length;
      if (!total) return prev;
      const newIndex = (prev.index + 1) % total;
      return { ...prev, index: newIndex };
    });
  };

  const handleTouchStart = (e) => {
    if (isMobile) return;
    if (!e.touches || e.touches.length === 0) return;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (isMobile) return;
    if (touchStartXRef.current === null) return;
    if (!e.changedTouches || e.changedTouches.length === 0) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartXRef.current;

    const SWIPE_THRESHOLD = 40;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        // swipe gauche -> image suivante
        goToNextImage();
      } else {
        // swipe droite -> image précédente
        goToPrevImage();
      }
    }

    touchStartXRef.current = null;
  };

  const allImagesForLightbox = lightbox.menuId ? menusImages[lightbox.menuId] || [] : [];
  const lightboxSingleImage = allImagesForLightbox[lightbox.index] || null;
  const currentImages = isMobile && lightboxSingleImage ? [lightboxSingleImage] : allImagesForLightbox;
  const currentIndex = isMobile ? 0 : lightbox.index;
  const currentImage = currentImages[currentIndex] || null;

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
              className="menu-photo-placeholder menu-photo-placeholder-top"
              role="button"
              tabIndex={0}
              onClick={() => openLightbox('menu-decouverte', 0)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox('menu-decouverte', 0)}
              aria-label="Agrandir les photos du Menu du Chef – Découverte"
            >
              <img
                src={decouverteEntree}
                alt="Entrée du Menu du Chef – Découverte"
                className="menu-photo-thumbnail"
              />
            </div>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div
                  className="menu-photo-placeholder menu-photo-placeholder-category"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox('menu-decouverte', 0)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox('menu-decouverte', 0)}
                  aria-label="Agrandir la photo de l'entrée du Menu du Chef – Découverte"
                >
                  <img
                    src={decouverteEntree}
                    alt="Entrée du Menu du Chef – Découverte"
                    className="menu-photo-thumbnail"
                  />
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Ceviche de thon gombo kiwi concombres piment</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div
                  className="menu-photo-placeholder menu-photo-placeholder-category"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox('menu-decouverte', 1)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox('menu-decouverte', 1)}
                  aria-label="Agrandir la photo du plat du Menu du Chef – Découverte"
                >
                  <img
                    src={decouvertePlat}
                    alt="Plat du Menu du Chef – Découverte"
                    className="menu-photo-thumbnail"
                  />
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Souris d’agneau 6h jus d’agneau écrasé de purée plantains</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div
                  className="menu-photo-placeholder menu-photo-placeholder-category"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox('menu-decouverte', 2)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox('menu-decouverte', 2)}
                  aria-label="Agrandir la photo du dessert du Menu du Chef – Découverte"
                >
                  <img
                    src={decouverteDessert}
                    alt="Dessert du Menu du Chef – Découverte"
                    className="menu-photo-thumbnail"
                  />
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Carpaccio de mangue condiment gingembre grenade glace lait d’amandes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h2 className="menu-section-title">Dîner Romantique</h2>
            <div
              className="menu-photo-placeholder menu-photo-placeholder-top"
              role="button"
              tabIndex={0}
              onClick={() => openLightbox('diner-romantique', 0)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox('diner-romantique', 0)}
              aria-label="Agrandir les photos du Dîner Romantique"
            >
              <img
                src={romantiqueEntree}
                alt="Entrée du Dîner Romantique"
                className="menu-photo-thumbnail"
              />
            </div>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div
                  className="menu-photo-placeholder menu-photo-placeholder-category"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox('diner-romantique', 0)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox('diner-romantique', 0)}
                  aria-label="Agrandir la photo de l'entrée du Dîner Romantique"
                >
                  <img
                    src={romantiqueEntree}
                    alt="Entrée du Dîner Romantique"
                    className="menu-photo-thumbnail"
                  />
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Croustillant de gambas culis de betterave réduit œuf de truite</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div
                  className="menu-photo-placeholder menu-photo-placeholder-category"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox('diner-romantique', 1)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox('diner-romantique', 1)}
                  aria-label="Agrandir la photo du plat du Dîner Romantique"
                >
                  <img
                    src={romantiquePlat}
                    alt="Plat du Dîner Romantique"
                    className="menu-photo-thumbnail"
                  />
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Magret de canard rosée purée de patates douce jus réduit aux épices</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div
                  className="menu-photo-placeholder menu-photo-placeholder-category"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox('diner-romantique', 2)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox('diner-romantique', 2)}
                  aria-label="Agrandir la photo du dessert du Dîner Romantique"
                >
                  <img
                    src={romantiqueDessert}
                    alt="Dessert du Dîner Romantique"
                    className="menu-photo-thumbnail"
                  />
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Pavlova déstructurée aux fruits rouges chantilly à l’eau de rose</p>
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
                <div className="menu-lightbox-slider">
                  <button
                    type="button"
                    className="menu-lightbox-arrow menu-lightbox-arrow-left"
                    onClick={showPrevImage}
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                  <div
                    className="menu-lightbox-placeholder"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <button
                      type="button"
                      className="menu-lightbox-close"
                      onClick={closeLightbox}
                      aria-label="Fermer"
                    >
                      ×
                    </button>
                    {currentImage && (
                      <img
                        src={currentImage}
                        alt={`Photo ${currentIndex + 1} du ${
                          lightbox.menuId === 'menu-decouverte'
                            ? 'Menu du Chef – Découverte'
                            : 'Dîner Romantique'
                        }`}
                        className="menu-lightbox-image"
                      />
                    )}
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

