import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import "./general-page.scss";

export function DiscoveryHub() {
  return (
    <main id="discovery-hub">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">UNICAMPUS HETG ARTES AD VITAM</h1>
        <p className="page-subtitle">
          L’università telematica Dove il tuo percorso incontra il futuro, senza
          barriere di tempo o spazio.
        </p>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 5, justifySelf: "end" }} />
        <Button
          style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
        >
          Inizia il tuo viaggio
        </Button>
      </section>
      <section id="about-section">
      <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h2>
          Telematica, innovativa, flessibile: realizza sogni accademici senza
          confini.
        </h2>
        <p>
          Nel cuore digitale di Ginevra, l’Università HETG emerge come un
          baluardo di innovazione e tradizione. Guidata dalla visione del Prof.
          Antonino Galloni, la nostra missione è chiara: abbattere le barriere
          dell’istruzione tradizionale, offrendo a imprenditori e leader la
          possibilità di realizzare sogni accademici rimasti in sospeso.
          Telematica, ma profondamente radicata nella prestigiosa eredità
          accademica svizzera, HETG rappresenta il futuro dell’educazione senza
          confini. Scopri di più sulla nostra storia in legacy lane
        </p>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <Button
          style={{ position:"relative",gridRow:5,gridColumn:"11/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
        >
          Visita legacy lane ora
        </Button>
      </section>
    </main>
  );
}
