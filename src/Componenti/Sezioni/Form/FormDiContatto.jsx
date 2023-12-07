import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlusIcon } from "../../../Componenti/Molecole/PlusIcon/PlusIcon";

import "./form-contatto.scss";
import { Form } from "../../Organismi/Form/Form";

export function FormDiContatto() {
  const navigate = useNavigate();

  return (
    <section id="form-contatto">
      <div className="row">
        <div className="content">
          <h2 className="section-title">
            Apri la Porta al Tuo Futuro: <br />
            Ammissioni Ora Aperte!
          </h2>
          <p>
            Nel cuore della missione di HETG c'è il desiderio di rendere l’alta
            formazione accessibile e significativa per tutti, indipendentemente
            dal percorso di vita intrapreso. Se senti che il tempo e le
            circostanze ti hanno tenuto lontano dal realizzare il tuo sogno
            accademico, siamo qui per aiutarti.
            <br />
            Compilando il nostro form, avrai l'opportunità di entrare in
            contatto con un consulente d'iscrizione personale, pronto ad
            assisterti in ogni fase del processo. E grazie alla nostra
            Valutazione Accademica dell'Esperienza (VAE), la tua preziosa
            esperienza lavorativa può essere convertita in crediti formativi,
            avvicinandoti ancora di più al tuo obiettivo.
            <br />
            Non aspettare, il tuo futuro accademico ti aspetta.
          </p>
        </div>
        <div className="plus">
          <PlusIcon isRed />
          <PlusIcon isRed />
        </div>
      </div>
      <div className="row">
        <div className="plus">
          <PlusIcon isRed />
          <PlusIcon isRed />
        </div>
        <div className="content">
          <Form/>
        </div>
      </div>
    </section>
  );
}
