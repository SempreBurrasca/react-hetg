import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FormContent } from "./FormContent";

export function EditorPagina(props) {
  const { pagina } = props;
  const [objPagina, setObjPagina] = React.useState([]);
  const [jsonFileName, setJsonFileName] = React.useState("");
  React.useEffect(() => {
    console.log(pagina);
  }, [pagina]);
  React.useEffect(() => {
    console.log(pagina.nome);
    if (pagina.nome) {
      fetch(`/copy/copy.json`) // Usa il template literal per inserire il nome del file
        .then((res) => res.json())
        .then((data) => {
          setObjPagina(data.it[pagina.nome]);
        })
        .catch((err) => {
          console.error(
            `Errore nel caricamento dei dati da ${pagina.nome}:`,
            err
          );
        });
    } else {
    }
  }, [pagina.nome]);

  return (
    <>
      <Box>
        {Object.entries(objPagina).map(([key, value], index) => (
          <FormContent
            paginaId={pagina.nome}
            contentId={key}
            id={"contenuto-form-" + key + index}
            content={value}
            key={key + index}
            json={`/copy/copy`}
          >
            {console.log(key,value)}
          </FormContent>
        ))}
        <br />
        <br />
      </Box>
    </>
  );
}
