import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FormContent } from "./FormContent";

export function EditorPagina(props) {
  const { pagina } = props;
  const [arrPagina, setArrPagina] = React.useState([]);
  const [jsonFileName, setJsonFileName] = React.useState("");
  React.useEffect(() => {
    if (pagina.nome === "Vae") {
      setJsonFileName("vae.json");
    } else if (pagina.nome === "Student Central") {
      setJsonFileName("studentcentral.json");
    } else if (pagina.nome === "Gateway to Growth") {
      setJsonFileName("gatewaytogrowth.json");
    } else if (pagina.nome === "Discovery Hub") {
      setJsonFileName("discoveryhub.json");
    } else if (pagina.nome === "Staff & Management") {
      setJsonFileName("staffmanagement.json");
    } else if (pagina.nome === "Legacy Lane") {
      setJsonFileName("legacylane.json");
    } else if (pagina.nome === "header") {
      setJsonFileName("header.json");
    } else if (pagina.nome === "orientamento") {
      setJsonFileName("orientamento.json");
    } else if (pagina.nome === "footer") {
      setJsonFileName("footer.json");
    } else if (pagina.nome === "Academic Avenues") {
      setJsonFileName("academicavenues.json");
    } else if (pagina.nome === "Sezione Vae") {
      setJsonFileName("sezionevae.json");
    } else if (pagina.nome === "Sezione Staff") {
      setJsonFileName("sezionestaff.json");
    } else if (pagina.nome === "Form") {
      setJsonFileName("form.json");
    } else if (pagina.nome === "links") {
      setJsonFileName("links.json");
    }
  }, [pagina]);
  React.useEffect(() => {
    console.log(jsonFileName);
    if (jsonFileName) {
      console.log(jsonFileName);
      fetch(`/copy/${jsonFileName}`) // Usa il template literal per inserire il nome del file
        .then((res) => res.json())
        .then((data) => {
          // Assumo che il file JSON abbia una struttura di oggetto che può essere convertita in un array di chiavi-valori
          // e che tu voglia usare la parte italiana 'it' del tuo JSON
          setArrPagina(Object.entries(data.it));
        })
        .catch((err) => {
          console.error(
            `Errore nel caricamento dei dati da ${jsonFileName}:`,
            err
          );
        });
    } else {
      setArrPagina(Object.entries(pagina));
    }
  }, [jsonFileName]);

  return (
    <>
      <Box>
        {arrPagina.map(
          (entry, index) =>
            entry[0] === "nome" && (
              <Typography variant="h5" key={"nome-" + entry[0] + index}>
                Nome: {entry[1]}
              </Typography>
            )
        )}
        <br />
        {arrPagina.map(
          (entry, index) =>
            entry[0] !== "id" &&
            entry[0] !== "nome" && (
              <FormContent
                paginaId={pagina.id}
                id={"contenuto-form-" + entry[0] + index}
                content={entry}
                key={entry[0] + index}
                json={`/copy/${jsonFileName}`}
              />
            )
        )}
        <br />
        <br />
      </Box>
    </>
  );
}
