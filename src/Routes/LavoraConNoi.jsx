import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";
import { FormLavora } from "../Componenti/Organismi/Form/FormLavora";

export function LavoraConNoi() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  const paginaId = "MZHet3K9H29xY9yfsfq0";
  React.useEffect(() => {
    // Controlla se i dati sono presenti in localStorage
    const cachedCopy = localStorage.getItem(paginaId);
    if (cachedCopy) {
      // Se presenti in localStorage, utilizza i dati dalla cache
      setCopy(JSON.parse(cachedCopy));
    } else {
      // Altrimenti, recupera i dati e aggiorna localStorage
      getPagina(paginaId)
        .then((data) => {
          localStorage.setItem(paginaId, JSON.stringify(data)); // Aggiorna localStorage
          setCopy(data);
        })
        .catch(console.error);
    }
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="contattaci">
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">
            Collabora con noi:
            <br />
            Unisciti alla nostra squadra innovativa
          </h2>
          <p>
            All'Unicampus HETG, siamo costantemente alla ricerca di menti
            brillanti e persone appassionate per unirsi al nostro team dinamico.
            La nostra missione è di offrire un'istruzione di eccellenza e di
            promuovere l'innovazione nel campo dell'istruzione superiore.
            Collaborare con noi significa entrare in una comunità di
            professionisti impegnati, dove ogni membro gioca un ruolo
            fondamentale nel plasmare il futuro dell'istruzione. Cerchiamo
            individui motivati con una forte etica del lavoro, una passione per
            l'apprendimento e l'insegnamento, e il desiderio di fare la
            differenza nella vita degli studenti. Offriamo un ambiente di lavoro
            stimolante e supportivo, dove le idee innovative e le iniziative
            creative sono sempre benvenute e incoraggiate. Sia che tu sia un
            accademico esperto, un professionista dell'istruzione, o uno
            specialista nel tuo campo, ci sono numerose opportunità per te di
            contribuire al nostro progetto educativo. Dalla docenza e ricerca
            alla gestione amministrativa, dal marketing all'assistenza
            studentesca, ogni ruolo in Unicampus HETG è cruciale per il nostro
            successo e crescita. Se sei interessato a far parte di una squadra
            che valorizza l'apprendimento continuo, l'innovazione e la
            collaborazione, ti invitiamo a scoprire le nostre opportunità di
            carriera e a prendere in considerazione di unirti alla nostra
            vibrante comunità accademica. Insieme, possiamo ridefinire il futuro
            dell'istruzione e ispirare la prossima generazione di leader e
            innovatori.
          </p>
        </div>
        <FormLavora />
        
      </section>

      <div className="divider" />
    </main>
  );
}
