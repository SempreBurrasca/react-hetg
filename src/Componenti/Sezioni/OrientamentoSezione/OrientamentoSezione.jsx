import React, { useEffect, useState } from "react";
import { Button } from "../../../Componenti/Molecole/Buttons/Button";
import { useNavigate } from "react-router-dom";
import "./orientamento-sezione.scss";
import { Loader } from "../../../Componenti/Organismi/Loader/Loader";

export function OrientamentoSezione() {
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => response.json())
      .then((data) => {
        setCopy(data.it.OrientamentoSezione);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }

  return (
    <section id="orientamento-sezione">
      <h2>{copy.titolo}</h2>
      <p>{copy.descrizione}</p>
      <Button
        borderradius="bottom-left-radius top-left-radius bottom-right-radius top-right-radius"
        path="orientamento"
        angleposition={{ overTopRight: false, underBottomRight: false }}
      >
        {copy.testoBottone}
      </Button>
    </section>
  );
}
