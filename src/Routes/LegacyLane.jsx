import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { useNavigate } from "react-router-dom";
import "./general-page.scss";
import "./legacy-lane.scss";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { FormDiContatto } from "../Componenti/Sezioni/Form/FormDiContatto";
import { PartnerSection } from "../Componenti/Sezioni/Partner/PartnerSection";
import { VAE } from "../Componenti/Sezioni/VAE/VAE";
import { StaffSezione } from "../Componenti/Sezioni/StaffSezione/StaffSezione";
import { Helmet } from "react-helmet";

export function LegacyLane() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const paginaId = "CJq68hOKkFLRtDyaAHsq";
  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setCopy(data.it.LegacyLane);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="legacy-lane">
      <Helmet>
        <title>HETG - Chi Siamo</title>
        <meta name="description" content="HETG - Chi Siamo" />
      </Helmet>
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <strong>{copy.hero[0]}</strong>
          <br />
          <i>{copy.hero[1]}</i>
        </h1>
        <p className="page-subtitle">{copy.hero[2]}</p>
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
          path="contattaci"
        >
          {copy.hero[3]}
        </Button>
      </section>
      <section id="about-section">
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h2>{copy.about[0]}</h2>
        <div className="spacer" style={{ gridRow: 3 }} />
        <p>{copy.about[1]}</p>
        <h2 style={{ gridColumn: "2/5", gridRow: 5 }}>{copy.about[2]}</h2>
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 5 }} />
        <div className="spacer" />
        <p style={{ gridColumn: "9/12", gridRow: 7 }}>{copy.about[3]}</p>
      </section>
      <section className="about-section-2">
        <h2>Cosa è UniCampus HETG?</h2>
        <p>
          <strong>UniCampus HETG</strong> Haute École Télématique Genève) è una{" "}
          <strong>
            istituzione universitaria privata di diritto svizzero.
          </strong>{" "}
          Riconosciuta dall’ordinamento giuridico nazionale elvetico, opera
          liberamente entro il <strong>Sistema Educativo Svizzero</strong> in
          virtù degli artt. 20, 27, 62, 60, 63, 63a, 64 e 69 della Costituzione
          Federale della Confederazione Svizzera (Cost.), oltre che degli artt.
          30, 35, 185 e 199 della Costituzione della Repubblica e Cantone di
          Ginevra (Cst-GE). Dalla Repubblica e Cantone di Ginevra non è invece
          normato l’ambito degli istituti privati di istruzione terziaria
          superiore e di formazione continua per adulti, i quali, di
          conseguenza, non non sono soggetti a previa autorizzazione da parte
          del{" "}
          <em>
            Service d'Authorisation et de Surveillance de l'Enseignement Privé
          </em>
          (SASEP): cfr. <em>Règlement relatif à l’enseignement privé</em> della
          Repubblica e Cantone di Ginevra (REPriv-GE), art. 1 § 4.
        </p>
        <h3>Quali sono le basi legali della denominazione UniCampus HETG?</h3>
        <p>
          <strong>UniCampus HETG</strong>, legalmente costituita in base
          all’art. 52 del Codice Civile Svizzero, è registrata al Registro di
          Commercio della Repubblica e Cantone di Ginevra (CH-660.6.638.023-1 -
          IDE: CHE-133.413.467). La denominazione{" "}
          <strong>UniCampus HETG</strong> rispetta il disposto degli artt. 29 e
          62 della{" "}
          <em>
            Loi fédérale sur l’encouragement des hautes écoles et la
            coordination dans le domaine suisse des hautes écoles{" "}
          </em>
          (LEHE) ed è stata sottoposta ai controlli previsti dalla{" "}
          <em>
            Directive interne concernant le contrôle d'identité des raisons de
            commerce
          </em>{" "}
          emanata il 1° aprile 2021 dal Département fédéral de justice et police
          (DFJP).
        </p>
        <h3>A quale nazionalità appartiene UniCampus HETG?</h3>
        <p>
          <strong>UniCampus HETG</strong> è una istituzione facente parte dello{" "}
          <strong>Spazio formativo svizzero</strong> , di cui all’art. 61a della
          Costituzione federale e, in forza di questo, appartiene allo{" "}
          <strong>Spazio europeo dell’istruzione superiore</strong>(
          <em>European Higher Education Area - EHEA</em>).
        </p>
        <h3>
          Qual’è il quadro di riferimento delle qualificazioni rilasciate da
          UniCampus HETG?
        </h3>
        <p>
          <strong>Il sistema di crediti ECTS, i livelli di studio</strong>, i
          requisiti di ammissione e i titoli di studio rilasciati da{" "}
          <strong>UniCampus HETG</strong> sono conformi allo{" "}
          <em>
            European Qualifications Framework, al Framework of Qualifications of
            the European Higher Education Area, al Cadre de qualification pour
            le domaine des hautes écoles (nqf.ch-HS) e all’Ordonnance du Conseil
            des hautes écoles sur la coordination de l’enseignement dans les
            hautes écoles suisses.{" "}
          </em>
          <strong>I gradi accademici</strong>
          rilasciati da <strong>UniCampus HETG</strong> non rientrano fra quelli
          protetti a norma degli artt. 62 e 78 LEHE; essi sono rilasciati nel
          rispetto dall’art. 251 del{" "}
          <em>
            Code pénal suisse e dell’art. 12 dell’Accord intercantonal sur le
            domaine suisse des hautes écoles (Concordat sur les hautes écoles).
          </em>
        </p>
        <h3>
          Qual’è la riconoscibilità dei titoli rilasciati da UniCampus HETG?
        </h3>
        <p>
          Il riconoscimento dei gradi accademici conseguiti presso{" "}
          <strong>UniCampus HETG</strong> avviene sulla base della{" "}
          <strong>legislazione nazionale del Paese ricevente</strong>, secondo
          le <strong>Convenzioni internazionali</strong> (per l’Europa:
          Convenzione di Lisbona, sezione VI: Riconoscimento delle qualifiche di
          insegnamento superiore) e in conformità con i{" "}
          <strong>
            {" "}
            Trattati o gli Accordi tra la Convederazione Elvetica e singoli
            Stati o Governi
          </strong>{" "}
          , nonché in base alle <strong>
            convenzioni stipulate dall’Ente
          </strong>{" "}
          con specifiche Istituzioni.{" "}
          <strong>
            {" "}
            L’Accordo tra il Consiglio Federale Svizzero e il Governo della
            Repubblica Italiana{" "}
          </strong>
          sul reciproco riconoscimento delle equivalenze nel settore
          universitario (7 dicembre 2000 – stato: 11 aprile 2017){" "}
          <strong>
            {" "}
            regolamenta solo una parte degli Istituti del settore universitario
            della Confederazione Svizzera.{" "}
          </strong>
        </p>
        <h3>
          In Italia come avviene il riconoscimento dei titoli rilasciati da
          UniCampus HETG?
        </h3>
        <p>
          La Repubblica Italiana ha sottoscritto la Convenzione di Lisbona l’11
          Aprile 1997 e l’ha successivamente ratificata con la L. 148/2002, che
          ha introdotto il concetto di{" "}
          <strong>riconoscimento finalizzato</strong> del titolo estero. Di
          conseguenza, in Italia non esiste pertanto un percorso unico per il
          riconoscimento dei titoli accademici stranieri. La normativa
          applicabile <strong>varia a seconda dell’ambito applicativo.</strong>
        </p>
        <h3>
          Quali sono le finalità di utilizzo previste per il riconoscimento in
          Italia dei titoli rilasciati da UniCampus HETG?
        </h3>
        <p>
          Le finalità previste sono sostanzialmente due:
          <br /> 1. <strong>Accademica/di studio</strong>
          <br />
          2. <strong>Non-accademica/lavorativa </strong>
          <br />
          Ai fini dell’<strong>accesso all’Istruzione superiore</strong>, del{" "}
          <strong>proseguimento degli studi universitari</strong> e del{" "}
          <strong>conseguimento di titoli universitari italiani</strong>
          per il riconoscimento dei gradi accademici conseguiti presso{" "}
          <strong>UniCampus HETG</strong> si applicano le modalità previste
          dalla L. 148/2002 e, per il Dottorato di ricerca, dal DPR 382/1980.
          Invece, ai fini dell’<strong>accesso a posti di lavoro</strong> e
          dell’<strong>iscrizione ai Centri per l’impiego</strong>, della
          <strong>partecipazione a pubblici concorsi</strong> e provvedimenti
          connessi (attribuzioni di punteggio, progressioni in carriera, ecc.),
          della
          <strong>valutazione di titoli e certificazioni</strong>, dell’
          <strong>accesso al praticantato</strong> o al{" "}
          <strong>tirocinio post lauream</strong>, dell’
          <strong>assegnazione di borse di studio</strong> o altre provvidenze
          pubbliche e del{" "}
          <strong>riscatto dei periodi di studio a fini previdenziali</strong>{" "}
          il riconoscimento è disciplinato dal d.lgs. 165/2001, dalle L.
          148/2002 e 29/2006, e dal DPR 189/2009.
        </p>
      </section>
      <Striscia />
      <StaffSezione type="staff" />
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
          {copy.staff[0]}
        </Button>
      </div>
      <VAE />
      <FormDiContatto />
      <PartnerSection />
      <div className="divider" />
    </main>
  );
}
