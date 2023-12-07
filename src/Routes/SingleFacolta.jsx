import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCorsiByFacoltaNome,
  getDocentiById,
  getFacoltaById,
} from "../Firebase/RecuperoCopy";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { StaffSezione } from "../Componenti/Sezioni/StaffSezione/StaffSezione";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import "./facolta.scss";
import { CorsiList } from "../Componenti/Molecole/CorsiList/CorsiList";
import { FormDiContatto } from "../Componenti/Sezioni/Form/FormDiContatto";
import { PartnerSection } from "../Componenti/Sezioni/Partner/PartnerSection";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { OrientamentoSezione } from "../Componenti/Sezioni/OrientamentoSezione/OrientamentoSezione";
import { TestoConAcapo } from "../Componenti/Molecole/TestoACapo/TestoAcapo";
import arrow_right from "../assets/arrow-right.png";

export function SingleFacolta() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const { facoltaId } = useParams(); // Assicurati di avere il parametro 'facoltaId' nelle tue route
  const [facolta, setFacolta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [links, setLinks] = React.useState({
    piattaforma: "#",
    xcom: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  });
  const [preside, setPreside] = useState(null);
  
  useEffect(() => {
  
    const fetchPreside = async () => {
      if (facolta && facolta.presideId) {
        try {
          const presideData = await getDocentiById(facolta.presideId);
          setPreside(presideData);
          console.log("pre",facolta.presideId)

        } catch (err) {
          console.error("Errore durante il recupero dei dati del preside:", err);
        }
      }
    };
    fetchPreside();
  }, [facolta]);
  useEffect(() => {
    const fetchFacolta = async () => {
      setIsLoading(true);
      try {
        const facoltaData = await getFacoltaById(facoltaId);
        if (facoltaData) {
          localStorage.setItem(facoltaId, JSON.stringify(facoltaData));
          setFacolta(facoltaData);
        } else {
          throw new Error("Facoltà non trovata.");
        }
      } catch (err) {
        console.error("Errore durante il recupero della facoltà:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    const cachedCopy = false;
    if (cachedCopy) {
      setFacolta(JSON.parse(cachedCopy));
      setIsLoading(false);
    } else {
      fetchFacolta();
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
  }, [facoltaId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Errore durante il caricamento: {error.message}</div>;
  }

  if (!facolta) {
    return <div>Facoltà non trovata.</div>;
  }

  return (
    <main id="single-facolta">
      <section
        className="hero-section"
        style={{ backgroundImage: "url(" + facolta.imageUrl + ")" }}
      >
        <h1 className="page-title">
          <TestoConAcapo testo={facolta.heroTitle} />
        </h1>

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
      <OrientamentoSezione />
      <Striscia />
      <section id="info-section">
        <div className="content">
          <h2>
            {" "}
            <TestoConAcapo testo={facolta.heroTitle} />
          </h2>
          <p className="page-subtitle">
            <TestoConAcapo testo={facolta.heroParagraph} />
          </p>
          <h2>
            {" "}
            <TestoConAcapo testo={facolta.infoTitle} />
          </h2>
          <p>
            <TestoConAcapo testo={facolta.infoParagraph} />
          </p>

          <div className="corsi-wrap">
            <CorsiList facoltaNome={facolta.nome} facolta={facolta} />
          </div>
          <div className="preside">
            <h2>Preside di Facoltà</h2>
            {preside && (
              <div
                className="staff-card"
                key={preside.id}
                style={{ backgroundImage: "url(" + preside.imageUrl + ")" }}
              >
                <div
                  className="staff-cta"
                  onClick={() => navigate("/person/" + preside.id)}
                >
                  <span>{preside.nome}</span>
                  <img className="arrow" src={arrow_right} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Striscia />
      <VAE />
      <FormDiContatto />
      <StaffSezione type="docenti" />
      <PartnerSection />
      <div className="divider" />
    </main>
  );
}
