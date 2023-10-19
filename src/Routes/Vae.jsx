import { Button } from "../Componenti/Molecole/Buttons/Button";
import { PartnersLogo } from "../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../Componenti/Molecole/PlusIcon/PlusIcon";
import { Striscia } from "../Componenti/Molecole/Striscia/Striscia";
import { FacultyCarousel } from "../Componenti/Organismi/FacultyCarousel/FacultyCarousel";
import { coursessData, partnersData } from "../assets/data";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { CoursesCarousel } from "../Componenti/Molecole/CoursesCarousel/CoursesCarousel";

export function Vae() {
  const navigate = useNavigate();
  return (
    <main id="contattaci">
      <section className="hero-section">
        <div className="spacer" />
        <div>
          <h2 className="section-title">
            Valutazione Accademica dell’Esperienza: <br />
            Il tuo percorso Riconosciuto
          </h2>
          <p>
            La Valutazione Accademica dell’Esperienza (VAE) in HETG è una
            celebrazione della tua dedizione, delle tue competenze e delle tue
            esperienze. Riconosciamo che l’apprendimento non avviene solo in
            aula, ma anche attraverso le sfide e le opportunità che la vita
            professionale presenta. La VAE è il nostro modo di onorare e
            valorizzare queste esperienze, permettendoti di convertire la tua
            storia professionale in crediti formativi. Che tu abbia guidato
            progetti innovativi, gestito team o contribuito a rivoluzionare un
            settore, la tua esperienza ha un valore inestimabile. Con la VAE,
            HETG ti offre la possibilità di avvicinarti ai tuoi obiettivi
            accademici, riconoscendo e integrando il tuo percorso professionale
            nel mondo accademico.
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
          Scarica il documento
        </Button>
      </section>

      <div className="divider" />
    </main>
  );
}
