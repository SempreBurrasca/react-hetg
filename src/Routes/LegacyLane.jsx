import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { partnersData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import "./general-page.scss";
import "./legacy-lane.scss";
import { StaffCarousel } from "../Componenti/Organismi/StaffCarousel/StaffCarousel";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { FormDiContatto } from "../Componenti/Sezioni/Form/FormDiContatto";
import { PartnerSection } from "../Componenti/Sezioni/Partner/PartnerSection";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { StaffSezione } from "../Componenti/Sezioni/StaffSezione/StaffSezione";
export function LegacyLane() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const paginaId = "CJq68hOKkFLRtDyaAHsq";
  useEffect(() => {
    fetch("/copy/legacylane.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setCopy(data.it);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="legacy-lane">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong>
          <br />
          <i>{copy.hero[1]}</i>
        </h1>
        <p className="page-subtitle">{copy.hero[2]}</p>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 5, justifySelf: "end" }} />
        <Button
          style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="contattaci"
        >
          {copy.hero[3]}
        </Button>
      </section>
      <section id="about-section">
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h2>{copy.about[0]}</h2>
        <div className="spacer" style={{ gridRow: 3 }} />
        <p>{copy.about[1]}</p>
        <h2 style={{ gridColumn: "2/5", gridRow: 5 }}>{copy.about[2]}</h2>
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 5 }} />
        <div className="spacer" />
        <p style={{ gridColumn: "9/12", gridRow: 7 }}>{copy.about[3]}</p>
      </section>
      <Striscia />
      <StaffSezione type="staff"/>
      <Striscia />
      <div id="cta-faculty-wrapper">
        <Button
          style={{ position: "relative", left: "1rem", top: "-4rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="student-central/staff-management"
        >
          {copy.staff[0]}
        </Button>
      </div>
      <VAE/>
      <FormDiContatto />
      <PartnerSection/>
      <div className="divider" />
    </main>
  );
}
