import * as React from "react";
import EditorJS from "@editorjs/editorjs";
import {
  Button,
  Divider,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import Box from "@mui/material/Box";
import { aggiornamentoPagina } from "../../../Firebase/AggiornamentoCopy";

export function FormContent(props) {
  const { content, paginaId, json } = props;
  const [textFields, setTextFields] = React.useState(content[1]);
  const [open, setOpen] = React.useState(false);
  const [feed, setFeed] = React.useState("");
  const handleTextChange = (index, newValue) => {
    const newTextFieldValues = [...textFields];
    newTextFieldValues[index] = newValue;
    setTextFields(newTextFieldValues);
  };

  const handleSaveContentFB = async () => {
    try {
      await aggiornamentoPagina(paginaId, content[0], textFields).then(() => {
        // Aggiorna la cache
        const cachedPagine = localStorage.getItem("pagine");
        if (cachedPagine) {
          const pagine = JSON.parse(cachedPagine);
          const paginaIndex = pagine.findIndex((p) => p.id === paginaId);
          if (paginaIndex > -1) {
            pagine[paginaIndex][content[0]] = textFields; // Aggiorna il contenuto specifico
            localStorage.setItem("pagine", JSON.stringify(pagine)); // Salva i dati aggiornati nella cache
          }
        }
        setOpen(true);
        setFeed("Contenuto aggiornato");
      });
    } catch (error) {
      console.error("Errore durante l'aggiornamento del contenuto:", error);
      setOpen(true);
      setFeed("Errore durante l'aggiornamento del contenuto");
    }
  };
  const handleSaveContent = async () => {
    if (Array.isArray(textFields)) {
      // Preparare l'oggetto da inviare
      const updatedContent = { [content[0]]: textFields };

      try {
        // Invia i dati aggiornati al backend
        const response = await fetch("/api/updateJson.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: props.json, // il percorso del file JSON
            content: updatedContent, // il contenuto aggiornato
            key: content[0],
          }),
        });

        if (response.ok) {
          // La risposta dal server è positiva
          const result = await response.json();
          setOpen(true);
          setFeed(result.message); // Presumendo che il backend invii un messaggio di risposta
        } else {
          // Gestisci la risposta negativa
          throw new Error("Errore nella risposta del server");
        }
      } catch (error) {
        console.error("Errore durante l'aggiornamento del contenuto:", error);
        setOpen(true);
        setFeed("Errore durante l'aggiornamento del contenuto");
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleButtonClick = () => {
    if (props.json) {
      handleSaveContent();
    } else {
      handleSaveContentFB();
    }
  };
  React.useEffect(() => {
    console.log(json, content[0]);
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}
      >
        {Array.isArray(textFields) ? (
          textFields.map((text, index) => (
            <React.Fragment key={index}>
              <TextField
                multiline
                value={text}
                onChange={(e) => handleTextChange(index, e.target.value)}
              />
              <Divider />
            </React.Fragment>
          ))
        ) : (
          <TextField
            multiline
            value={textFields}
            onChange={(e) => handleTextChange(0, e.target.value)}
          />
        )}

        <Button variant="contained" fullWidth onClick={handleButtonClick}>
          Salva Contenuto {content[0]}
        </Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            {feed}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
