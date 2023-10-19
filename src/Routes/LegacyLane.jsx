import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { partnersData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import "./general-page.scss";
import { StaffCarousel } from "../Componenti/Organismi/StaffCarousel/StaffCarousel";

export function LegacyLane() {
  const navigate = useNavigate();
  return (
    <main id="legacy-lane">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title">
          <i>LEGACY LANE:</i>
          <br />
          <strong>La Nostra Storia, La Tua Futura Eredità</strong>
        </h1>
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
          path="contattaci"
        >
          Inizia il tuo viaggio
        </Button>
      </section>
      <section id="about-section">
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h2>Un Sogno Nato a Ginevra</h2>
        <div className="spacer" style={{ gridRow: 3 }} />
        <p>
          Nel cuore pulsante di Ginevra, dove le acque del Lago Lemano si
          mescolano con l’eco delle montagne svizzere, è nato un sogno chiamato
          HETG. Questa non era una semplice università, ma un’idea
          rivoluzionaria. Un luogo dove le barriere geografiche e temporali si
          dissolvono, dando spazio a un campus digitale senza confini. Con ogni
          anno che passava, HETG cresceva, trasformando le sfide in opportunità
          e accogliendo studenti da ogni angolo del mondo. La nostra storia non
          è solo una cronologia di date e eventi, ma un mosaico di storie, sogni
          e aspirazioni di coloro che hanno creduto in una visione d’istruzione
          più inclusiva e innovativa. E mentre guardiamo al futuro, onoriamo le
          nostre radici, sapendo che ogni passo fatto finora ci guida verso
          nuovi orizzonti.
        </p>
        <h2 style={{ gridColumn: "2/5", gridRow: 5 }}>
          Un Orizzonte Senza Fine
        </h2>
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 5 }} />
        <div className="spacer" />
        <p style={{ gridColumn: "9/12", gridRow: 7 }}>
          Nel vasto panorama dell’istruzione, HETG ha sempre guardato oltre
          l’orizzonte visibile. La nostra visione non è stata mai limitata dalle
          aule tradizionali o dai confini geografici. Abbiamo sognato un mondo
          in cui l’istruzione fosse come l’aria che respiriamo: accessibile a
          tutti, ovunque, in ogni momento. Un mondo in cui ogni individuo,
          indipendentemente dalla sua storia o dalle sue circostanze, potesse
          accedere alle chiavi del sapere e trasformare il proprio futuro.
          Questa visione è diventata la nostra missione, il faro che guida ogni
          nostra decisione. In HETG, non vediamo solo studenti, ma visionari,
          pionieri e innovatori pronti a cambiare il mondo. E siamo qui per
          assicurarci che abbiano tutti gli strumenti per farlo.
        </p>
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
          Scopri il management
        </Button>
      </div>
      <section id="vae-section-legacy">
        <h2>Dove la Vita Incontra l’Accademia</h2>
        <p style={{ gridRow: "2/5" }}>
          La tua esperienza lavorativa è un tesoro di conoscenze e competenze.
          In HETG, riconosciamo e valorizziamo questo patrimonio attraverso la
          Valutazione Accademica dell’Esperienza (VAE). Questo processo unico
          permette di tradurre le tue esperienze professionali in crediti
          formativi, creando un ponte tra il mondo del lavoro e l’ambito
          accademico.
          <br />
          <br />
          Che tu abbia guidato progetti innovativi, gestito team o contribuito a
          rivoluzionare un settore, ogni tua esperienza ha valore. La VAE è la
          nostra promessa di riconoscere e onorare il tuo percorso, assicurando
          che ogni passo fatto nel mondo professionale ti avvicini al tuo
          obiettivo accademico.
          <br />
          <br />
          In HETG, non guardiamo solo ai libri di testo o alle lezioni in aula.
          Vediamo l’intera narrativa della tua carriera, e ci impegniamo a
          garantire che ogni capitolo conti nel tuo viaggio educativo.
        </p>
        <PlusIcon
          isRed
          style={{
            gridColumn: 7,
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

        <PlusIcon
          isRed
          style={{
            gridColumn: 7,
            gridRow: "4",
            alignSelf: "center",
            margin: "2rem 0",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 11,
            gridRow: "4",
            alignSelf: "center",
            margin: "2rem 0",
          }}
        />

        <Button
          style={{ position: "relative", gridRow: 5, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="vae-form"
        >
          Valuta la tua esperienza
        </Button>
        <PlusIcon
          isRed
          style={{
            gridColumn: 2,
            gridRow: "6",
            alignSelf: "center",
            margin: "2rem 0",
          }}/>
           <PlusIcon
          isRed
          style={{
            gridColumn: 5,
            gridRow: "6",
            alignSelf: "center",
            margin: "2rem 0",
          }}/>
           <PlusIcon
          isRed
          style={{
            gridColumn: 7,
            gridRow: "6",
            alignSelf: "center",
            margin: "2rem 0",
          }}/>
           <PlusIcon
          isRed
          style={{
            gridColumn: 9,
            gridRow: "6",
            alignSelf: "center",
            margin: "2rem 0",
          }}/>
           <PlusIcon
          isRed
          style={{
            gridColumn: 12,
            gridRow: "6",
            alignSelf: "center",
            margin: "2rem 0",
          }}/>
      </section>
      <section id="form-section-legacy">
        <h2 className="section-title">
          Apri la Porta al Tuo Futuro: <br />
          Ammissioni Ora Aperte!
        </h2>
        <PlusIcon
          isRed
          style={{
            gridColumn: 12,
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
            marginTop:"2rem"
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 5,
            gridRow: "3", marginTop:"2rem"
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 7,
            gridRow: "3", marginTop:"2rem"
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 9,
            gridRow: "3", marginTop:"2rem"
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 12,
            gridRow: "3", marginTop:"2rem"
          }}
        />
      </section>
      <section id="partner-section">
        <div className="black-row">
          <PlusIcon
            style={{
              gridColumn: 2,
              gridRow: "1",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 4,
              gridRow: "1",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 6,
              gridRow: "1",
            }}
          />
        </div>
        <div className="white-row">
          <h2 className="section-title">our partners</h2>
        </div>
        <PartnersLogo partners={partnersData} />
        <div className="plus-row">
          <PlusIcon
            style={{
              gridColumn: 2,
              gridRow: "3",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 5,
              gridRow: "3",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 7,
              gridRow: "3",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 9,
              gridRow: "3",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 12,
              gridRow: "3",
            }}
          />
        </div>
      </section>
      <div className="divider" />
    </main>
  );
}
