import React, { useEffect } from "react";
import { Button } from "../../Componenti/Molecole/Buttons/Button";
import { Striscia } from "../../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { coursessData, partnersData } from "../../assets/data";
import { useNavigate } from "react-router-dom";
import "../academic-avenues.scss";
import { CoursesCarousel } from "../../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getPagina } from "../../Firebase/RecuperoCopy";
import { Loader } from "../../Componenti/Organismi/Loader/Loader";
import { FormDiContatto } from "../../Componenti/Sezioni/Form/FormDiContatto";
import { VAE } from "../../Componenti/Sezioni/VAE/VAE";
import { AcademicsSezione } from "../../Componenti/Sezioni/AcademicsSezione/AcademicsSezione";
import { CorsiSezione } from "../../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import { AllFacolta } from "../../Componenti/Sezioni/AllFacolta/AllFacolta";

export function AcademicAvenuesMobile() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  React.useEffect(() => {
    fetch("/copy/academicavenues.json")
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
    <main id="academic-avenues-m">
      <section className="hero-section">
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong> <br />
          <i>{copy.hero[1]}</i>
        </h1>
        <p className="page-subtitle">{copy.hero[2]}</p>
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
      <AcademicsSezione />
      <Striscia />
      <AllFacolta />
      <VAE />
      <FormDiContatto />
      <CorsiSezione />
      <div className="divider" />
    </main>
  );
}
