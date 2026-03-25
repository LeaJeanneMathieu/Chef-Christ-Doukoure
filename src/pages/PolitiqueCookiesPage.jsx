import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPages.css';

const PolitiqueCookiesPage = () => {
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

  return (
    <div className="legal-page">
      <Header />
      <section className="section" ref={sectionRef}>
        <div className="container legal-content">
          <h1 className="section-title">Politique d’utilisation des cookies</h1>

          <p>
            Cette politique explique comment le site peut utiliser des cookies (ou technologies similaires) lors de votre
            navigation. Les cookies peuvent améliorer l’expérience utilisateur, faciliter certaines fonctionnalités
            et, le cas échéant, mesurer l’audience du site.
          </p>

          <h2>1. Qu’est-ce qu’un cookie ?</h2>
          <p>
            Un cookie est un petit fichier déposé sur votre terminal (ordinateur, mobile, tablette) lors de votre
            visite d’un site. Il permet notamment de reconnaître votre navigateur et de conserver certaines préférences.
          </p>

          <h2>2. Cookies utilisés</h2>
          <p>
            Selon votre utilisation du site, nous pouvons utiliser :
          </p>
          <ul>
            <li>Des cookies nécessaires au fonctionnement du site.</li>
            <li>Des cookies de mesure d’audience et de performance (le cas échéant), pour comprendre la fréquentation.</li>
            <li>Des cookies de préférences, afin de mémoriser certaines préférences de navigation (le cas échéant).</li>
          </ul>

          <h2>3. Finalités</h2>
          <p>
            Les cookies sont utilisés pour :
          </p>
          <ul>
            <li>Assurer le bon fonctionnement du site.</li>
            <li>Améliorer le contenu et l’ergonomie.</li>
            <li>Analyser la fréquentation (si applicable).</li>
          </ul>

          <h2>4. Gestion des cookies</h2>
          <p>
            Vous pouvez gérer les cookies via les paramètres de votre navigateur. Vous pouvez également supprimer les cookies
            déjà enregistrés. Les options disponibles varient selon le navigateur utilisé.
          </p>

          <h2>5. Durée de conservation</h2>
          <p>
            La durée de conservation dépend du type de cookie. Certains cookies peuvent être temporaires (le temps de votre session),
            tandis que d’autres peuvent être conservés plus longtemps.
          </p>

          <h2>6. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable, vous pouvez exercer vos droits concernant les données personnelles.
            Pour plus d’informations, consultez notre <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Cette politique peut être mise à jour afin de refléter des changements apportés au site ou aux pratiques de collecte.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PolitiqueCookiesPage;

