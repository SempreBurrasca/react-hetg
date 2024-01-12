import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";
export function UniAmericana() {
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
      <section className="document-section" id="vae" style={{paddingTop:"8rem"}}>
        <div className="spacer" />
        <h1>LAUREA AMERICANA A DISTANZA</h1>
        <h2>Laurea americana a distanza</h2>
        <p>
          L’European Institute of Technology è organizzata in maniera simile a
          quella delle Università americane e inglesi che operano
          prevalentemente in base al metodo cosiddetto del “Distance learning”,
          ossia la “Educazione a distanza”. Mentre i seminari e le conferenze
          fanno parte del metodo tradizionale o “Class-room”, Distance Learning
          Program, è un programma che ha fra i suoi obiettivi quello di
          realizzare un nuovo modello di apprendimento, progettato per dare a
          ogni studente un’opportunità per completare i vari corsi e superare
          gli esami, studiando a casa secondo un ritmo più consono alle
          disponibilità dello studente. Il sistema tutoriale controllerà e
          bilancerà il suo apprendimento ed esperienza didattica mediante una
          guida necessaria per giungere alla comprensione dell’argomento
          studiato.
        </p>
        <h2>Cosa è il “Distance Learning University”</h2>
        <p>
          A differenza del sistema universitario residenziale, tradizionale
          comunemente diffuso in Italia, il sistema definito “Distance Learning
          University ” è un sistema che adotta metodologie innovative di
          formazione in cui gli studenti interagiscono e comunicano con
          l’Università usando vari mezzi tecnici definiti “media”. L’interfaccia
          di comunicazione con le Università americane con cui operiamo avviene
          tramite i “media”, sia moderni che tradizionali come: telefono, fax,
          e-mail, computers, etc. Dei “Tutor” seguono costantemente ciascun
          allievo, direttamente o mediante seminari. Il ruolo della tradizionale
          lezione in classe è ridotto alle situazioni indispensabili, di
          approfondimento e controllo dell’apprendimento. I sistemi di studio
          ideali per il professionista L’attività didattico-scientifica adotta
          modalità innovative di formazione sviluppando particolari strategie
          per le varie lauree. Secondo il tipo di programma o corso di laurea
          viene concordata una differente via di apprendimento e una metodologia
          pedagogica in cui si tiene in grande considerazione la
          professionalità, giustamente valutata. I nuovi concetti di didattica
          consentono un apprendimento distribuito nel tempo e di sicuro
          successo, per cui i candidati al conseguimento delle lauree,
          partecipano ad un programma di studi in funzione del loro tempo
          disponibile e competenze. Le Facoltà di tipo umanistico, economico,
          sociale, si avvalgono quasi totalmente del distance learning.
          L’apprendimento proposto, è un processo attivo in cui si può
          selezionare il metodo di studio, determinando i tempi e il ritmo che
          meglio soddisfano le esigenze e consentire di giungere alla laurea
          americana a distanza. È, quindi, la migliore opportunità per chi ha
          una attività professionale e per chi ha dovuto abbandonare gli studi.
        </p>
        <h2>Ammissione, durata e conseguimento dei ” credit ” richiesti.</h2>
        <p>
          Il titolo italiano minimo per l’iscrizione al primo livello
          universitario americano, ossia al Bachelor Degree, è il possesso di un
          diploma di scuola superiore. Chi è in possesso di un diploma
          universitario o di un Bachelor’s Degree può invece iscriversi al
          Master’s Degree o al Doctor’s Degree delle università americane con la
          possibilità di usufruire di accrediti e di particolari riduzioni degli
          studi in caso di elevata esperienza aziendale nei settori
          dirigenziali. È possibile iscriversi da qualsiasi regione italiana.
          Uno speciale servizio “Tutorial Assistant” a distanza assicura
          l’apprendimento. Vi sono vari modi possibili per ottenere
          l’acquisizione dei “credits”, i fondamentali sono: 1° Seguendo
          normalmente corsi in aula o a distanza. 2° Trasferendo votazioni di
          esami universitari sostenuti in Italia o all’estero. 3° Accreditando
          punteggi per corsi speciali, aziendali, para-universitari o regionali.
          4° Valutando l’esperienza professionale in relazione alla posizione di
          prestigio acquisita, ai progetti e pubblicazioni. Tutti gli esami
          vengono sostenuti in lingua italiana; i giudizi docimologici spettano,
          unicamente all’Università americana alla quale gli studenti sono
          iscritti. Quando il candidato avrà completato il programma, conseguirà
          ufficialmente la Laurea in originale della Università americana,
          proveniente direttamente dalla stessa università, con il Transcript
          degli esami sostenuti e voti. A richiesta verrà fornito il certificato
          di autentica (Apostille) e vidimazione rilasciato dal competente
          Ufficio governativo.
        </p>
        <h3>Per maggiori informazioni puoi contattare la segreteria.</h3>
        <div style={{padding:"2rem"}}>
        <Form/>
        </div>
      </section>
      <div className="divider" />
    </main>
  );
}
