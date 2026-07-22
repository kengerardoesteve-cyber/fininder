import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Service() {
  return (
    <div className="section" style={{ flex: 1 }}>
      <h1 className="section-title">Nos services</h1>
      <p className="section-subtitle">
        Découvrez les prestations disponibles près de chez vous.
      </p>

      <div className="service-grid">
        <div className="service-card">
          <h2 className="service-card__title">Plomberie</h2>
          <p className="service-card__text">
            Détection de fuites, rénovation et dépannage rapide.
          </p>
        </div>
        <div className="service-card">
          <h2 className="service-card__title">Électricité</h2>
          <p className="service-card__text">
            Installation, maintenance et dépannage électrique.
          </p>
        </div>
        <div className="service-card">
          <h2 className="service-card__title">Ménage</h2>
          <p className="service-card__text">
            Services de nettoyage à domicile et entretien régulier.
          </p>
        </div>
      </div>

      <Link to="/" className="back-link">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}

export default Service;