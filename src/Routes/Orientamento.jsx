import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { coursessData, partnersData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";

export function Orientamento() {
  const navigate = useNavigate();
  return (
    <main id="contattaci">
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">
            Orienta Tuo Futuro: <br />
            Richiedi il tuo consulente personale in HETG
          </h2>
          <p>
            In HETG, sappiamo che ogni imprenditore, amministratore e leader ha
            un percorso unico, una storia personale e professionale che lo ha
            portato fin qui. Ma capiamo anche che scegliere il giusto percorso
            accademico può essere una decisione cruciale e talvolta complessa.<br />
            Ecco perché offriamo un servizio di orientamento personalizzato,
            pensato appositamente per te. Compilando il form, avrai
            l’opportunità di essere affiancato da un consulente dedicato, che ti
            guiderà attraverso le molteplici opportunità offerte da HETG,
            aiutandoti a identificare il percorso di studi che meglio risponde
            alle tue ambizioni e al tuo background. La tua storia e la tua
            esperienza sono preziose; lascia che ti aiutiamo a trasformarle in
            un luminoso futuro accademico e professionale.
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
