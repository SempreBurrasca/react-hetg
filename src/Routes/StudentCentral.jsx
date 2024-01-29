import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { useNavigate } from "react-router-dom";
import { ContattiList } from "../Componenti/Molecole/ContattiList/ContattiList";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { CorsiSezione } from "../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import { StaffSezione } from "../Componenti/Sezioni/StaffSezione/StaffSezione";
import { OrientamentoSezione } from "../Componenti/Sezioni/OrientamentoSezione/OrientamentoSezione";
import "./student-central.scss";
import arrow_right from "../assets/arrow-right.png";
import { getStaff } from "../Firebase/RecuperoCopy";
import { Helmet } from "react-helmet";

export function StudentCentral() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const [links, setLinks] = React.useState({
    piattaforma: "#",
    xcom: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  });
  const [staff, setStaff] = React.useState([]);
  useEffect(() => {
    fetchStaffAndDocenti();
    console.log(staff);
  }, []);
  useEffect(() => {
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

    fetch("/copy/links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setLinks(data.it);
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
    }
  };
  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="student-central">
      <Helmet>
        <title>Segreteria Studenti</title>
        <meta name="description" content="Segreteria Studenti - HETG" />
      </Helmet>
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
        <PlusIcon style={{ gridColumn: 5, gridRow: 4, alignSelf: "center" }} />
        <PlusIcon style={{ gridColumn: 9, gridRow: 4, alignSelf: "center" }} />
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

      <Striscia />
      <OrientamentoSezione />
      <Striscia />
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
                  <span>
                    {" "}
                    {person.titolo ? person.titolo : "Prof."}{" "}
                    {person.nomeCognome[1].trim()}{" "}
                    {person.nomeCognome[0].trim()}
                  </span>
                  <img className="arrow" src={arrow_right} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contatti-section">
        <h2>{copy.contatti[0]}</h2>
        <p>{copy.contatti[1]}</p>
        <h3>{copy.contatti[2]}</h3>
        <ContattiList />
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 4, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 11, gridRow: 4 }} />
      </section>

      {/* <section id="faq-section">
        <h2>{copy.faq[0]}</h2>
        <p>{copy.faq[1]}</p>
        <Faq />
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 4, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 11, gridRow: 4 }} />
        </section>*/}
      <Striscia />
      <StaffSezione type="staff" />
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
      <CorsiSezione />
      <div className="divider" />
    </main>
  );
}
