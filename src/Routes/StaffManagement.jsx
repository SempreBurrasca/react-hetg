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
import { Faq } from "../Componenti/Molecole/Faq/Faq";
import "./staff-management.scss";
export function StaffManagement() {
  const navigate = useNavigate();
  return (
    <main id="staff-management">
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
      <section className="staff-section">
        <h2>Il management</h2>
        <div className="cards-container">
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
        </div>
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 5, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 12, gridRow: 4 }} />
      </section>
      <section className="staff-section">
        <h2>I Docenti</h2>
        <div className="cards-container">
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
          <div className="card" />
        </div>
        <PlusIcon isRed style={{ gridColumn: 2, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 5, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 9, gridRow: 4 }} />
        <PlusIcon isRed style={{ gridColumn: 12, gridRow: 4 }} />
      </section>

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
