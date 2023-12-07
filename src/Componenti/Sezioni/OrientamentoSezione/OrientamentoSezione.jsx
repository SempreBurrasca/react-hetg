import React, { useEffect } from "react";
import { Button } from "../../../Componenti/Molecole/Buttons/Button";
import { useNavigate } from "react-router-dom";
import "./orientamento-sezione.scss";

export function OrientamentoSezione() {
  const navigate = useNavigate();
  
  return (
   
      <section id="orientamento-sezione">
      <h2>NAVIGA L'ORIENTAMENTO HETG</h2>
        <p>
        Non sei sicuro di quale percorso sia il migliore per te? Lascia che ti guidiamo. <br/>
        L’orientamento HETG è stato progettato per aiutarti a scoprire e a comprendere meglio le tue opzioni accademiche.
        </p>
        <Button
          borderradius="bottom-left-radius top-left-radius bottom-right-radius top-right-radius"
          path="orientamento"
          angleposition={{ overTopRight: false, underBottomRight: false }}
        >
          Orientamento
        </Button>
      </section>
      
  );
}
