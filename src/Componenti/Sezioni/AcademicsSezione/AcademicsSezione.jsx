import React, { useEffect, useState } from "react";
import { PlusIcon } from "../../../Componenti/Molecole/PlusIcon/PlusIcon";
import { FacultyCarousel } from "../../../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import "./academics-sezione.scss";
import { Loader } from "../../Organismi/Loader/Loader";

export function AcademicsSezione() {
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCopy(data.it.AcademicsSezione);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }

  return (
    <section id="academics-sezione">
      <div className="row">
        <div className="title-wrapper">
          <h2 className="section-title">{copy.titoloSezione}</h2>
          <p className="section-subtitle">{copy.sottotitoloSezione}</p>
        </div>
        <div className="plus-col">
          <PlusIcon isRed />
          <PlusIcon isRed />
        </div>
      </div>
      <div className="row">
        <FacultyCarousel style={{ gridColumn: "1/13", gridRow: 2 }} />
      </div>
      <div className="row-2">
        <h3>{copy.titoloRiscoperta}</h3>
        <PlusIcon style={{ gridColumn: 7, gridRow: 3, alignSelf: "center" }} />
        <p className="txt-white body">{copy.descrizioneRiscoperta}</p>
      </div>
    </section>
  );
}
