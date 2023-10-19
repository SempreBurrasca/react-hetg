import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { coursessData, partnersData } from "../assets/data";

import { useNavigate } from "react-router-dom";
import "./gateway-growth.scss";

export function GatewayToGrowth() {
  const navigate = useNavigate();
  return (
    <main id="gateway-growth">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <i>Gateway To Growth:</i>{" "}
          <strong>Il tuo prossimo passo insieme a HETG</strong>
        </h1>
        <p className="page-subtitle">
          Tutto ciò che devi sapere per iniziare il tuo viaggio accademico con
          noi.
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
      <section id="about-section">
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h2>Trova la Tua Strada, Illumina il Tuo Futuro con HETG.</h2>
        <p>
          <strong>Come Iscriversi a HETG:</strong>
          <br />
          Iniziare il tuo percorso accademico con HETG è un processo semplice e
          diretto.
          <br /> <br />
          <strong> Scegli il Tuo Corso:</strong> <br />
          Naviga nella sezione Academic Avenues e esplora la vasta gamma di
          corsi e programmi che offriamo. Che tu sia interessato alle scienze,
          alle arti, alla tecnologia o a qualsiasi altro campo, troverai
          sicuramente il corso che fa per te. <br /> <br />
          <strong>Inoltra il Form di Ammissione:</strong>
          <br /> Una volta scelto il corso, vai alla pagina di ammissione e
          compila il form di ammissione online. Assicurati di fornire tutte le
          informazioni richieste e di allegare eventuali documenti necessari.{" "}
          <br />
          Ecco fatto! Una volta inviato il form, il nostro team di ammissioni
          esaminerà la tua richiesta e ti contatterà per i prossimi passi. Se
          hai domande o hai bisogno di ulteriori informazioni durante il
          processo, non esitare a contattarci. Siamo qui per aiutarti in ogni
          fase del tuo viaggio con HETG.
        </p>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <Button
          style={{ position: "relative", gridRow: 5, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="ammissione"
        >
          Vai al form di ammissione
        </Button>
        <h3 className="second">
          Sei ancora indeciso sul percorso da intraprendere?
        </h3>
        <p className="second">
          Capita a tutti. Ma non preoccuparti, HETG è qui per aiutarti a
          scoprire la tua vera passione. Visita la nostra sezione Academic
          Avenues e immergiti nell’ampia gamma di facoltà che offriamo. Ogni
          facoltà è un mondo di opportunità, conoscenze e sfide.
        </p>
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
