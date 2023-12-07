import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCorsiByFacoltaNome,
  getCorsoById,
  getFacoltaById,
} from "../Firebase/RecuperoCopy";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { StaffSezione } from "../Componenti/Sezioni/StaffSezione/StaffSezione";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import "./corso.scss";
import { CorsiList } from "../Componenti/Molecole/CorsiList/CorsiList";
import { FormDiContatto } from "../Componenti/Sezioni/Form/FormDiContatto";
import { PartnerSection } from "../Componenti/Sezioni/Partner/PartnerSection";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { OrientamentoSezione } from "../Componenti/Sezioni/OrientamentoSezione/OrientamentoSezione";
import { TestoConAcapo } from "../Componenti/Molecole/TestoACapo/TestoAcapo";

export function SingleCorso() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const { corsoId } = useParams(); // Assicurati di avere il parametro 'facoltaId' nelle tue route
  const [corso, setCorso] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [links, setLinks] = React.useState({
    piattaforma: "#",
    xcom: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  });
  useEffect(() => {
    console.log("id corso=>", corsoId);
    const fetchCorso = async () => {
      setIsLoading(true);
      console.log("inizio");
      try {
        const corsoData = await getCorsoById(corsoId);
        if (corsoData) {
          setCorso(corsoData);
          console.log(corso);
          // Aggiungi qui altri campi se necessario
        } else {
          // Gestisci il caso in cui il corso non esiste o non viene trovato
          console.error("Corso non trovato");
          setError(new Error("Corso non trovato"));
        }
      } catch (err) {
        console.error("Errore durante il recupero del corso:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (corsoId) {
      fetchCorso();
    }
    fetch("/copy/links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setLinks(data.it);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, [corsoId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div style={{ padding: "100px" }}>
        Errore durante il caricamento: {error.message}
      </div>
    );
  }

  if (!corso) {
    return <div style={{ padding: "100px" }}>Corso non trovato.</div>;
  }

  return (
    <main id="single-corso">
      <section
        className="hero-section"
        style={{ backgroundImage: "url(" + corso.imageUrl + ")" }}
      >
        <h1 className="page-title">{corso.titleHero}</h1>
        <Button
          style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="linktree"
        >
          Accedi al portale
        </Button>
      </section>
      <Striscia />
      <section id="info-section">
        <div className="content">
        <h2>{corso.titleHero}</h2>
        <p className="page-subtitle">{corso.paragrafoHero}</p>
          <h2>Moduli e Contenuti</h2>
          <p>
            <TestoConAcapo testo={corso.paragrafoDescrizione} />
          </p>
          <div className="corsi-wrap">
            <h4>{corso.lista1Titolo}</h4>
            <p>
              {" "}
              <TestoConAcapo testo={corso.lista1Contenuto} />
            </p>
            {corso.lista2Titolo && <div className="divider" />}
            {corso.lista2Titolo && <h4>{corso.lista2Titolo}</h4>}
            {corso.lista2Titolo && (
              <p>
                <TestoConAcapo testo={corso.lista2Contenuto} />
              </p>
            )}
            {corso.lista3Contenuto && <div className="divider" />}
            {corso.lista3Contenuto && <h4>{corso.lista3Titolo}</h4>}
            {corso.lista3Contenuto && (
              <p>
                <TestoConAcapo testo={corso.lista3Contenuto} />
              </p>
            )}
            {corso.lista4Titolo && <div className="divider" />}
            {corso.lista4Titolo && <h4>{corso.lista4Titolo}</h4>}
            {corso.lista4Titolo && (
              <p>
                <TestoConAcapo testo={corso.lista4Contenuto} />
              </p>
            )}
            {corso.lista5Titolo && <div className="divider" />}
            {corso.lista5Titolo && <h4>{corso.lista5Titolo}</h4>}
            {corso.lista5Titolo && (
              <p>
                <TestoConAcapo testo={corso.lista5Contenuto} />
              </p>
            )}
            <div className="divider" />
            <div className="button-container">
              <Button
                borderradius="bottom-left-radius top-left-radius bottom-right-radius top-right-radius"
                path={"/uploads/corsi/"+corso.id+".pdf"}
                angleposition={{ overTopRight: false, underBottomRight: false }}
                isExternal
              >
                Download Piano di studi
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Striscia />
      <VAE />
      <Striscia />
      <StaffSezione type="docenti" />
      {corso.tipo !== "academy" && <FormDiContatto />}
      <PartnerSection />
      <div className="divider" />
    </main>
  );
}
