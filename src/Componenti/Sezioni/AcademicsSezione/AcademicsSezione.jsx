import React from "react";
import { PlusIcon } from "../../../Componenti/Molecole/PlusIcon/PlusIcon";
import { FacultyCarousel } from "../../../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { useNavigate } from "react-router-dom";
import "./academics-sezione.scss";
import { AccordionFaculties } from "../../Organismi/FacultyCarousel/AccordionFaculties";

export function AcademicsSezione() {
  const navigate = useNavigate();

  return (
    <section id="academics-sezione">
      <div className="row">
        <div className="title-wrapper">
          <h2 className="section-title">LE NOSTRE FACOLTà</h2>
          <p className="section-subtitle">
            IL TUO ITINERARIO VERSO L’ECCELLENZA DOVE LA TRADIZIONE ACCADEMICA
            SVIZZERA INCONTRA L’INNOVAZIONE DEL DOMANI.
          </p>
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
        <h3>
          Riscopri L’alta formazione: Realizza il Tuo Sogno Accademico con HETG.
        </h3>
        <PlusIcon style={{ gridColumn: 7, gridRow: 3, alignSelf: "center" }} />
        <p className="txt-white body">
          L’offerta formativa di HETG spazia da lauree triennali e magistrali, a
          master di primo e secondo livello, fino ai prestigiosi dottorati di
          ricerca.
        </p>
      </div>
    </section>
  );
}
