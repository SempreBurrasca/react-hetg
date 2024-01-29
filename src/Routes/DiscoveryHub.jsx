import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { useNavigate } from "react-router-dom";
import "./general-page.scss";
import React from "react";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { FormDiContatto } from "../Componenti/Sezioni/Form/FormDiContatto";
import { PartnerSection } from "../Componenti/Sezioni/Partner/PartnerSection";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { AcademicsSezione } from "../Componenti/Sezioni/AcademicsSezione/AcademicsSezione";
import bg1 from "../assets/bg-conn3.png";
import bg2 from "../assets/bg-conn1.png";
import bg3 from "../assets/bg-conn2.png";
import { Helmet } from "react-helmet";

export function DiscoveryHub() {
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
    <main id="discovery-hub">
      <Helmet>
        <title>Unicampus HETG</title>
        <meta name="description" content="Unicampus HETG" />
      </Helmet>
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong> <br />
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
        <p>{copy.about[1]}</p>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <Button
          style={{ position: "relative", gridRow: 5, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="legacy-lane"
        >
          {copy.about[2]}
        </Button>
      </section>
      <section id="advantages-section">
        <h2 className="section-title">{copy.advantages[0]}</h2>
        <div className="cards">
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: "url(" + bg1 + ")" }}
            ></div>
            <div className="card-content">
              <h3>{copy.advantages[1]}</h3>
              <p>{copy.advantages[2]}</p>
            </div>
          </div>
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: "url(" + bg2 + ")" }}
            ></div>
            <div className="card-content">
              <h3>{copy.advantages[3]}</h3>
              <p>{copy.advantages[4]}</p>
            </div>
          </div>
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: "url(" + bg3 + ")" }}
            ></div>
            <div className="card-content">
              <h3>{copy.advantages[5]}</h3>
              <p>{copy.advantages[6]}</p>
            </div>
          </div>
        </div>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 5, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 9, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 12, gridRow: 5 }} />
      </section>
      <Striscia />
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
          {copy.academics[4]}
        </Button>
      </div>
      <VAE />
      <FormDiContatto />
      <PartnerSection />
      <div className="divider" />
    </main>
  );
}
