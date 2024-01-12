import * as React from "react";
import EditorJS from "@editorjs/editorjs";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import { aggiornamentoPagina } from "../../../Firebase/AggiornamentoCopy";

export function FormContent(props) {
  const { content, paginaId, contentId, json } = props;
  const [textField, setTextField] = React.useState(content);
  const [open, setOpen] = React.useState(false);
  const [feed, setFeed] = React.useState("");

  React.useEffect(() => {
    console.log(json, content,paginaId, contentId,);
  }, []);

  const renderContentFields = () => {
    if (typeof content === "object" && content !== null) {
      // Se content è un oggetto, genera un TextField per ogni chiave
      return Object.keys(content).map((key) => (
        <TextField
          multiline
          value={textField[key]}
          onChange={(e) => handleTextChange(e.target.value, key)}
          key={key}
        />
      ));
    } else {
      // Se content non è un oggetto, mostra un solo TextField
      return (
        <TextField
          multiline
          value={textField}
          onChange={(e) => handleTextChange(e.target.value)}
        />
      );
    }
  };

  const handleTextChange = (value, key) => {
    if (key) {
      // Aggiorna il valore per la chiave specifica se content è un oggetto
      setTextField({ ...textField, [key]: value });
    } else {
      // Aggiorna il valore intero se content non è un oggetto
      setTextField(value);
    }
  };

  const handleSaveContent = async () => {
    let updatedContent;
    let updateKey = contentId; // Chiave predefinita, utilizzata se content è una stringa
  
    // Controlla se content è un oggetto
    if (typeof content === 'object' && content !== null) {
      updatedContent = textField; // Invia l'intero oggetto textField
    } else {
      // Se content è una stringa, invia solo la parte modificata
      updatedContent = textField ;
    }
    console.log(json,updateKey,updatedContent);
    try {
 
      const response = await fetch("/api/updateJson.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: "/copy/copy.json", // il percorso del file JSON
          content: updatedContent, // il contenuto aggiornato
          key: updateKey, // la chiave da aggiornare, se presente
          paginaId: paginaId, // identificativo della pagina
        }),
      });
  
      // Gestisci la risposta dal server
      if (response.ok) {
        const result = await response.json();
        setOpen(true);
        setFeed(result.message);
      } else {
        throw new Error("Errore nella risposta del server");
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento del contenuto:", error);
      setOpen(true);
      setFeed("Errore durante l'aggiornamento del contenuto");
    }
  };
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleButtonClick = () => {
    if (json) {
      handleSaveContent();
    } else {
    }
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}
      >
        {renderContentFields()}
        <Button variant="contained" fullWidth onClick={handleButtonClick}>
          Salva Contenuto {contentId}
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
