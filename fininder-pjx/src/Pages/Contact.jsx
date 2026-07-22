import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contactez-nous</h1>
      <p className="contact-text">
        Nous sommes disponibles pour répondre à vos questions.
      </p>

      <div className="contact-card">
        <p className="contact-text">
          <strong>Email :</strong> kengerardoesteve@gmail.com
        </p>
        <p className="contact-text">
          <strong>Téléphone :</strong> 01 48 81 27 37 / 01 97 28 11 83
        </p>
      </div>
    </div>
  );
}

export default Contact;