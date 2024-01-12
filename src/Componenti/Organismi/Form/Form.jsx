import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Importa le funzioni necessarie da Firestore
import { db } from "../../../Firebase/firebase"; // Assicurati di importare la configurazione del tuo database
import "./form.scss";

import { Loader } from "../Loader/Loader";

export function Form() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    corso: "",
    messaggio: "",
    privacy: false,
  });

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCopy(data.it.form);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const validateForm = () => {
    if (
      !formData.nome ||
      !formData.cognome ||
      !formData.email ||
      !formData.telefono ||
      !formData.corso ||
      !formData.messaggio
    ) {
      setFeedback("Per favore, compila tutti i campi.");
      return false;
    }

    // Controllo validità email con espressione regolare
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedback("Inserisci un indirizzo email valido.");
      return false;
    }

    // Controllo che il messaggio sia di lunghezza adeguata
    if (formData.messaggio.length < 10) {
      setFeedback("Il messaggio deve contenere almeno 10 caratteri.");
      return false;
    }

    // Controllo che il numero di telefono sia valido (con prefisso nazionale)
    const phoneRegex = /^(\+\d{1,})?\d{10,}$/;
    if (!phoneRegex.test(formData.telefono)) {
      setFeedback(
        "Inserisci un numero di telefono valido con prefisso nazionale."
      );
      return false;
    }

    // Controllo che l'utente abbia accettato la privacy policy
    if (!formData.privacy) {
      setFeedback("Devi accettare le politiche di privacy per procedere.");
      return false;
    }

    // Se tutti i controlli sono superati
    setFeedback(""); // Pulisci ogni messaggio di errore precedente
    return true; // Il form è valido
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataPhp = new FormData();
    if (validateForm()) {
      try {
        await addDoc(collection(db, "contatti"), {
          ...formData,
          timestamp: serverTimestamp(), // Aggiungi il timestamp qui
        });

        formDataPhp.append("nome", formData.nome);
        formDataPhp.append("cognome", formData.cognome);
        formDataPhp.append("email", formData.email);
        formDataPhp.append("telefono", formData.telefono);
        formDataPhp.append("corso", formData.corso);
        formDataPhp.append("messaggio", formData.messaggio);

        const response = await fetch(
          "https://unicampushetg.ch/api/sendMail.php",
          {
            method: "POST",
            body: formDataPhp,
          }
        );
        if (response.ok) {
          // Il tuo codice per la gestione della risposta di successo
          setFeedback("Dati inviati con successo!");
          // Pulisci il form qui se necessario
          setFormData({
            nome: "",
            cognome: "",
            email: "",
            telefono: "",
            corso: "",
            messaggio: "",
            privacy: false,
          });
        } else {
          // Gestisci la risposta di errore
          throw new Error("Errore durante l'invio dei dati.");
        }
      } catch (error) {
        console.error("Errore durante il salvataggio dei dati:", error);
        setFeedback("Errore durante l'invio dei dati.");
      }
    }
  };

  if (!copy) {
    return <Loader />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder={copy.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="cognome"
        name="cognome"
        placeholder={copy.cognome}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder={copy.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        id="telefono"
        name="telefono"
        placeholder={copy.telefono}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="corso"
        name="corso"
        placeholder={copy.corso}
        onChange={handleChange}
        required
      />
      <textarea
        id="messaggio"
        name="messaggio"
        rows="4"
        placeholder={copy.messaggio}
        onChange={handleChange}
        required
      ></textarea>
      <div className="form-group">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          required
        />
        <label htmlFor="privacy">
          <a
            href="https://www.iubenda.com/privacy-policy/79094441"
            className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
            title="Privacy Policy"
          >
            {copy.privacy}
          </a>
        </label>
      </div>
      <div className="feedback">{feedback}</div>
      <button type="submit">{copy.submit}</button>
    </form>
  );
}
