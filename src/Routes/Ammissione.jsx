import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";

export function Ammissione() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  const paginaId = "a0reJFlR9kADKlIt1O5l";
  React.useEffect(() => {
   // Controlla se i dati sono presenti in localStorage
   const cachedCopy = localStorage.getItem(paginaId);
   if (cachedCopy) {
     // Se presenti in localStorage, utilizza i dati dalla cache
     setCopy(JSON.parse(cachedCopy));
   } else {
     // Altrimenti, recupera i dati e aggiorna localStorage
     getPagina(paginaId)
       .then((data) => {
         localStorage.setItem(paginaId, JSON.stringify(data)); // Aggiorna localStorage
         setCopy(data);
       })
       .catch(console.error);
   }
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="contattaci">
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">
            {copy.hero[0]}
            <br />
            {copy.hero[1]}
          </h2>
          <p>
            {copy.hero[2]} <br />
            {copy.hero[3]}
          </p>
        </div>
       <Form/>
        {!isMobile && (
          <Button
            style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
            angleposition={{
              overTopLeft: true,
              underBottomLeft: true,
            }}
            borderradius="bottom-right-radius top-right-radius"
            path="contattaci"
          >
            {copy.form[3]}
          </Button>
        )}
      </section>

      <div className="divider" />
    </main>
  );
}
