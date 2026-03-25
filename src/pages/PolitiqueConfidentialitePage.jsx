import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPages.css';

const PolitiqueConfidentialitePage = () => {
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
          <h1 className="section-title">Politique de confidentialité</h1>

          <p>
            Cette politique de confidentialité a pour objectif d’expliquer comment le site collecte, utilise et protège
            vos données personnelles lorsque vous naviguez sur le site ou que vous utilisez son formulaire de contact.
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est <strong>Chef Christ Doukouré</strong>.
            <br />
            Contact : <a href="mailto:contact@chefdoukoure.fr">contact@chefdoukoure.fr</a>
          </p>

          <h2>2. Données collectées</h2>
          <p>Le site peut collecter les données suivantes :</p>
          <ul>
            <li>Les informations que vous renseignez dans le formulaire de contact (nom, email, téléphone, sujet, message).</li>
            <li>Des données de navigation (ex. pages consultées, informations techniques) via des cookies ou technologies similaires, selon vos choix.</li>
          </ul>

          <h2>3. Finalités du traitement</h2>
          <p>Les données sont utilisées notamment pour :</p>
          <ul>
            <li>Répondre à vos demandes envoyées via le formulaire.</li>
            <li>Améliorer le site et comprendre l’utilisation générale (le cas échéant, via des cookies).</li>
            <li>Assurer la sécurité du site et prévenir les abus.</li>
          </ul>

          <h2>4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur des motifs tels que l’exécution de mesures précontractuelles liées à
            votre demande, l’intérêt légitime du responsable du traitement, et/ou votre consentement lorsque celui-ci est requis.
          </p>

          <h2>5. Destinataires des données</h2>
          <p>
            Les données personnelles peuvent être accessibles au personnel habilité du responsable du traitement.
            Elles peuvent également être transmises, si nécessaire, à des prestataires techniques (hébergement, maintenance),
            uniquement dans la mesure requise pour fournir le service.
          </p>

          <h2>6. Durée de conservation</h2>
          <p>
            Les données collectées via le formulaire de contact sont conservées pendant une durée raisonnable afin de traiter
            votre demande et, le cas échéant, de gérer le suivi. Les données de navigation, lorsqu’elles sont utilisées via cookies,
            sont conservées conformément aux durées indiquées dans la gestion des cookies.
          </p>

          <h2>7. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable, vous disposez notamment des droits suivants : accès, rectification,
            effacement, limitation, opposition et portabilité (selon les conditions prévues par la loi). Vous pouvez également
            retirer votre consentement lorsque le traitement repose sur celui-ci.
          </p>
          <p className="small">
            Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@chefdoukoure.fr">contact@chefdoukoure.fr</a>
          </p>

          <h2>8. Cookies</h2>
          <p>
            Des cookies (ou technologies similaires) peuvent être utilisés pour améliorer l’expérience utilisateur et, si applicable,
            mesurer l’audience. Pour plus d’informations, veuillez consulter notre <a href="/politique-cookies">politique d’utilisation des cookies</a>.
          </p>

          <h2>9. Modifications</h2>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité afin de refléter les évolutions du site ou les changements
            réglementaires. La date de mise à jour figure, le cas échéant, sur la page.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialitePage;

