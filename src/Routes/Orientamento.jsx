import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";
export function Orientamento() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  const [links, setLinks] =  React.useState({
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
        setCopy(data.it.Orientamento);
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
            path="linktree"
          >
            {copy.content[2]}
          </Button>
        )}
      </section>

      <div className="divider" />
    </main>
  );
}
