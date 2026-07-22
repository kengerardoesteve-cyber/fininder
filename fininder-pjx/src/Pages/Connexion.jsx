import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Connexion() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataFormulaire = new FormData(e.target);
    const email = dataFormulaire.get("email");

    console.log("Tentative de connexion pour :", email);

    localStorage.setItem("token", "fake-token-id-123");
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit} className="auth-card">
        <h1 className="auth-title">Connexion</h1>

        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="exemple@mail.com"
          required
          className="form-input"
        />

        <label className="form-label">Mot de passe</label>
        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          required
          className="form-input"
        />

        <button type="submit" className="form-button">
          Se connecter
        </button>

        <p className="auth-footer-text">
          Pas encore de compte ?{" "}
          <Link to="/inscription" className="auth-link">
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Connexion;