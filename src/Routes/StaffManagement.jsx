import React, { useEffect, useState } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { partnersData, coursessData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getDocenti, getPagina, getStaff } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import "./staff-management.scss";
import { CorsiSezione } from "../Componenti/Sezioni/CorsiSezione/CorsiSezione";
import { OrientamentoSezione } from "../Componenti/Sezioni/OrientamentoSezione/OrientamentoSezione";
import arrow_right from "../assets/arrow-right.png";

export function StaffManagement() {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);
  const [docenti, setDocenti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copy, setCopy] = useState(null);
  const [activeTab, setActiveTab] = useState("Magnifico Rettore");

  const tabs = [
    { title: "Magnifico Rettore", role: "Magnifico Rettore" },
    { title: "Prorettore", role: "Prorettore" },
    { title: "Direttore Generale", role: "Direttore Generale" },
    { title: "Senato Accademico", role: "Senato Accademico" },
    { title: "Nucleo di Valutazione", role: "Nucleo di Valutazione" },
    { title: "Commissione Qualità", role: "Commissione Qualità" },
  ];
  const changeTab = (role) => {
    setActiveTab(role);
  };
  //RECUPERA I COPY
  useEffect(() => {
    fetch("/copy/staffmanagement.json")
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
  });
  //Recupera Staff e Docenti
  useEffect(() => {
    fetchStaffAndDocenti();
    // Recupera il file JSON da public/copy
  }, []);
  const fetchStaffAndDocenti = async () => {
    try {
      // Recupera i dati dello staff
      const staffData = await getStaff();
      staffData.sort((a, b) => a.nome.localeCompare(b.nome));

      setStaff(staffData);

      // Recupera i dati dei docenti
      const docentiData = await getDocenti();
      docentiData.sort((a, b) => a.nome.localeCompare(b.nome));
      setDocenti(docentiData);
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading && !copy) {
    return <Loader />;
  }

  return (
    <main id="staff-management">
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
      </section>
      <Striscia />
      <OrientamentoSezione />
      <Striscia />
      <section className="staff-section">
        <h2>{copy.staff[0]}</h2>

        <div className="container-t">
          <div className="tab-headers">
            {tabs.map((tab) => (
              <h4
                key={tab.role}
                className={activeTab === tab.role ? "active" : ""}
                onClick={() => changeTab(tab.role)}
              >
                {tab.title}
              </h4>
            ))}
          </div>
          <div className="cards-container">
            {docenti
              .filter((person) => person.ruolo?.includes(activeTab))
              .sort((a, b) => {
                // Controlla se il ruolo contiene le parole chiave seguite da activeTab
                const roleA = a.ruolo.toLowerCase();
                const roleB = b.ruolo.toLowerCase();
                const activeTabLower = activeTab.toLowerCase();
                const isPresidenteA = roleA.includes(
                  `presidente ${activeTabLower}`
                );
                const isDirettoreA = roleA.includes(
                  `direttore ${activeTabLower}`
                );
                const isPresidenteB = roleB.includes(
                  `presidente ${activeTabLower}`
                );
                const isDirettoreB = roleB.includes(
                  `direttore ${activeTabLower}`
                );

                // Assegna un peso maggiore ai ruoli di "presidente" e "direttore" solo se seguiti da activeTab
                const weightA = isPresidenteA || isDirettoreA ? 1 : 0;
                const weightB = isPresidenteB || isDirettoreB ? 1 : 0;

                // Ordina prima per peso, poi per nome se il peso è uguale
                return weightB - weightA || a.nome.localeCompare(b.nome);
              })
              .map((person) => (
                <div
                  className="staff-card"
                  key={person.id}
                  style={{ backgroundImage: "url(" + person.imageUrl + ")" }}
                >
                  <div
                    className="staff-cta"
                    onClick={() => navigate("/person/" + person.id)}
                  >
                    <span>Prof. {person.nome}</span>
                    <img className="arrow" src={arrow_right} />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 5, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 12, gridRow: 4 }} />
      </section>
      <section className="staff-section">
        <h2>{copy.staff[2]}</h2>
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
      <section className="staff-section">
        <h2>Presidi di Facoltà</h2>
        <div className="cards-container">
          {docenti
            .filter((person) => person.ruolo?.includes("Preside Facoltà"))
            .map((person) => (
              <div className="staff-wrapp">
                <span>
                  {person.ruolo
                    .split("-")
                    .find((r) => r.includes("Preside Facoltà"))}
                </span>
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
      <section className="staff-section">
        <h2>{copy.staff[1]}</h2>
        <div className="cards-container">
          {docenti.map((person) => (
            <div className="docenti-wrap">
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
                  {" "}
                  {/* Cambia il percorso come necessario */}
                  <span>Prof. {person.nome}</span>
                  <img className="arrow" src={arrow_right} />
                </div>
              </div>
              <span>
                {(() => {
                  const ruoloParts = person.ruolo
                    ?.split("-")
                    .map((part) => part.trim());
                  const docentePart = ruoloParts?.find((part) =>
                    part.includes("Docente")
                  );
                  return docentePart || (ruoloParts?.[0] ?? "");
                })()}
              </span>
            </div>
          ))}
        </div>
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 5, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 12, gridRow: 4 }} />
      </section>

      <CorsiSezione />
      <div className="divider" />
    </main>
  );
}
