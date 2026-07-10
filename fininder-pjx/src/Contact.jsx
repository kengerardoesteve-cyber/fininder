import { useState } from 'react';

function Contacte() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message envoyé :', formData);
    setEnvoye(true);
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 24px' }}>
      <h1>Contactez-nous</h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        Une question ? Un problème avec un service ? Écris-nous.
      </p>

      {envoye && (
        <div style={styles.success}>✅ Ton message a bien été envoyé !</div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nom complet</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ ...styles.input, resize: 'vertical' }}
        />

        <button type="submit" style={styles.button}>Envoyer</button>
      </form>
    </div>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '14px', fontWeight: '600', marginTop: '10px' },
  input: {
    padding: '12px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '20px',
    padding: '14px',
    fontSize: '16px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  success: {
    backgroundColor: '#dcfce7',
    color: '#166534',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

export default Contacte;