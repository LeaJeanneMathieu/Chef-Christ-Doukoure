import { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
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
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-content">
          <p>
            Pour toute réservation ou demande d'information, n'hésitez pas à nous contacter.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:contact@chefdoukoure.fr">contact@chefdoukoure.fr</a>
            </div>
            <div className="contact-item">
              <h3>Téléphone</h3>
              <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

