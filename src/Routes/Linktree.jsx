import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./linktree.scss";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";

export function Linktree() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  useEffect(() => {
    const fetchCopyData = async () => {
      try {
        const response = await fetch('/copy/copy.json');
        const data = await response.json();
        console.log(data.it.Linktree)
        setCopy(data.it.Linktree);
      } catch (error) {
        console.error('Errore nel caricamento dei copy:', error);
      }
    };

    fetchCopyData();
  }, []);


  return (
    <main id="linktree">
      <section className="hero-section">
        <div className="spacer" />
        <h2>{copy?.titoloSezione||"Accedi alla piattaforma"}</h2>

        <a href={copy?.link1.url}>
        {copy?.link1.testo||"Accedi alla piattaforma 1"}
        </a>
        <a href={copy?.link2.url}>
        {copy?.link2.testo||"Accedi alla piattaforma 2"}
        </a>
       
      </section>

      <div className="divider" />
    </main>
  );
}
