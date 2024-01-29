import { Button } from "../Componenti/Molecole/Buttons/Button";
import { useIsMobile } from "../Componenti/Tools/useIsMobile";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./contattaci.scss";
import { Loader } from "../Componenti/Organismi/Loader/Loader";
import { Helmet } from "react-helmet";
import TextField from '@mui/material/TextField';
import { AllFacolta } from "../Componenti/Sezioni/AllFacolta/AllFacolta";

export function Cerca() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [copy, setCopy] = React.useState(null);
  const [links, setLinks] = React.useState({
    piattaforma: "#",
    xcom: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  });
  const [cerca, setCerca] = React.useState('');

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
        setCopy(data.it.Orientamento);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });

    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setLinks(data.it.links);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <main id="cerca">
      <Helmet>
        <title>Cerca</title>
        <meta name="description" content="Cerca" />
      </Helmet>
      <section className="hero-section">
        <div className="spacer" />
        <h2 className="section-title">Cerca il tuo percorso formativo</h2>
        <p>
          Utilizza la barra di ricerca sottostante per trovare rapidamente la
          facoltà desiderata. La ricerca è intuitiva e ti
          aiuterà a navigare facilmente tra le diverse opzioni disponibili.
        </p>
        <TextField id="outlined-basic" label="Cerca..." variant="outlined" value={cerca}  onChange={(e) => {
          setCerca(e.target.value);
        }}/>
    
      </section>
      <AllFacolta isSearchable search={cerca}/>
      <div style={{paddingTop:"50px"}}/>
      <div className="divider" />
    </main>
  );
}
