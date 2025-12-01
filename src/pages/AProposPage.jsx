import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aproposImage from '../assets/images/DSCF0396_copie.jpg';
import '../components/APropos.css';

const AProposPage = () => {
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
    <div className="apropos-page">
      <Header />
      <section className="apropos section" ref={sectionRef}>
        <div className="container">
          <h1 className="section-title">À PROPOS</h1>
          <div className="apropos-content">
            <div className="apropos-image">
              <img src={aproposImage} alt="Chef Christ Doukoure" />
            </div>
            <div className="apropos-text">
              <h2 className="apropos-chef-name">Chef Christ Doukoure</h2>
              <p>
                Christ Doukoure n'était pas destiné à la cuisine. C'est à 19 ans qu'il découvre cet univers, 
                presque par hasard, et il y trouve rapidement une véritable vocation. Porté par une détermination 
                solide, il progresse rapidement et, dès l'âge de 22 ans, il prend la tête d'un restaurant reconnu, 
                où il développe rigueur, rapidité et maîtrise technique.
              </p>
              <p>
                Au fil de ses expériences, il forge une cuisine authentique, généreuse et inspirée de la gastronomie 
                française, à laquelle il apporte sa touche personnelle, moderne et créative.
              </p>
              <p>
                Pour lui, cuisiner ne se limite pas à préparer un plat : c'est transmettre une émotion, une histoire, 
                une énergie. Aujourd'hui, il poursuit son parcours avec passion et exigence, animé par l'envie de 
                proposer une cuisine sincère, faite maison, avec du caractère.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AProposPage;

