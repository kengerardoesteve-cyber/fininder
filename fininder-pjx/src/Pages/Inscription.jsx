import React from "react";
import { Link } from "react-router-dom";

function Inscription() {
  return (
    <div className="auth-wrapper">
      <form className="auth-card">
        <h1 className="auth-title">Créer un compte</h1>

        <label className="form-label">Nom</label>
        <input type="text" placeholder="Votre nom" className="form-input" />

        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="exemple@mail.com"
          className="form-input"
        />

        <label className="form-label">Mot de passe</label>
        <input
          type="password"
          placeholder="Votre mot de passe"
          className="form-input"
        />

        <button type="submit" className="form-button">
          S'inscrire
        </button>

        <p className="auth-footer-text">
          Déjà inscrit ?{" "}
          <Link to="/connection" className="auth-link">
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Inscription;