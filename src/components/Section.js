import React from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h2>Buenos alimentos, grandes ideas</h2>
        <p>
          Queremos ser su aliado experto con alimentación de sus estudiantes.
          Con cada bocado saludable, estás invirtiendo en un futuro académico brillante.
        </p>
        <Link to="/services">
          <button>Conozca más</button>
        </Link>
      </div>
    </section>
  );
};

export default Section;
