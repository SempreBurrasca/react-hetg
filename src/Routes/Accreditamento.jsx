import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";
export function Accreditamento() {
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
      <section className="document-section" id="accreditamento">
        <div className="spacer" />
        <h1>Accreditamento</h1>
        <h2>Cos'è l'accreditamento?</h2>
        <p>
          L'accreditamento delle Istituzioni di formazione superiore (terziaria)
          è una procedura svolta dal <em>Conseil suisse d'accréditation</em>{" "}
          (CSA) mediante la quale{" "}
          <strong>
            viene assicurata la <em>quality assurance</em> a livello
            istituzionale
          </strong>
          , dei cicli di studio e dei programmi nel settore universitario
          svizzero in base ai requisiti minimi definiti dalla{" "}
          <em>
            Loi fédérale sur l'encouragement des hautes écoles et la
            coordination dans le domaine suisse des hautes écoles
          </em>{" "}
          (LEHE) e con le modalità previste dalla{" "}
          <em>
            Ordonnance du Conseil des hautes écoles pour l'accréditation dans le
            domaine des hautes écoles
          </em>{" "}
          (Ordonnance d'accréditation LEHE).
        </p>

        <h2>In Svizzera ogni scuola universitaria deve essere accreditata?</h2>
        <p>
          In Svizzera, una scuola universitaria{" "}
          <strong>deve essere accreditata</strong> ai sensi dell'art. 29 della
          LEHE{" "}
          <strong>
            solo se desidera utilizzare una denominazione protetta.
          </strong>
        </p>

        <h2>
          In Svizzera i cicli di studio e i programmi delle scuole universitarie
          devono essere accreditati?
        </h2>
        <p>
          In Svizzera,{" "}
          <strong>
            l'accreditamento dei cicli di studio e dei programmi non è
            obbligatorio
          </strong>
          . Esso può avvenire in sede di accreditamento istituzionale, mostrando
          che la <em>quality assurance</em> si estende anche ai cicli di studio
          e ai programmi. Tuttavia,{" "}
          <strong>
            né i cicli di studio né i programmi sono di per sé formalmente
            accreditati.
          </strong>
        </p>

        <h2>UniCampus HETG è accreditata?</h2>
        <p>
          Poiché{" "}
          <strong>
            non tutte le istituzioni private sono obbligate ad essere
            accreditate
          </strong>{" "}
          secondo la LEHE, ma solo quelle che desiderano utilizzare una
          denominazione protetta, al momento{" "}
          <strong>UniCampus HETG non ha richiesto l'accreditamento.</strong>
        </p>

        <h2>Perché UniCampus HETG non è accreditata?</h2>
        <p>
          In quanto istituzione privata che{" "}
          <strong>non intende avvalersi del diritto di designazione</strong> ai
          sensi dell'art. 29 della LEHE, UniCampus HETG{" "}
          <strong>non deve obbligatoriamente farsi accreditare</strong> dal CSA.
        </p>

        <h2>
          Le istituzioni di formazione superiore non accreditate sono di scarsa
          qualità?
        </h2>
        <p>
          <strong>Le finalità e le basi legali</strong> dell'accreditamento,
          legato alla <em>quality assurance</em> della scuola universitaria,{" "}
          <strong>non consentono di trarre questa conclusione.</strong>
        </p>

        <h2>
          Anche se UniCampus HETG non è accreditata, può comunque conferire i
          gradi accademici?
        </h2>
        <p>
          <strong>Il diritto</strong> di una scuola universitaria{" "}
          <strong>di rilasciare titoli di studio</strong> e qualificazioni{" "}
          <strong>non è legato all'accreditamento</strong>, che concerne la{" "}
          <em>quality assurance</em> della scuola universitaria ed eventualmente
          dei cicli di studio e dei programmi seguiti.
        </p>

        <h2>
          Qual è il valore dell'accreditamento istituzionale per le diverse
          finalità di utilizzo dei titoli di studio rilasciati da UniCampus
          HETG?
        </h2>
        <p>
          <strong>L'accreditamento non è direttamente correlato</strong> al
          riconoscimento dei titoli per{" "}
          <strong>finalità non-accademiche/lavorative</strong>, vale a dire ai
          fini dell'<strong>accesso a posti di lavoro</strong>, dell'
          <strong>iscrizione ai Centri per l'impiego</strong>, della{" "}
          <strong>partecipazione a pubblici concorsi</strong>, della{" "}
          <strong>valutazione di titoli e certificazioni</strong>, dell'
          <strong>accesso al praticantato</strong> o al{" "}
          <strong>tirocinio post lauream</strong>, dell'
          <strong>assegnazione di borse di studio</strong> o altre provvidenze
          pubbliche e del{" "}
          <strong>riscatto dei periodi di studio a fini previdenziali.</strong>
        </p>
        <p>
          <strong>Per finalità accademiche</strong>, vale a dire per ai fini del{" "}
          <strong>proseguimento degli studi universitari</strong>, del{" "}
          <strong>conseguimento di titoli universitari</strong>, oppure dell'
          <strong>
            accesso a studi complementari dell'insegnamento superiore
          </strong>
          , compresi esami ed afferenti, e/o{" "}
          <strong>alla preparazione al dottorato</strong>, l'accreditamento{" "}
          <strong>
            dipende dalla legislazione nazionale del Paese ricevente
          </strong>
          , dai <strong>Trattati o</strong> dagli{" "}
          <strong>
            Accordi tra la Confederazione Elvetica e singoli Stati o Governi
          </strong>
          , nonch&eacute; dalle{" "}
          <strong>convenzioni stipulate dalla scuola universitaria</strong> con
          specifiche Istituzioni.
        </p>
      </section>
      <div className="divider" />
    </main>
  );
}
