import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { getServices, getCategories } from '../services/api';

function Home() {
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
    const matchRecherche = s.title.toLowerCase().includes(recherche.toLowerCase());
    const matchCategorie =
      categorieActive === 'all' || s.categoryId === categorieActive;
    return matchRecherche && matchCategorie;
  });

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px' }}>
      <h1>Trouve un prestataire près de chez toi</h1>

      <input
        type="text"
        placeholder="Rechercher un service (plomberie, ménage...)"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          margin: '20px 0 12px',
        }}
      />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button
          onClick={() => setCategorieActive('all')}
          style={categorieActive === 'all' ? styles.chipActive : styles.chip}
        >
          Toutes
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setCategorieActive(cat._id)}
            style={categorieActive === cat._id ? styles.chipActive : styles.chip}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {loading && <p>Chargement des services...</p>}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {servicesFiltres.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {!loading && servicesFiltres.length === 0 && <p>Aucun service trouvé.</p>}
    </div>
  );
}

const styles = {
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
};

export default Home;