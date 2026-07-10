import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>LocalService</Link>

      <div style={styles.links}>
        <Link
          to="/"
          style={{ ...styles.link, ...(isActive('/') && styles.linkActive) }}
        >
          Accueil
        </Link>
        <Link
          to="/services"
          style={{ ...styles.link, ...(isActive('/services') && styles.linkActive) }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{ ...styles.link, ...(isActive('/contact') && styles.linkActive) }}
        >
          Contact
        </Link>
        <Link to="/connexion" style={styles.linkBtn}>
          Connexion
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#2563eb',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '15px',
    paddingBottom: '4px',
  },
  linkActive: {
    color: '#2563eb',
    fontWeight: '600',
    borderBottom: '2px solid #2563eb',
  },
  linkBtn: {
    textDecoration: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '8px: 16px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '15px',
  },
};

export default Navbar;