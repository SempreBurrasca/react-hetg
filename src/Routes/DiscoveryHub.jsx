import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { partnersData } from "../assets/data";
import { useNavigate } from 'react-router-dom';
import "./general-page.scss";

export function DiscoveryHub() {

  const navigate = useNavigate();
  return (
    <main id="discovery-hub">
      <section className="hero-section">
        <PlusIcon style={{ gridColumn: 2, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 2 }} />
        <PlusIcon style={{ gridColumn: 11, gridRow: 2, justifySelf: "end" }} />
        <h1 className="page-title"><i>UNICAMPUS HETG:</i> <strong>ARTES AD VITAM</strong></h1>
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
          style={{ position: "relative", gridRow: 5, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="legacy-lane"
        >
          Visita legacy lane ora
        </Button>
      </section>
      <section id="advantages-section">
        <h2 className="section-title">
          Naviga nel Futuro: I Vantaggi del Campus Digitale HETG
        </h2>
        <div className="cards">
          <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
              <h3>porte aperte 24/7</h3>
              <p>
                Studia a tuo ritmo, accedendo a corsi e risorse 24 ore su 24, 7
                giorni su 7, ovunque tu sia.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
              <h3>connessioni globali</h3>
              <p>
                Entra in una rete mondiale, collaborando e interagendo con
                studenti e docenti da ogni parte del globo.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
              <h3>Apprendimento Immersivo</h3>
              <p>
                Vivi un’educazione avanzata con simulazioni, laboratori virtuali
                e sessioni interattive che stimolano la tua curiosità.
              </p>
            </div>
          </div>
        </div>
        <PlusIcon style={{ gridColumn: 2, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 5, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 7, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 9, gridRow: 5 }} />
        <PlusIcon style={{ gridColumn: 12, gridRow: 5 }} />
      </section>
      <Striscia />
      <section id="academics-section">
        <div className="title-wrapper">
          <h2 className="section-title">Academic avenues</h2>
          <p className="section-subtitle">
            Il Tuo Itinerario Verso l’Eccellenza Dove la tradizione accademica
            svizzera incontra l’innovazione del domani.
          </p>
        </div>
        <PlusIcon
          isRed
          style={{ gridColumn: 7, gridRow: "1", alignSelf: "center" }}
        />
        <PlusIcon
          isRed
          style={{ gridColumn: 11, gridRow: "1", alignSelf: "center" }}
        />
        <FacultyCarousel style={{ gridColumn: "1/13", gridRow: 2 }} />
        <h3>
          Riscopri L’alta formazione: Realizza il Tuo Sogno Accademico con HETG.
        </h3>
        <PlusIcon style={{ gridColumn: 7, gridRow: 3, alignSelf: "center" }} />
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
              Accetto la <a onClick={()=>navigate("/policies")}>privacy policy</a>
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
        <PartnersLogo partners={partnersData}/>
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
      <div className="divider"/>
    </main>
  );
}
