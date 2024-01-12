import React, { useEffect, useState } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { partnersData, coursessData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import {
  getDocenti,
  getPagina,
  getStaff,
  getOrdini,
} from "../Firebase/RecuperoCopy";
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
  const [ordineSenatoAccademico, setOrdineSenatoAccademico] = useState([]);
  const [ordineNucleoDiValutazione, setOrdineNucleoDiValutazione] = useState(
    []
  );
  const [ordineCommissioneQualita, setOrdineCommissioneQualita] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);

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
  // Nel tuo useEffect che recupera gli ordini, aggiorna anche l'ordine corrente
  useEffect(() => {
    async function fetchOrdini() {
      try {
        const ordiniData = await getOrdini();
        if (ordiniData) {
          setOrdineSenatoAccademico(ordiniData.senatoAccademico.split(","));
          setOrdineNucleoDiValutazione(
            ordiniData.nucleoDiValutazione.split(",")
          );
          setOrdineCommissioneQualita(ordiniData.commissioneQualita.split(","));

          // In base all'activeTab attuale, imposta l'ordine corrente
          switch (activeTab) {
            case "Senato Accademico":
              setCurrentOrder(
                ordiniData.senatoAccademico
                  .split(",")
                  .map((item) => item.trim())
              );
              break;
            case "Nucleo di Valutazione":
              setCurrentOrder(
                ordiniData.nucleoDiValutazione
                  .split(",")
                  .map((item) => item.trim())
              );
              break;
            case "Commissione Qualità":
              setCurrentOrder(
                ordiniData.commissioneQualita
                  .split(",")
                  .map((item) => item.trim())
              );
              break;
            default:
              setCurrentOrder([]); // Imposta l'ordine corrente come vuoto per le altre schede
              break;
          }
        }
        console.log(currentOrder);
      } catch (error) {
        console.error("Errore durante il recupero degli Ordini:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrdini();
  }, [activeTab]); // Aggiungi activeTab come dipendenza
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
                if (
                  activeTab === "Senato Accademico" ||
                  activeTab === "Nucleo di Valutazione" ||
                  activeTab === "Commissione Qualità"
                ) {
                  const indexA = currentOrder.indexOf(a.nome.trim());
                  const indexB = currentOrder.indexOf(b.nome.trim());

                  // Se uno dei nomi non è presente nell'array currentOrder, posizionalo alla fine
                  if (indexA === -1 && indexB === -1) {
                    return a.nome.localeCompare(b.nome);
                  } else if (indexA === -1) {
                    return 1;
                  } else if (indexB === -1) {
                    return -1;
                  } else {
                    return indexA - indexB;
                  }
                } else {
                  const weightA = a.weight;
                  const weightB = b.weight;

                  if (weightA !== undefined && weightB !== undefined) {
                    return weightA - weightB;
                  } else if (weightA !== undefined) {
                    return -1;
                  } else if (weightB !== undefined) {
                    return 1;
                  } else {
                    return a.nome.localeCompare(b.nome);
                  }
                }
              })
              .map((person) => (
                <div
                  className="staff-card"
                  key={person.id}
                  style={{ backgroundImage: `url(${person.imageUrl})` }}
                >
                  <div
                    className="staff-cta"
                    onClick={() => navigate("/person/" + person.id)}
                  >
                    <span>
                      {person.titolo ? person.titolo : "Prof."}{" "}
                      {person.nomeCognome[1].trim()}{" "}
                      {person.nomeCognome[0].trim()}
                    </span>
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
      {/*Segreteria*/}
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
      <section className="staff-section">
        <h2>Presidi di Facoltà</h2>
        <div className="cards-container">
          {docenti
            .filter((person) => person.ruolo?.includes("Preside della Facoltà"))
            .map((person) => (
              <div className="staff-wrapp">
                <div
                  className="staff-card"
                  key={person.id}
                  style={{ backgroundImage: "url(" + person.imageUrl + ")" }}
                >
                  <div
                    className="staff-cta"
                    onClick={() => navigate("/person/" + person.id)}
                  >
                    <span>
                      Prof. {person.nomeCognome[1]} {person.nomeCognome[0]}
                    </span>
                    <img className="arrow" src={arrow_right} />
                  </div>
                </div>
                <span
                  style={{
                    maxWidth: "200px",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  {person.ruolo
                    .split("-")
                    .find((r) => r.includes("Preside della Facoltà"))

                    .trim()}
                </span>
              </div>
            ))}
        </div>
      </section>

      <section className="staff-section">
        <h2>{copy.staff[1]}</h2>
        <div className="cards-container">
          {docenti
            .sort((a, b) => {
              const weightA = a.weight;
              const weightB = b.weight;

              // Verifica se weightA è definito (non è null o undefined)
              if (weightA !== undefined && weightB !== undefined) {
                // Ordina in base al peso in ordine crescente
                return weightA - weightB;
              } else if (weightA !== undefined) {
                // Se solo weightA è definito, metti a davanti a b
                return -1;
              } else if (weightB !== undefined) {
                // Se solo weightB è definito, metti b davanti a a
                return 1;
              } else {
                // Se nessuno dei due ha weight definito, ordina per nome
                return a.nome.localeCompare(b.nome);
              }
            })
            .map(
              (person) =>
                person.id !== "TNAN5JWXX59oAw9VW0Qg" && (
                  <div className="docenti-wrap">
                    <div
                      className="staff-card"
                      key={person.id}
                      style={{
                        backgroundImage: "url(" + person.imageUrl + ")",
                      }}
                    >
                      {/* Presumo che l'oggetto person abbia una proprietà nome */}
                      <div
                        className="staff-cta"
                        onClick={() => navigate("/person/" + person.id)}
                      >
                        {" "}
                        {/* Cambia il percorso come necessario */}
                        <span>
                          Prof. {person.nomeCognome[1]} {person.nomeCognome[0]}
                        </span>
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
                )
            )}
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
