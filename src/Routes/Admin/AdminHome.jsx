import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import {aggiornaOrdiniIstituzioni} from "../../Firebase/AggiornamentoCopy"
import {getOrdini} from "../../Firebase/RecuperoCopy"
export function AdminHome() {
  const navigate = useNavigate();

  // Stati per i valori dei campi di testo
  const [senatoAccademico, setSenatoAccademico] = useState("");
  const [nucleoDiValutazione, setNucleoDiValutazione] = useState("");
  const [commissioneQualita, setCommissioneQualita] = useState("");
  const [feed, setFeed] = useState("");
  // Effettua la chiamata a getOrdini al caricamento del componente
  useEffect(() => {
    async function fetchOrdini() {
      try {
        const ordiniData = await getOrdini();
        if (ordiniData) {
          // Popola i campi di testo con i dati recuperati
          setSenatoAccademico(ordiniData.senatoAccademico);
          setNucleoDiValutazione(ordiniData.nucleoDiValutazione);
          setCommissioneQualita(ordiniData.commissioneQualita);
        }
      } catch (error) {
        console.error("Errore durante il recupero degli Ordini:", error);
      }
    }

    fetchOrdini();
  }, []);

  const handleSaveOrder = async () => {
    // Creare un oggetto campi con i dati da aggiornare
    const campi = {
      senatoAccademico,
      nucleoDiValutazione,
      commissioneQualita,
    };

    // Chiamare la funzione di aggiornamento passando i campi
    await aggiornaOrdiniIstituzioni(campi);
    setFeed("Aggiornamento Effettuato con successo");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 2,
      }}
    >
      <div>
        <h2>Ordine delle gerarchie dell'amministrazione</h2>
        <p>
          Per ogni istituzione inserisci in ordine i nomi dei docenti separati da
          ","
        </p>
      </div>
      {/* Form per Senato Accademico */}
      <TextField
        label="Senato Accademico"
        variant="outlined"
        value={senatoAccademico}
        onChange={(e) => setSenatoAccademico(e.target.value)}
      />

      {/* Form per Nucleo di Valutazione */}
      <TextField
        label="Nucleo di Valutazione"
        variant="outlined"
        value={nucleoDiValutazione}
        onChange={(e) => setNucleoDiValutazione(e.target.value)}
      />

      {/* Form per Commissione Qualità */}
      <TextField
        label="Commissione Qualità"
        variant="outlined"
        value={commissioneQualita}
        onChange={(e) => setCommissioneQualita(e.target.value)}
      />

      {/* Bottone "Salva Ordine" */}
      <Button variant="contained" color="primary" onClick={handleSaveOrder}>
        Salva Ordine
      </Button>
      <p>{feed}</p>

    </Box>
  );
}
