import React, { useEffect } from "react";
import { Button } from "../../Componenti/Molecole/Buttons/Button";
import { Striscia } from "../../Componenti/Molecole/Striscia/Striscia";
import { useNavigate } from "react-router-dom";
import "../academic-avenues.scss";
import { Loader } from "../../Componenti/Organismi/Loader/Loader";
import { FormDiContatto } from "../../Componenti/Sezioni/Form/FormDiContatto";
import { VAE } from "../../Componenti/Sezioni/VAE/VAE";
import { AcademicsSezione } from "../../Componenti/Sezioni/AcademicsSezione/AcademicsSezione";
import { CorsiSezione } from "../../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import { AllFacolta } from "../../Componenti/Sezioni/AllFacolta/AllFacolta";
import { Helmet } from "react-helmet";

export function AcademicAvenuesMobile() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  React.useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setCopy(data.it.AcademicAvenues);
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
      <Helmet>
        <title>HETG - Offerta Formativa</title>
        <meta name="description" content="HETG - Offerta Formativa" />
      </Helmet>
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
