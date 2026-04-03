import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPages.css';

const MentionsLegalesPage = () => {
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
          <h1 className="section-title">Mentions légales</h1>

          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>Chef Christ Doukouré</strong>.
            <br />
            Email : <a href="mailto:contactchristdoukoure@gmail.com">contactchristdoukoure@gmail.com</a>
          </p>

          <h2>2. Hébergeur</h2>
          <p>
            Hébergement : <span className="small">à compléter (nom de l’hébergeur et adresse).</span>
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur le site (textes, images, graphismes, logos, marques, etc.) est
            protégé par les lois en vigueur. Toute reproduction, distribution, adaptation, ou exploitation à des fins
            commerciales sans autorisation préalable est interdite.
          </p>

          <h2>4. Responsabilité</h2>
          <p>
            L’éditeur s’efforce d’assurer l’exactitude et la mise à jour des informations publiées. Toutefois, il ne
            peut garantir l’absence d’erreurs ou d’omissions. L’éditeur ne saurait être tenu responsable des
            dommages directs ou indirects liés à l’utilisation du site.
          </p>

          <h2>5. Contact</h2>
          <p>
            Pour toute question relative au site, vous pouvez contacter l’éditeur via :{' '}
            <a href="mailto:contactchristdoukoure@gmail.com">contactchristdoukoure@gmail.com</a>.
          </p>

          <h2>6. Données personnelles</h2>
          <p>
            Pour en savoir plus, consultez notre <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MentionsLegalesPage;

