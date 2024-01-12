import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./corsi-sezione.scss";
import { getCorsiXXX, getFacoltas } from "../../../Firebase/RecuperoCopy";
import { Button } from "../../../Componenti/Molecole/Buttons/Button";
import { CoursesCarousel } from "../../../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { Loader } from "../../../Componenti/Organismi/Loader/Loader";
import { coursessData, partnersData } from "../../../assets/data";

export function CorsiSezione() {
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => response.json())
      .then((data) => {
        setCopy(data.it.CorsiSezione);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }

  return (
    <section id="corsi-sezione">
      <div className="row">
        <div className="black-row">
          <p>{copy.introduzione}</p>
        </div>
        <div className="white-row">
          <h2 className="section-title">{copy.titoloSezione}</h2>
        </div>
      </div>

      <div className="black-row-2">
        <div className="row">
          <p>{copy.descrizione}</p>
        </div>
        <Button
          style={{ alignSelf: "end" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="academic-avenues/academy-courses"
        >
          {copy.testoBottone}
        </Button>
      </div>
         </section>
  );
}
