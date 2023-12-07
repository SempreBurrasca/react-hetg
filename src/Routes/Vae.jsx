import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";
export function Vae() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  const paginaId = "1G46OZEOu2VdpX5S6aod";
  useEffect(() => {
    fetch("/copy/vae.json")
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
    <main id="contattaci">
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">{copy.content[0]}</h2>
          <p>{copy.content[1]}</p>
        </div>
        <Form />
        {!isMobile && (
          <Button
            style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
            angleposition={{
              overTopLeft: true,
              underBottomLeft: true,
            }}
            borderradius="bottom-right-radius top-right-radius"
            path="contattaci"
          >
            {copy.content[2]}
          </Button>
        )}
      </section>

      <div className="divider" />
    </main>
  );
}
