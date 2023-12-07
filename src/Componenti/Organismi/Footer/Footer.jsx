import React, { useEffect } from "react";
import { Button } from "../../Molecole/Buttons/Button";
import { PlusIcon } from "../../Molecole/PlusIcon/PlusIcon";
import { useNavigate } from "react-router-dom";
import xIcon from "../../../assets/x-icon.png";
import igIcon from "../../../assets/ig-icon.png";
import fbIcon from "../../../assets/fb-icon.png";
import inIcon from "../../../assets/in-icon.png";
import "./footer.scss";
import { useIsMobile } from "../../Tools/useIsMobile";
import { getPagina } from "../../../Firebase/RecuperoCopy";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";
import LogoTot from "../../../assets/logo.png";
export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  const [links, setLinks] = React.useState([""]);
  // Carica lo script di iubenda una volta che il componente viene montato
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Rimuovi lo script quando il componente viene smontato
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    fetch("/copy/footer.json")
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

    fetch("/copy/links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setLinks(data.it);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }

  return (
    <>
      <div className="divider" />
      <div className="footer-cta">
       
        <Button
          style={{ position: "relative", left: "1rem", top: "-2.5rem" }}
          angleposition={{
            overTopLeft: true,
            underBottomLeft: true,
          }}
          borderradius="bottom-right-radius top-right-radius"
          path="contattaci"
        >
          {copy.footer[8]}
        </Button>
      </div>
      <footer>
      <img className="logo-footer" src={LogoTot} />
        <div className="follow-social">
          <span className="text">{copy.footer[0]}</span>
          <div className="social-icons">
            <a href={links.xcom}>
              <img href={links.xcom} src={xIcon} alt="icona di X" />
            </a>
            <a href={links.instagram}>
              <img
                href={links.instagram}
                src={igIcon}
                alt="icona di instagram"
              />
            </a>
            <a href={links.facebook}>
              <img href={links.facebook} src={fbIcon} alt="icona di facebook" />
            </a>
            <a href={links.linkedin}>
              <img href={links.linkedin} src={inIcon} alt="icona di linkedin" />
            </a>
          </div>
        </div>
        <PlusIcon
          isRed
          style={{
            gridColumn: 5,
            gridRow: "2",
          }}
        />

        <PlusIcon
          isRed
          style={{
            gridColumn: 9,
            gridRow: "2",
          }}
        />
        {!isMobile && (
          <div className="link-footer">
            <span onClick={() => navigate("/academic-avenues")}>
              {" "}
              {copy.footer[1]}
            </span>
            <span onClick={() => navigate("/student-central")}>
              {" "}
              {copy.footer[2]}
            </span>
            <span onClick={() => navigate("/student-central/staff-management")}>
              {" "}
              {copy.footer[4]}
            </span>
            <span onClick={() => navigate("/collabora")}>
              {" "}
            COLLABORA CON NOI
            </span>
          </div>
        )}
        {!isMobile && (
          <div className="link-footer-2">
            <a
              href="https://www.iubenda.com/privacy-policy/79094441"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/79094441/cookie-policy"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
            <a
              href="https://www.iubenda.com/termini-e-condizioni/79094441"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Termini e Condizioni"
            >
              Termini e Condizioni
            </a>
            <a
              href="https://unicampushetg.ch/uploads/legal/Informativa%20generale.pdf"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Pdf Privacy Policy"
            >
              Informativa Generale
            </a>
          </div>
        )}
        {isMobile && <div className="div-red-m" />}
        {isMobile && (
          <div className="link-footer-m">
            <span onClick={() => navigate("/academic-avenues")}>
              {" "}
              {copy.footer[1]}
            </span>
            <span onClick={() => navigate("/student-central")}>
              {" "}
              {copy.footer[2]}
            </span>
            <span onClick={() => navigate("/student-central/staff-management")}>
              {" "}
              {copy.footer[4]}
            </span>
            <span onClick={() => navigate("/collabora")}>
              {" "}
             COLLABORA CON NOI
            </span>
          </div>
        )}
        {isMobile && (
          <div className="link-footer-m">
            <a
              href="https://www.iubenda.com/privacy-policy/79094441"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/79094441/cookie-policy"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
            <a
              href="https://www.iubenda.com/termini-e-condizioni/79094441"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Termini e Condizioni"
            >
              Termini e Condizioni
            </a>
            <a
              href="https://unicampushetg.ch/uploads/legal/Informativa%20generale.pdf"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed"
              title="Pdf Privacy Policy"
            >
              Informativa Generale
            </a>
          </div>
        )}
        {isMobile && <div className="div-red-m" />}
        <div className="legals-footer">
          <span>
            {copy.footer[5]}
            {copy.footer[6]}
            <br />
            {copy.footer[7]}
          </span>
        </div>
      </footer>
    </>
  );
}
