import React, { useEffect } from "react";
import { Button } from "../../../Componenti/Molecole/Buttons/Button";
import { coursessData, partnersData } from "../../../assets/data";
import { useNavigate } from "react-router-dom";
import "./corsi-sezione.scss";
import { CoursesCarousel } from "../../../Componenti/Molecole/CoursesCarousel/CoursesCarousel";

const cache = {};

export function CorsiSezione() {
  const navigate = useNavigate();

  return (
    <section id="corsi-sezione">
      <div className="row">
        <div className="black-row">
          <p>
            Nel mondo in rapida evoluzione di oggi, l’apprendimento continuo è
            la chiave per rimanere al passo con le innovazioni e le tendenze
            emergenti.
          </p>
        </div>
        <div className="white-row">
          <h2 className="section-title">
            SPECIALIZZATI CON ACADEMY: LA TUA AULA, IL TUO RITMO
          </h2>
        </div>
      </div>

      <div className="black-row-2">
        <div className="row">
          <p>
            Ecco perché HETG ha creato l’Academy: una selezione esclusiva di
            corsi di specializzazione progettati per offrirti le competenze più
            richieste nel mercato del lavoro attuale. Ogni corso Academy è stato
            curato da esperti del settore e pensato per offrire un’esperienza di
            apprendimento flessibile e approfondita. <br />E la parte migliore?
            Non è necessaria alcuna ammissione. Sei libero di esplorare e
            acquistare i corsi che rispondono alle tue esigenze e interessi,
            studiando al tuo ritmo, nel comfort della tua casa o ovunque tu
            scelga. Che tu sia un professionista che cerca di aggiornare le sue
            competenze, un appassionato di un particolare argomento o
            semplicemente curioso di esplorare nuovi orizzonti, l’Academy di
            HETG ti offre l’opportunità di crescere e prosperare. Immergiti in
            un mondo di conoscenza senza barriere e inizia oggi il tuo viaggio
            di specializzazione.
          </p>
        </div>
        <Button
        style={{alignSelf:"end"}}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="academic-avenues/academy-courses"
        >
          Vedi tutti i corsi
        </Button>
      </div>
      <CoursesCarousel partners={coursessData} />
    </section>
  );
}
