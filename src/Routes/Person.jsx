import React, { useEffect, useState } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useNavigate, useParams } from "react-router-dom";

import { getDocentiById, getStaffById } from "../Firebase/RecuperoCopy";
import "./person.scss";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { TestoConAcapo } from "../Componenti/Molecole/TestoACapo/TestoAcapo";

export function Person() {
  const navigate = useNavigate();
  const { personId } = useParams();
  const [fetching, setFetching] = useState(true);
  const [person, setPerson] = useState(null);
  const [fullText, setFullText] = useState("");

  const [error, setError] = useState("");
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    fetchPerson(); // Richiama la funzione per recuperare i dati della persona all'avvio del componente
  }, [personId]); // Aggiungi personId come dipendenza per rifetchare quando cambia

  useEffect(() => {
    if (fullText) {
      // Dividi il testo completo in sezioni basate sui titoli
      const sections = fullText.split(/\\(.*?)\\/).filter(Boolean);

      // Ora hai un array dove ogni elemento dispari è un titolo e ogni elemento pari è il contenuto
      // ["Descrizione", "Questa è la sezione della descrizione. ", "Qualifiche Accademiche", "Qui vanno le qualifiche.", "Titoli Professionali", "I titoli professionali vanno qui."]

      // Creare un oggetto che mappa ogni titolo al suo contenuto
      const sectionsMap = {};
      for (let i = 0; i < sections.length; i += 2) {
        const title = sections[i].trim();
        const content = sections[i + 1].trim();
        sectionsMap[title] = content;
      }

      // Imposta lo stato per ogni sezione
      setIntro(sectionsMap["Descrizione"] || "");
      setAcademicQualifications(sectionsMap["Qualifiche Accademiche"] || "");
      setProfessionalTitles(sectionsMap["Titoli Professionali"] || "");
      setProfessionalExperiences(
        fullText
          .substring(
            professionalExperiencesIndex + professionalExperiencesTitle.length,
            publicationsIndex
          )
          .trim()
      );
      setPublications(
        fullText.substring(publicationsIndex + publicationsTitle.length).trim()
      );
    }
  }, [fullText]);

  const parseFullText = (fullText) => {
    const regex = /\\(.*?)\\/g;
    let match;
    let lastIndex = 0;
    const newTabs = [];

    while ((match = regex.exec(fullText)) !== null) {
      const title = match[1].trim();
      const contentStart = regex.lastIndex;
      const contentEnd = fullText.indexOf("\\", contentStart);

      const content = fullText.substring(contentStart, contentEnd).trim();
      newTabs.push({ title, content });

      lastIndex = contentEnd;
    }

    setTabs(newTabs);
    if (newTabs.length > 0) {
      setSelectedTab(newTabs[0].title);
    }
  };

  const handleTabClick = (tabTitle) => {
    setSelectedTab(tabTitle);
  };

  const renderContent = () => {
    const currentTab = tabs.find((tab) => tab.title === selectedTab);
    return currentTab ? currentTab.content : null;
  };

  const fetchPerson = async () => {
    setFetching(true);
    let personData;
    try {
      personData = await getDocentiById(personId);
    } catch (docenteError) {
      try {
        personData = await getStaffById(personId);
      } catch (staffError) {
        console.error("Errore durante il recupero dei dati:", staffError);
        setError(staffError); // Gestisci l'errore qui
      }
    }

    if (personData) {
      setPerson(personData);
      parseFullText(personData.descrizione || "");
    }
    setFetching(false);
  };

  // Se i dati sono ancora in fase di recupero, mostra il componente Loader
  if (fetching) {
    return <Loader />;
  }
  return (
    <main id="person">
      <section className="hero-section">
        <div className="content">
          <h2>{person?.nome || "Nome non disponibile"}</h2>
          <h3>Ruolo: {person?.ruolo}</h3>
          <Button
          style={{
            width:"100%",
            display:"flex",
          }}
            borderradius="bottom-left-radius top-left-radius bottom-right-radius top-right-radius"
            path={"/uploads/cv/" + person.nome.replace(/\s+/g, '-') + "_CV.pdf"}
            angleposition={{ overTopRight: false, underBottomRight: false }}
            isExternal
          >
            Download Curriculum Vitae
          </Button>
          <div
            className="divider"
            style={{ margin: "10px 0", height: "2px" }}
          />
          <div className="tab-header">
            {tabs.map((tab) => (
              <h4
                key={tab.title}
                className={selectedTab === tab.title ? "active" : ""}
                onClick={() => handleTabClick(tab.title)}
              >
                {tab.title}
              </h4>
            ))}
          </div>
          <div className="tab-content">
            <p>
              <TestoConAcapo testo={renderContent()} />
            </p>
          </div>

        </div>
        <div className="image">
          <img src={person.imageUrl} />
          
        </div>

      </section>
    </main>
  );
}
