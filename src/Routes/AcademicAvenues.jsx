import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { coursessData, partnersData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import "./academic-avenues.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";

export function AcademicAvenues() {
  const navigate = useNavigate();
  return (
    <main id="academic-avenues">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <i>academic avenues:</i>{" "}
          <strong>dove la conoscenza incontra la passione</strong>
        </h1>
        <p className="page-subtitle">
          Esplora le nostre facoltà, corsi e opportunità uniche di
          apprendimento.
        </p>
        <Button
          style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="contattaci"
        >
          Esplora il portale
        </Button>
      </section>
      <section id="academics-section">
        <FacultyCarousel style={{ gridColumn: "1/13", gridRow: 1 }} />
        <h3>
          Riscopri L’alta formazione: Realizza il Tuo Sogno Accademico con HETG.
        </h3>
        <PlusIcon style={{ gridColumn: 7 }} />
        <p className="txt-white body">
          L’offerta formativa di HETG spazia da lauree triennali e magistrali, a
          master di primo e secondo livello, fino ai prestigiosi dottorati di
          ricerca.
        </p>
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
          path="orientamento"
        >
          Orientamento
        </Button>
      </div>
      <section id="vae-section">
        <h2>
          Nel cuore della visione di HETG, la Valutazione Accademica
          dell’Esperienza (VAE) emerge come un pilastro fondamentale.
        </h2>
        <p>
          Riconoscendo che l’apprendimento e la crescita possono avvenire al di
          fuori delle tradizionali aule universitarie, la VAE celebra e
          valorizza le esperienze lavorative e professionali dei candidati.
        </p>
        <PlusIcon
          isRed
          style={{
            gridColumn: 2,
            gridRow: "2",
            alignSelf: "center",
            margin: "2rem 0",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 4,
            gridRow: "2",
            alignSelf: "center",
            margin: "2rem 0",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 9,
            gridRow: "2",
            alignSelf: "center",
            margin: "2rem 0",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 11,
            gridRow: "2",
            alignSelf: "center",
            margin: "2rem 0",
          }}
        />
        <Button
          style={{ position: "relative", gridRow: 3, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="vae-form"
        >
          Valuta la tua esperienza
        </Button>
      </section>
      <section id="form-section-home">
        <h2 className="section-title">
          Apri la Porta al Tuo Futuro: <br />
          Ammissioni Ora Aperte!
        </h2>
        <PlusIcon
          isRed
          style={{
            gridColumn: 7,
            gridRow: "1",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 11,
            gridRow: "1",
          }}
        />
        <p>
          Nel cuore della missione di HETG c'è il desiderio di rendere l’alta
          formazione accessibile e significativa per tutti, indipendentemente
          dal percorso di vita intrapreso. Se senti che il tempo e le
          circostanze ti hanno tenuto lontano dal realizzare il tuo sogno
          accademico, siamo qui per aiutarti.
          <br />
          Compilando il nostro form, avrai l'opportunità di entrare in contatto
          con un consulente d'iscrizione personale, pronto ad assisterti in ogni
          fase del processo. E grazie alla nostra Valutazione Accademica
          dell'Esperienza (VAE), la tua preziosa esperienza lavorativa può
          essere convertita in crediti formativi, avvicinandoti ancora di più al
          tuo obiettivo.
          <br />
          Non aspettare, il tuo futuro accademico ti aspetta.
        </p>
        <form>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            id="cognome"
            name="cognome"
            placeholder="Cognome"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Telefono"
            required
          />
          <textarea
            id="messaggio"
            name="messaggio"
            rows="4"
            placeholder="Messaggio"
            required
          ></textarea>
          <div className="form-group">
            <input type="checkbox" id="privacy" name="privacy" required />
            <label htmlFor="privacy">
              Accetto la{" "}
              <a onClick={() => navigate("/policies")}>privacy policy</a>
            </label>
          </div>
          <button type="submit">Invia</button>
        </form>
        <PlusIcon
          isRed
          style={{
            gridColumn: 2,
            gridRow: "3",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 5,
            gridRow: "3",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 7,
            gridRow: "3",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 9,
            gridRow: "3",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 12,
            gridRow: "3",
          }}
        />
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
