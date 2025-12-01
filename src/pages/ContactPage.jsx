import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Contact.css';

const ContactPage = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simuler l'envoi du formulaire
    // À remplacer par un vrai appel API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <Header />
      <section className="contact section" ref={sectionRef}>
        <div className="container">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Retour
          </button>
          <h1 className="section-title">CONTACT</h1>
          <div className="contact-content">
            <p className="contact-intro">
              Pour toute réservation ou demande d'information, n'hésitez pas à nous contacter via le formulaire ci-dessous.
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'ENVOYER'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;

