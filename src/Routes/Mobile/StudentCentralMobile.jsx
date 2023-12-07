import React, { useEffect } from "react";
import { Button } from "../../Componenti/Molecole/Buttons/Button";
import { Striscia } from "../../Componenti/Molecole/Striscia/Striscia";
import { partnersData, coursessData } from "../../assets/data";
import { useNavigate } from "react-router-dom";
import { CoursesCarousel } from "../../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { ContattiList } from "../../Componenti/Molecole/ContattiList/ContattiList";
import { Faq } from "../../Componenti/Molecole/Faq/Faq";
import { getPagina, getStaff } from "../../Firebase/RecuperoCopy";
import { Loader } from "../../Componenti/Organismi/Loader/Loader";
import "./mobile.scss";
import { CorsiSezione } from "../../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import { StaffSezione } from "../../Componenti/Sezioni/StaffSezione/StaffSezione";
import { OrientamentoSezione } from "../../Componenti/Sezioni/OrientamentoSezione/OrientamentoSezione";
import arrow_right from "../../assets/arrow-right.png";

export function StudentCentralMobile() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const [staff, setStaff] = React.useState([]);
  React.useEffect(() => {
    fetchStaffAndDocenti();
  }, []);
 
  React.useEffect(() => {
    fetch("/copy/studentcentral.json")
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
  const fetchStaffAndDocenti = async () => {
    try {
      // Recupera i dati dello staff
      const staffData = await getStaff();
      staffData.sort((a, b) => a.nome.localeCompare(b.nome));

      setStaff(staffData);
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    } finally {
      setLoading(false);
    }
  };
  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="student-central-m">
      <section className="hero-section">
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong>
          <br />
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

      <Striscia />
      <OrientamentoSezione />
      <Striscia />

      <section id="contatti-section-m">
        <h2>{copy.contatti[0]}</h2>
        <p>{copy.contatti[1]}</p>
        <h3>{copy.contatti[2]}</h3>
        <ContattiList />
      </section>
      <section id="staff-segreteria">
        <div className="cards-container">
          {staff.map((person) => (
            <div className="staff-wrapp">
              <span>{person.ruolo}</span>
              <div
                className="staff-card"
                key={person.id}
                style={{ backgroundImage: "url(" + person.imageUrl + ")" }}
              >
                {/* Presumo che l'oggetto person abbia una proprietà nome */}
                <div
                  className="staff-cta"
                  onClick={() => navigate("/person/" + person.id)}
                >
                  <span>{person.nome}</span>
                  <img className="arrow" src={arrow_right} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*  <section id="faq-section-m">
        <h2>{copy.faq[0]}</h2>
        <p>{copy.faq[1]}</p>
        <Faq />
        </section>*/}
      <Striscia />
      <StaffSezione type="staff" />
      <Striscia />

      <CorsiSezione />
      <div className="divider" />
    </main>
  );
}
