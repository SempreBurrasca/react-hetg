import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Alert,
  Button,
  Snackbar,
  TextField,
  Typography,
  Breadcrumbs,
  Link,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { aggiornaDocenti } from "../../../Firebase/AggiornamentoCopy";
import { getDocentiById } from "../../../Firebase/RecuperoCopy";
import { handleImageUpload } from "../../../Componenti/Tools/axiosTools";
import { handleImageUploadFB } from "../../../Firebase/firebaseStorage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function EditorDocenti(props) {
  const navigate = useNavigate();
  const { docentiId } = useParams();
  const [docenti, setDocenti] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Inizializza gli stati a stringa vuota o null
  const [nomeCognome, setNomeCognome] = useState([" ", " "]);
  const [ruolo, setRuolo] = useState("");
  const [titolo,setTitolo]=useState("")
  const [presides,setPresides]=useState("")
  const [descrizione, setDescrizione] = useState("");
  const [tipo, setTipo] = useState("");
  const [open, setOpen] = useState(false);
  const [feed, setFeed] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchDocenti = async () => {
      setIsLoading(true);
      try {
        const docentiData = await getDocentiById(docentiId);
        setDocenti(docentiData);
        // Inizializza gli stati qui dopo aver caricato docentiData
        setNomeCognome(
          [docentiData.nomeCognome[0], docentiData.nomeCognome[1]] || [" ", " "]
        );
        setRuolo(docentiData.ruolo || "");
        setDescrizione(docentiData.descrizione || "");
        setTipo(docentiData.tipo || "");
        setPresides(docentiData.presides || "");
        setImagePreview(docentiData.imageUrl || "");
      } catch (err) {
        console.error("Errore durante il recupero della docenti:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (docentiId) {
      fetchDocenti();
    }
  }, [docentiId]);

  if (isLoading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Errore durante il caricamento: {error.message}</div>;
  }

  if (!docenti) {
    return <div>docenti non trovato.</div>;
  }

  const handleImageChange = (e) => {
    handleImageUpload(e, setOpen, setFeed, setImagePreview);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleNomeChange = (event) => {
    setNomeCognome([nomeCognome[0], event.target.value]);
  };
  const handleCognomeChange = (event) => {
    setNomeCognome([event.target.value, nomeCognome[1]]);
  };
  const handleRuoloChange = (event) => {
    setRuolo(event.target.value);
  };
  const handleTitoloChange = (event) => {
    setTitolo(event.target.value);
  };
  const handlePresidesChange = (event) => {
    setPresides(event.target.value);
  };

  const handleDescrizoneChange = (event) => {
    setDescrizione(event.target.value);
  };

  const handleAggiornaClick = async () => {
    try {
      setFeed("Aggiornamento in corso");
      setOpen(true);
      await aggiornaDocenti(docenti.id, {
        ...docenti,
        nome: nomeCognome[1] + " " + nomeCognome[0],
        nomeCognome: nomeCognome,
        ruolo: ruolo,
        titolo:titolo,
        presides:presides,
        descrizione: descrizione,
        imageUrl: imagePreview,
      }).then(() => {
        setFeed("Docenti aggiornata con successo!");
        setOpen(true);
        // Aggiorna la cache in localStorage
        const cachedDocenti = localStorage.getItem("docenti");
        if (cachedDocenti) {
          const docentiArray = JSON.parse(cachedDocenti);
          const updateddocentiArray = docentiArray.map((f) =>
            f.id === docenti.id
              ? {
                  ...f,
                  nome: nomeCognome[1] + " " + nomeCognome[0],
                  nomeCognome: nomeCognome,
                  descrizione: descrizione,
                  titolo:titolo,
                  tipo: tipo,
                  presides:presides,
                  imageUrl: imagePreview,
                }
              : f
          );
          localStorage.setItem("docenti", JSON.stringify(updateddocentiArray));
        }
      });
    } catch (error) {
      setFeed("Errore durante l'aggiornamento della docenti");
      console.log(error);
      setOpen(true);
    }
  };

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/admin"
          onClick={(e) => handleBreadcrumbClick(e, "/admin")}
        >
          Admin
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={`/admin/docenti`}
          onClick={(e) => handleBreadcrumbClick(e, `/admin/docenti`)}
        >
          Docenti
        </Link>
        <Typography color="text.primary">
          {" "}
          {nomeCognome[1] + " " + nomeCognome[0]}
        </Typography>
      </Breadcrumbs>
      <Typography variant="h6" gutterBottom>
        {nomeCognome[1] + " " + nomeCognome[0]}
      </Typography>
      <TextField
        label="Nome"
        fullWidth
        value={nomeCognome[1]}
        onChange={handleNomeChange}
        margin="normal"
      />
      <TextField
        label="Cognome"
        fullWidth
        value={nomeCognome[0]}
        onChange={handleCognomeChange}
        margin="normal"
      />
      <TextField
        label="Ruolo"
        fullWidth
        value={ruolo}
        onChange={handleRuoloChange}
        margin="normal"
      />
            <TextField
        label="Titolo"
        fullWidth
        value={titolo}
        onChange={handleTitoloChange}
        margin="normal"
      />
      <TextField
        label="Preside delle Facoltà (separate da ,)"
        fullWidth
        value={presides}
        onChange={handlePresidesChange}
        margin="normal"
      />

      <TextField
        label="Descrizione"
        multiline
        fullWidth
        value={descrizione}
        onChange={handleDescrizoneChange}
        margin="normal"
      />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        margin="normal"
      >
        Upload Immagine
        <VisuallyHiddenInput
          type="file"
          accept="image/gif, image/jpeg, image/png"
          name="myFile"
          onChange={handleImageChange}
        />
      </Button>
      {imagePreview && (
        <Box margin="normal">
          <img
            src={imagePreview}
            alt="Anteprima"
            style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          />
        </Box>
      )}
      <Button
        variant="contained"
        fullWidth
        onClick={handleAggiornaClick}
        sx={{ my: 2 }}
      >
        Aggiorna
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          {feed}
        </Alert>
      </Snackbar>
    </Box>
  );
}
