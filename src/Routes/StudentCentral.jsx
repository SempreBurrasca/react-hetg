import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { partnersData, coursessData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { ContattiList } from "../Componenti/Molecole/ContattiList/ContattiList";
import { StaffCarousel } from "../Componenti/Organismi/StaffCarousel/StaffCarousel";
import "./student-central.scss";
import { Faq } from "../Componenti/Molecole/Faq/Faq";

export function StudentCentral() {
  const navigate = useNavigate();
  return (
    <main id="student-central">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <i>Student Central:</i>
          <br />
          <strong>Il tuo punto di riferimento in HETG</strong>
        </h1>
        <p className="page-subtitle">
          Tutte le risorse e le informazioni di cui hai bisogno, in un unico
          luogo.
        </p>
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
          Accedi al portale
        </Button>
      </section>

      <Striscia />
      <section id="orientamento-section">
        <h2>naviga l'orientamento HETG</h2>
        <p>
          Non sei sicuro di quale percorso sia il migliore per te? Lascia che ti
          guidiamo. L’orientamento HETG è stato progettato per aiutarti a
          scoprire e a comprendere meglio le tue opzioni accademiche.
        </p>
        <Button
          style={{ gridRow: 3, gridColumn: "6/8" }}
          borderradius="bottom-left-radius top-left-radius bottom-right-radius top-right-radius"
          path="orientamento"
          angleposition={{ overTopRight: false, underBottomRight: false }}
        >
          Orientamento
        </Button>
      </section>
      <Striscia />

      <section id="contatti-section">
        <h2>Sempre al Tuo Fianco, Ogni Passo del Cammino.</h2>
        <p>
          In ogni fase del tuo percorso accademico, HETG è con te. Non sei mai
          solo nella tua avventura educativa; siamo qui per supportarti,
          guidarti e rispondere a ogni tua domanda.
        </p>
        <h3>Contatti utili</h3>
        <ContattiList />
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 4, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 11, gridRow: 4 }} />
      </section>
      <section id="faq-section">
        <h2>Chiarimenti al Tuo Servizio: Le Risposte che Cerchi.</h2>
        <p>
          Nel corso del tuo viaggio accademico con HETG, potresti avere domande
          o curiosità. Ecco perché abbiamo raccolto le domande più frequenti
          poste dalla nostra comunità studentesca e fornito risposte chiare e
          dirette. Questa sezione è stata creata pensando a te, per aiutarti a
          navigare con sicurezza nel tuo percorso di studi. Se non trovi la
          risposta che stai cercando, ricorda: siamo sempre qui per aiutarti.
        </p>
        <Faq />
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 4, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 11, gridRow: 4 }} />
      </section>
      <Striscia />
      <section id="staff-management">
        <div className="content-wrapper">
          <h2 className="section-title">Architetti del futuro educativo</h2>
          <p className="section-subtitle">
            Dietro ogni grande istituzione ci sono menti visionarie, e HETG non
            fa eccezione. Il nostro team di gestione è composto da individui
            dedicati che hanno dedicato la loro vita all’istruzione e
            all’innovazione. Guidati dal rettore, Prof. Antonino Galloni, questi
            leader hanno unito le loro diverse esperienze e competenze per
            creare un’università telematica che risponde alle esigenze del
            presente e anticipa le sfide del futuro. <br />
            <br />
            Ogni decisione, ogni iniziativa, ogni corso offerto riflette la loro
            dedizione a fornire un’istruzione di qualità, accessibile e
            rilevante. Ma più di tutto, il nostro management crede fermamente
            nel potenziale di ogni studente. Essi vedono HETG non solo come un
            luogo di apprendimento, ma come una piattaforma dove gli studenti
            possono scoprire se stessi, le loro passioni e il loro posto nel
            mondo. <br />
            <br />
            Mentre continuiamo a navigare nell’evoluzione dell’istruzione
            superiore, puoi essere certo che il team di gestione di HETG sarà
            alla guida, assicurando che l’università rimanga all’avanguardia e
            fedele alla sua missione.
          </p>
        </div>
        <StaffCarousel
          style={{ gridColumn: "7/12", gridRow: 1, justifySelf: "end" }}
        />
      </section>
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
          Vedi tutto lo staff
        </Button>
      </div>
      <section id="corsi-section">
        <div className="black-row">
          <p>
            Nel mondo in rapida evoluzione di oggi, l’apprendimento continuo è
            la chiave per rimanere al passo con le innovazioni e le tendenze
            emergenti. Ecco perché HETG ha creato l’Academy: una selezione
            esclusiva di corsi di specializzazione progettati per offrirti le
            competenze più richieste nel mercato del lavoro attuale.
            <br />
            Ogni corso Academy è stato curato da esperti del settore e pensato
            per offrire un’esperienza di apprendimento flessibile e
            approfondita. E la parte migliore? Non è necessaria alcuna
            ammissione. Sei libero di esplorare e acquistare i corsi che
            rispondono alle tue esigenze e interessi, studiando al tuo ritmo,
            nel comfort della tua casa o ovunque tu scelga.
            <br />
            Che tu sia un professionista che cerca di aggiornare le sue
            competenze, un appassionato di un particolare argomento o
            semplicemente curioso di esplorare nuovi orizzonti, l’Academy di
            HETG ti offre l’opportunità di crescere e prosperare. Immergiti in
            un mondo di conoscenza senza barriere e inizia oggi il tuo viaggio
            di specializzazione.
          </p>
        </div>
        <div className="white-row">
          <h2 className="section-title">
            Specializzati con Academy: La Tua Aula, Il Tuo Ritmo
          </h2>
        </div>
        <div className="black-row-2">
          <Button
            style={{ position: "relative", gridRow: 1, gridColumn: "10/13" }}
            angleposition={{
              overTopRight: true,
              underBottomRight: true,
            }}
            borderradius="bottom-left-radius top-left-radius"
            path="academic-avenues/academy-courses"
          >
            Scopri tutti gli Academy Courses
          </Button>
        </div>
        <CoursesCarousel partners={coursessData} />
      </section>
      <div className="divider" />
    </main>
  );
}
