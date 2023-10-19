import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { coursessData, partnersData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";

export function Ammissione() {
  const navigate = useNavigate();
  return (
    <main id="contattaci">
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">
            Connettiamoci: <br />
            La tua storia incontra HETG
          </h2>
          <p>
            Hai domande, suggerimenti o semplicemente desideri saperne di più su
            HETG? Sei nel posto giusto. <br />
            Utilizza il form sottostante per inviarci un messaggio e il nostro
            team si farà carico di risponderti nel più breve tempo possibile. La
            tua voce è preziosa per noi e siamo sempre pronti ad ascoltare e
            assistere. Che tu sia un potenziale studente, un genitore, un
            partner accademico o solo un visitatore curioso, non esitare a
            raggiungerci. La tua avventura con HETG inizia con un semplice
            messaggio.
          </p>
        </div>
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
            <input
            type="text"
            id="corso"
            name="corso"
            placeholder="Corso"
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
        <Button
          style={{ position: "absolute", bottom: "3rem", left: "1rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="contattaci"
        >
          Accedi Al portale
        </Button>
      </section>

      <div className="divider" />
    </main>
  );
}
