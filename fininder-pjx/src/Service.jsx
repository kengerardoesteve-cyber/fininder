import { useEffect, useState } from 'react';
import ServiceCard from "./components/ServiceCard";
import { getServices, getCategories } from './services/api';

function Service() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recherche, setRecherche] = useState('');
  const [categorieActive, setCategorieActive] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [resServices, resCategories] = await Promise.all([
          getServices(),
          getCategories(),
        ]);
        setServices(resServices.data);
        setCategories(resCategories.data);
      } catch (err) {
        console.error('Erreur chargement :', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const servicesFiltres = services.filter((s) => {
    const matchRecherche = s.titre.toLowerCase().includes(recherche.toLowerCase());
    const matchCategorie =
      categorieActive === 'all' || s.categorie === categorieActive;
    return matchRecherche && matchCategorie;
  });

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px' }}>
      <h1>Tous les services</h1>

      <input
        type="text"
        placeholder="Rechercher un service..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        style={styles.searchInput}
      />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '16px 0 24px' }}>
        <button
          onClick={() => setCategorieActive('all')}
          style={categorieActive === 'all' ? styles.chipActive : styles.chip}
        >
          Toutes
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategorieActive(cat.id)}
            style={categorieActive === cat.id ? styles.chipActive : styles.chip}
          >
            {cat.nom}
          </button>
        ))}
      </div>

      {loading && <p>Chargement des services...</p>}

      <div style={styles.grid}>
        {servicesFiltres.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {!loading && servicesFiltres.length === 0 && <p>Aucun service trouvé.</p>}
    </div>
  );
}

const styles = {
  searchInput: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  chip: {
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '13px',
  },
  chipActive: {
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid #2563eb',
    backgroundColor: '#2563eb',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '13px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
  },
};

export default Service;