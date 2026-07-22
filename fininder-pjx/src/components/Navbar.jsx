import react from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Côté gauche : Logo ou Titre du site */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>🔍 FindFinder</Link>
      </div>

      {/* Centre : Liens de navigation principaux */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/service" style={styles.link}>Service</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>

      {/* Côté droit : Boutons d'action rapides */}
      <div style={styles.authLinks}>
        <Link to="/connection" style={styles.loginBtn}>Connexion</Link>
        <Link to="/inscription" style={styles.registerBtn}>Inscription</Link>
      </div>
    </nav>
  );
}

// STYLES INLINE POUR ÉVITER LES COMPLICATIONS DE FICHIERS CSS
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#709c1d",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
    fontFamily: "Arial, sans-serif",
    borderBottom: "1px solid #d38e3e",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  logoLink: {
    textDecoration: "none",
    color: "#2c2fdb",
  },
  navLinks: {
    display: "flex",
    gap: "24px",
  },
  link: {
    textDecoration: "none",
    color: "#0a0ddf",
    fontSize: "1rem",
    fontWeight: "500",
  },
  authLinks: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  loginBtn: {
    textDecoration: "none",
    color: "#b0ee05",
    fontWeight: "600",
    fontSize: "0.95rem",
  },
  registerBtn: {
    textDecoration: "none",
    backgroundColor: "#0f1118",
    color: "#5382c9",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.95rem",
  },
};

export default Navbar;
