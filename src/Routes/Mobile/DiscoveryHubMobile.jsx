import React, { useEffect } from "react";
import { Button } from "../../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { Striscia } from "../../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { partnersData } from "../../assets/data";
import { useNavigate } from "react-router-dom";
import { getPagina } from "../../Firebase/RecuperoCopy";
import { Loader } from "../../Componenti/Organismi/Loader/Loader";

import "./mobile.scss";
import { FormDiContatto } from "../../Componenti/Sezioni/Form/FormDiContatto";
import { PartnerSection } from "../../Componenti/Sezioni/Partner/PartnerSection";
import { VAE } from "../../Componenti/Sezioni/VAE/VAE";
import { AcademicsSezione } from "../../Componenti/Sezioni/AcademicsSezione/AcademicsSezione";
import bg1 from '../../assets/bg-conn3.png'
import bg2 from '../../assets/bg-conn1.png'
import bg3 from '../../assets/bg-conn2.png'
export function DiscoveryHubMobile() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const paginaId = "2wnMSASOVjSAVb5AhTQH";
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
      setCopy(data.it.DiscoveryHub);
    })
    .catch((error) => {
      console.error("Error fetching the copy data:", error);
    });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="discovery-hub-m">
      <section className="hero-section">
        <h1 className="page-title">
        <strong>{copy.hero[0]}</strong> <br />
          <i>{copy.hero[1]}</i>
        </h1>
        <p className="page-subtitle">
        {copy.hero[2]}
        </p>

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
      <section id="about-section-m">
        <h2>
        {copy.about[0]}
        </h2>
        <p>
        {copy.about[1]}
        </p>

        <Button
          style={{ justifyContent: "center" }}
          angleposition={{
            overTopRight: false,
            underBottomRight: false,
          }}
          borderradius="bottom-left-radius top-left-radius top-right-radius bottom-right-radius"
          path="legacy-lane"
        >
          {copy.about[2]}
        </Button>
      </section>
      <section id="advantages-section-m">
        <h2 className="section-title">
        {copy.advantages[0]}
        </h2>
        <div className="cards">
          <div className="card">
            <div className="card-image" style={{backgroundImage:"url("+bg1+")"}}></div>
            <div className="card-content">
            <h3>{copy.advantages[1]}</h3>
              <p>
              {copy.advantages[2]}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image" style={{backgroundImage:"url("+bg2+")"}}></div>
            <div className="card-content">
            <h3>{copy.advantages[3]}</h3>
              <p>
              {copy.advantages[4]}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image" style={{backgroundImage:"url("+bg3+")"}}></div>
            <div className="card-content">
            <h3>{copy.advantages[5]}</h3>
              <p>
              {copy.advantages[6]}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Striscia />
      <AcademicsSezione/>
      <Striscia />

      <VAE/>
      <FormDiContatto/>
      <PartnerSection/>
      <div className="divider" />
    </main>
  );
}
