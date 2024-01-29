import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { FormDiContatto } from "../Componenti/Sezioni/Form/FormDiContatto";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { AcademicsSezione } from "../Componenti/Sezioni/AcademicsSezione/AcademicsSezione";
import { CorsiSezione } from "../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import "./academic-avenues.scss";
import { AllFacolta } from "../Componenti/Sezioni/AllFacolta/AllFacolta";
import { Helmet } from "react-helmet";

export function AcademicAvenues() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const [links, setLinks] = React.useState({
    piattaforma: "#",
    xcom: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  });
  useEffect(() => {
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

    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setLinks(data.it.links);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="academic-avenues">
      <Helmet>
        <title>Unicampus HETG</title>
        <meta name="description" content="Unicampus HETG" />
      </Helmet>
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong> <i>{copy.hero[1]}</i>
        </h1>
        <p className="page-subtitle">{copy.hero[2]}</p>
        <Button
          style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="linktree"
        >
          {copy.hero[3]}
        </Button>
      </section>
      <AcademicsSezione />
      <Striscia />
      <div id="cta-faculty-wrapper">
        <Button
          style={{ position: "relative", left: "1rem", top: "-4rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="orientamento"
        >
          {copy.academics[0]}
        </Button>
      </div>
      <AllFacolta />
      <VAE />

      <FormDiContatto />
      <CorsiSezione />
      <div className="divider" />
    </main>
  );
}
