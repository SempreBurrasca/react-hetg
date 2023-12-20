import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";
export function Vae() {
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
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">{copy.content[0]}</h2>
          <p>{copy.content[1]}</p>
          <a href="#vae">Leggi il documento</a>
        </div>
        <Form />
      </section>
      <section className="document-section" id="vae">
        <div className="spacer" />
        <h1>VALIDAZIONE DEGLI APPRENDIMENTI ACQUISITI (VAE)</h1>
        <h2>Cos’è la VAE?</h2>
        <p>
          La{" "}
          <strong>
            Validation des acquis de l&#39;expérience/Validazione degli
            apprendimenti acquisiti (VAE – Validation of Acquired Experience)
          </strong>{" "}
          è una procedura di <strong>riconoscimento</strong> – nell’ambito della{" "}
          <strong>formazione professionale</strong>, della{" "}
          <strong>formazione terziaria</strong> (superiore/universitaria) e
          della <strong>formazione permanente</strong> –{" "}
          <strong>delle competenze specifiche e della cultura generale</strong>{" "}
          possedute dall’interessato.
        </p>
        <h2> A chi è destinata la VAE?</h2>
        <p>
          Le procedure VAE <strong>si rivolgono ad adulti</strong> che, al
          momento della presentazione del dossier e/o al momento dell’inizio
          degli studi, abbiano una{" "}
          <strong>
            età minima di 25 anni, abbiano maturato almeno 3 anni di esperienza
            professionale a tempo pieno in linea con il titolo a cui aspirano,
          </strong>{" "}
          e{" "}
          <strong>
            a condizione che i diplomi posseduti consentano l’accesso alla
            formazione universitaria.
          </strong>
        </p>
        <h2>Quali sono i fondamenti generali della VAE?</h2>
        <p>
          La VAE è <strong>promossa dall’UNESCO</strong> tramite le Lignes
          directrices pour la reconnaissance, la validation et l’accréditation
          des acquis de l’apprentissage non formel et informel (2012). Per
          l’area europea, la VAE è{" "}
          <strong>sostenuta dal Consiglio dell’Unione Europea</strong> tramite
          la Raccomandazione sulla convalida dell&#39;apprendimento non formale
          e informale (20 dicembre 2012 - 2012/C 398/01) e implementata dalle
          Linee guida europee per la convalida dell&#39;apprendimento non
          formale e informale (European Guidelines for validating nonformal and
          informal learning, 2016) elaborate dal CEDEFOP (Centro Europeo per lo
          Sviluppo della formazione professionale) in vista della{" "}
          <strong>costituzione della European Education Area</strong> (EEA: cfr.
          la Comunicazione della Commissione Europea sulla realizzazione dello
          spazio europeo dell&#39;istruzione entro il 2025, 30 settembre 2020 -
          COM/2020/625).
        </p>
        <h2>Quali sono le basi legali della VAE in Svizzera?</h2>
        <p>
          In Svizzera{" "}
          <strong>non esiste un sistema centralizzato per la VAE.</strong> La
          normativa applicabile, pertanto,{" "}
          <strong>varia a seconda dell’ambito applicativo</strong> e{" "}
          <strong>giurisdizionale/territoriale.</strong>
        </p>

        <h2>Quali sono gli ambiti di applicazione della VAE in Svizzera?</h2>
        <p>
          Gli ambiti di applicazione della VAE sono tre/quattro:
          <br />
          1. <strong>Formazione professionale</strong> <br />
          1.a. <strong>di base</strong> <br />1.b. <strong>superiore </strong> <br />
          2. <strong>Formazione permanente</strong> (continua/non formale){" "}
          <br />
          3. <strong>Formazione terziaria</strong> (universitaria) <br />
          Per quanto attiene alla <strong>formazione professionale</strong>, in
          Svizzera la VAE si inquadra nelle cosiddette «altre procedure di
          qualificazione» e consente, per gli ambiti previsti dalla legislazione
          federale e cantonale,
          <strong>l&#39;acquisizione di un titolo formale.</strong> Per quanto
          riguarda la
          <strong>formazione professionale di base</strong>, i titoli rilasciati
          sono l’Attestato federale di capacità (AFC) o il Certificato federale
          di formazione pratica (CFP); per la{" "}
          <strong>formazione professionale superiore</strong>, essi sono invece
          l’Attestato professionale federale (APF), i diplomi di Esame
          professionale superiore (EPS) o quelli rilasciati dalle Scuole
          specializzate superiori (SSS). In questi ambiti, la VAE è disciplinata
          dalla Loi fédérale sur la formation professionnelle (LFPr, 13 dicembre
          2002 – stato: 1° aprile 2022), artt. 9, 17, 33-35; e dalla Ordonnance
          sur la formation professionnelle (OFPr, 19 novembre 2003 – stato 1°
          aprile 2022), artt. 4, 31 e 32, nonché dalla Ordonnance du Département
          fédéral de l’économie, de la formation et de la recherche (DEFR)
          concernant les conditions minimales de reconnaissance des filières de
          formation et des études postdiplômes des écoles supérieures (OCM ES,
          11 settembre 2017 – stato: 1° aprile 2023), art. 10. Per quanto invece
          riguarda il settore della <strong>formazione permanente </strong>– la
          formazione strutturata impartita al di fuori della formazione formale,
          detta «<strong>formazione non formale</strong>» –, la VAE fa
          riferimento alla Loi fédérale sur la formation continue (LFCo, 20
          giugno 2014 – stato 1° gennaio 2017), artt. 5-9 e 13-16; e, per gli
          aspetti finanziari, dalla Ordonnance sur la formation continue (OFCo,
          24 febbraio 2016 – stato 1° gennaio 2017). Per la{" "}
          <strong>formazione terziaria </strong>vi sono, infine, la convalida e
          l’ammissione su dossier <strong>(VAE)</strong>, che consentono di
          maturare, in forma di equivalenza, una parte dei crediti ECTS relativi
          a un determinato piano di studi permettendo, ai fini del conseguimento
          di un titolo accademico, una parziale dispensa dagli esami o dalle
          attività complementari previste con la conseguente abbreviazione della
          durata del percorso formativo. In questo caso,{" "}
          <strong>
            le procedure dipendono sostanzialmente dalle singole università
          </strong>{" "}
          e – ove esistenti e applicabili – fanno riferimento alle legislazioni
          cantonali; fanno eccezione le Alte scuole pedagogiche, che sono di
          esclusiva competenza dei Cantoni e soggette alle leggi intercantonali.
          La <strong>Repubblica e Cantone di Ginevra</strong>, allo stato,
          mediante la Loi sur la formation professionnelle (LFP, 15 giugno 2007
          – stato: 1° gennaio 2023) e il connesso Règlement d&#39;application de
          la Loi sur la formation professionnelle (RFP, 17 marzo 2008 – stato:
          1° gennaio 2023), ha provveduto a normare la{" "}
          <strong>formazione professionale di base e superiore</strong>,
          comprese le procedure per il riconoscimento e la convalida
          dell&#39;apprendimento pregresso e le relative attestazioni. Nell’area
          della Svizzera romanda, solo alcune università applicano il sistema
          VAE.
        </p>
        <h2>Qual è l’ambito applicativo della VAE presso UniCampus HETG?</h2>

        <p>
          <strong>Le procedure VAE </strong>seguite da{" "}
          <strong>UniCampus HETG</strong> sono riferite all’ambito della{" "}
          <strong>formazione accademica </strong>(terziaria) e prevedono la{" "}
          <strong>predisposizione di un dossier individuale </strong>del
          candidato.<strong>In caso di approvazione</strong> , sarà seguito
          dalla <strong>immatricolazione </strong>e dalla redazione del{" "}
          <strong>piano formativo individuale.</strong>
        </p>
        <h2>Quali sono le regole seguite da UniCampus HETG?</h2>
        <p>
          <strong> Le procedure VAE</strong> seguite da{" "}
          <strong>UniCampus HETG</strong> sono conformi sia alle Linee guida
          emanate dall’UNESCO sia a quelle predisposte dall’Agenzia europea
          CEDEFOP. Inoltre{" "}
          <strong>
            UniCampus HETG adotta le Directives des commissions de
            reconnaissance de la Conférence suisse des directeurs cantonaux de
            l’instruction publique (CDIP) pour la validation des acquis de
            formation formels et de niveau haute école{" "}
          </strong>
          (2019).
        </p>
        <h2>Come avviene il riconoscimento VAE in Italia?</h2>
        <p>
          <strong>Per l’Italia</strong>, il riconoscimento dell’apprendimento
          formale, non formale e informale descritto dalla L. 92/2012, avviene
          tramite il
          <strong>
            Sistema Nazionale di Certificazione delle Competenze
          </strong>{" "}
          di cui al D. Lgs. 13/2013, secondo le modalità previste dai DD.
          interm. 12.03.2015 e 5.01.2021, sulla base del Quadro nazionale delle
          qualificazioni regionali istituito dal D. interm. 30.06.2018 e reso
          operativo mediante il D. interm. 05.01.2021. La piena{" "}
          <strong>attuazione è ancora in corso.</strong>
        </p>
      </section>
      <div className="divider" />
    </main>
  );
}
