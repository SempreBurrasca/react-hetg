import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { CorsiSezione } from "../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import { OrientamentoSezione } from "../Componenti/Sezioni/OrientamentoSezione/OrientamentoSezione";
import "./gateway-growth.scss";
export function GatewayToGrowth() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
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
        setCopy(data.it.GatewayToGrowth);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="gateway-growth">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong>
          <br /> <i>{copy.hero[1]}</i>
        </h1>
        <p className="page-subtitle">{copy.hero[2]}</p>
        <PlusIcon style={{ gridColumn: 5, gridRow: 4, alignSelf: "center" }} />
        <PlusIcon style={{ gridColumn: 9, gridRow: 4, alignSelf: "center" }} />
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
        <p>
          <strong>{copy.about[1]}</strong>
          <br />
          {copy.about[2]}
          <br /> <br />
          <strong>{copy.about[3]}</strong> <br />
          {copy.about[4]} <br /> <br />
          <strong>{copy.about[5]}</strong>
          <br />
          {copy.about[6]}
          <br />
          {copy.about[7]}
        </p>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <Button
          style={{ position: "relative", gridRow: 5, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="ammissione"
        >
          {copy.about[8]}
        </Button>
       {/* <h3 className="second">{copy.about[9]}</h3>
        <p className="second">{copy.about[10]}</p>*/}
      </section>

      <Striscia />
      <OrientamentoSezione />
      <Striscia />

      <VAE />

      <CorsiSezione />
      <div className="divider" />
    </main>
  );
}
