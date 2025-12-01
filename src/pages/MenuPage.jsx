import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MenuPage.css';

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-page">
      <Header />
      <div className="menu-page-content">
        <div className="container">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Retour
          </button>
          <h1 className="menu-page-title">LE MENU</h1>
          <p className="menu-page-intro">
            Le Chef Christ DOUKOURÉ vous invite à découvrir une sélection d'entrées, de plats et de desserts, 
            soigneusement imaginés pour exalter chaque instant de votre repas.
          </p>
          
          {/* Dîner Romantique */}
          <div className="menu-section">
            <h2 className="menu-section-title">Dîner Romantique</h2>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Gambas en friture, sauce tartare</p>
                  </div>
                  <p className="menu-variant">(variante possible) Velouté de potimarron aux moules</p>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Souris d'agneau</p>
                  </div>
                  <div className="menu-item">
                    <p className="menu-item-text">Gratin dauphinois</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Pavlova aux fruits rouges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Découverte */}
          <div className="menu-section">
            <h2 className="menu-section-title">Menu Découverte</h2>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Velouté de potimarron aux moules</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Suprême de volaille</p>
                  </div>
                  <div className="menu-item">
                    <p className="menu-item-text">Purée de pommes de terre ratte, crème boursin</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Brioche perdue</p>
                  </div>
                  <div className="menu-item">
                    <p className="menu-item-text">Caramel beurre salé, crème anglaise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Le Menu du Chef – 5 Plats */}
          <div className="menu-section">
            <h2 className="menu-section-title">Le Menu du Chef – 5 Plats</h2>
            <div className="menu-columns">
              <div className="menu-column">
                <h3 className="menu-column-title">ENTREES</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">1. Céviche de daurade</p>
                    <p className="menu-item-details">Passion • Mangue • Citron • Coriandre</p>
                  </div>
                  <div className="menu-item">
                    <p className="menu-item-text">2. Saumon "Violet GelMax 24h"</p>
                    <p className="menu-variant">ou</p>
                    <p className="menu-item-text">Carpaccio de Saint-Jacques aux agrumes</p>
                  </div>
                  <div className="menu-item">
                    <p className="menu-item-text">3. Ravioli de Saint-Jacques, agrumes</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">PLATS</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Magret de canard</p>
                    <p className="menu-item-details">Purée de patate douce, jus de viande miellé, betterave, figue</p>
                    <p className="menu-variant">ou</p>
                    <p className="menu-item-text">Homard rôti</p>
                    <p className="menu-item-details">Risotto • Ballotine de volaille farcie • Crémeux de courgettes • Bisque</p>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <h3 className="menu-column-title">DESSERTS</h3>
                <div className="menu-column-image">
                  <div className="menu-image-placeholder"></div>
                </div>
                <div className="menu-items-list">
                  <div className="menu-item">
                    <p className="menu-item-text">Riz au lait, beurre, anis</p>
                    <p className="menu-item-text">Soufflé de popcorn</p>
                    <p className="menu-variant">ou</p>
                    <p className="menu-item-text">Profiterole au Bailey's</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entreprise / Catering */}
          <div className="menu-section">
            <h2 className="menu-section-title">Entreprise / Catering</h2>
            <div className="menu-category">
              <div className="menu-item">
                <p className="menu-item-text">Dîner d'affaires — sur devis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;

