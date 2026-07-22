import React from "react";
import { Link } from "react-router-dom";
import gerardoImage from "../assets/gerardo.png";

function Accueil() {
  return (
    <div className="page">
      <section className="hero">
        <h1 className="hero__title">Trouvez un prestataire de confiance</h1>
        <p className="hero__subtitle">
          Des professionnels locaux qualifiés près de chez vous.
        </p>

        <form action="/service" method="GET" className="search-form">
          <input
            name="q"
            type="text"
            placeholder="De quel service avez-vous besoin ? (ex: plomberie)"
            className="search-input"
            required
          />
          <button type="submit" className="search-btn">
            Rechercher
          </button>
        </form>
      </section>

      <section className="concept">
        <h2 className="concept__title">Notre concept</h2>
        <p className="concept__text">
          Bienvenue sur notre site de mise en relation locale !
        </p>
        <img
          src={gerardoImage}
          alt="Illustration Fininder"
          className="concept__image"
        />
      </section>

      <section className="section">
        <h2 className="section-title">Parcourir par catégories</h2>
        <div className="category-grid">
          <Link to="/service?cat=plomberie" className="category-card">
            <span className="category-icon">🚰</span>
            <span className="category-name">Plomberie</span>
          </Link>
          <Link to="/service?cat=electricite" className="category-card">
            <span className="category-icon">⚡</span>
            <span className="category-name">Électricité</span>
          </Link>
          <Link to="/service?cat=menage" className="category-card">
            <span className="category-icon">🧹</span>
            <span className="category-name">Ménage</span>
          </Link>
          <Link to="/service?cat=jardinage" className="category-card">
            <span className="category-icon">🌱</span>
            <span className="category-name">Jardinage</span>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-text">© 2026 FindFinder. Tous droits réservés.</p>
          <div className="footer-links">
            <Link to="/contact" className="footer-link">
              Contactez-nous
            </Link>
            <Link to="/service" className="footer-link">
              Tous les services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Accueil;