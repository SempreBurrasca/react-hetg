import React, { useEffect } from "react";
import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import { useNavigate } from "react-router-dom";
import "./linktree.scss";
import { getPagina } from "../Firebase/RecuperoCopy";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Form } from "../Componenti/Organismi/Form/Form";

export function Linktree() {
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
    <main id="linktree">
      <section className="hero-section">
        <div className="spacer" />
        <h2>Hai 2 modalità di accesso ai corsi</h2>
        <p>
          Accedi safjoeijfcoi9rewicfhr9h fr fugrh cvf3 fcg7 3u rcfuyi83 fcr8ygf c8yu43efcu43 ghfc4r3euchf 4u8y3fghc 4ygbf cy43gfc uy43egfc iuyr3fcger4 ygfcuy43eg 
        </p>
        <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638364333136396928.MjQ0YmU5OGEtMzNmOC00ZTIwLTljYWYtYmI0MTZiYTIzNzQwNjUxYzUyNGMtNjliZi00MzZlLTg1MjktMzJiZDhiMjgzNTFi&ui_locales=it-IT&mkt=it-IT&client-request-id=44908df9-73ed-46e7-96ba-d62fa4a23109&state=8xdz3VttBbrkUpXGseCBV9LKQ4-8eAA4nx_hJPhODEj09o2emuqFP76PZrmNZjeo448eI1lwY4JVri7WkcFhh8xpFmQHlixe1ugcNMGwCtViyQsrfNKfZwwj-q5-6HHzaoSl5LjYGRRagFua6seLbrrlJ4iyodwOG6dwvBEWwMgTvQvSBPFqzQDxsgFBXhJ51fBjtqQTGZBTO16l1VFnQvEmQXVcuEZOlqKbkjX0suehvjG-KzDWn7lEaeO-zSB7FZsh01TyfBkSdYdzAPy_eXvJoI3cfej5gMtXCzGNRic&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0&sso_reload=true">
          Accedi alla Piattaforma 1
        </a>
        <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638364333136396928.MjQ0YmU5OGEtMzNmOC00ZTIwLTljYWYtYmI0MTZiYTIzNzQwNjUxYzUyNGMtNjliZi00MzZlLTg1MjktMzJiZDhiMjgzNTFi&ui_locales=it-IT&mkt=it-IT&client-request-id=44908df9-73ed-46e7-96ba-d62fa4a23109&state=8xdz3VttBbrkUpXGseCBV9LKQ4-8eAA4nx_hJPhODEj09o2emuqFP76PZrmNZjeo448eI1lwY4JVri7WkcFhh8xpFmQHlixe1ugcNMGwCtViyQsrfNKfZwwj-q5-6HHzaoSl5LjYGRRagFua6seLbrrlJ4iyodwOG6dwvBEWwMgTvQvSBPFqzQDxsgFBXhJ51fBjtqQTGZBTO16l1VFnQvEmQXVcuEZOlqKbkjX0suehvjG-KzDWn7lEaeO-zSB7FZsh01TyfBkSdYdzAPy_eXvJoI3cfej5gMtXCzGNRic&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0&sso_reload=true">
          Accedi alla Piattaforma 2
        </a>
       
      </section>

      <div className="divider" />
    </main>
  );
}
