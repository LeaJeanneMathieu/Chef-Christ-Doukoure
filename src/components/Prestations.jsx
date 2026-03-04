import { useEffect, useRef } from 'react';
import './Prestations.css';

const Prestations = () => {
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
    <section id="prestations" className="prestations section" ref={sectionRef}>
      <div className="container">
        <h2 className="prestations-title section-title">LES RÉALISATIONS</h2>
        <div className="prestations-widget-wrapper">
          <div
            className="elfsight-app-6de6375e-d092-42c5-9963-a7e2d4250090"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default Prestations;

