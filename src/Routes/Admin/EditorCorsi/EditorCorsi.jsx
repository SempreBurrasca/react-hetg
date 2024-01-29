import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

import {
  Alert,
  Button,
  Snackbar,
  TextField,
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Divider,
  Select,
  Input,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getCorsoById } from "../../../Firebase/RecuperoCopy";
import { aggiornaCorsoById } from "../../../Firebase/AggiornamentoCopy";
import { handleImageUpload } from "../../../Componenti/Tools/axiosTools";
import { handleImageUploadFB } from "../../../Firebase/firebaseStorage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export function EditorCorsi(props) {
  const navigate = useNavigate();
  const { corsoId } = useParams();
  const [corso, setCorso] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [facolta, setFacolta] = useState(null);
  // Add additional state hooks as needed for the course information
  const [nomeCorso, setNomeCorso] = useState("");
  const [titleHero, setTitleHero] = useState("");
  const [paragrafoHero, setParagrafoHero] = useState("");
  const [paragrafoDescrizione, setParagrafoDescrizione] = useState("");
  const [lista1Titolo, setLista1Titolo] = useState("");
  const [lista1Contenuto, setLista1Contenuto] = useState("");
  const [lista2Titolo, setLista2Titolo] = useState("");
  const [lista2Contenuto, setLista2Contenuto] = useState("");
  const [lista3Titolo, setLista3Titolo] = useState("");
  const [lista3Contenuto, setLista3Contenuto] = useState("");
  const [lista4Titolo, setLista4Titolo] = useState("");
  const [lista4Contenuto, setLista4Contenuto] = useState("");
  const [lista5Titolo, setLista5Titolo] = useState("");
  const [lista5Contenuto, setLista5Contenuto] = useState("");
  const [titoloDocenti, setTitoloDocenti] = useState("");
  const [paragrafoDocenti, setParagrafoDocenti] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFacoltas, setSelectedFacoltas] = useState([]);
  const [notDownload, setNotDownload] = useState(false);
  const [open, setOpen] = useState(false);
  const [feed, setFeed] = useState("");
  const theme = useTheme();
  // Definisci una funzione per recuperare le facoltà
  const fetchFacoltas = () => {
    getFacoltas()
      .then((data) => {
        localStorage.setItem("facolta", JSON.stringify(data));
        setFacolta(data);
      })
      .catch(console.error);
  };
  React.useEffect(() => {
    // Controlla se i dati sono presenti in localStorage
    const cachedFacolta = localStorage.getItem("facolta");
    if (cachedFacolta) {
      // Se presenti in localStorage, utilizza i dati dalla cache
      setFacolta(JSON.parse(cachedFacolta));
      console.log("Presa dalla cache");
    } else {
      fetchFacoltas();
    }
  }, []);
  useEffect(() => {
    const fetchCorso = async () => {
      setIsLoading(true);
      try {
        const corsoData = await getCorsoById(corsoId);
        if (corsoData) {
          setCorso(corsoData);
          setNomeCorso(corsoData.nome || "");
          setTitleHero(corsoData.titleHero || "");
          setParagrafoHero(corsoData.paragrafoHero || "");
          setParagrafoDescrizione(corsoData.paragrafoDescrizione || "");
          setLista1Titolo(corsoData.lista1Titolo || "");
          setLista1Contenuto(corsoData.lista1Contenuto || "");
          setLista2Titolo(corsoData.lista2Titolo || "");
          setLista2Contenuto(corsoData.lista2Contenuto || "");
          setLista3Titolo(corsoData.lista3Titolo || "");
          setLista3Contenuto(corsoData.lista3Contenuto || "");
          setLista4Titolo(corsoData.lista4Titolo || "");
          setLista4Contenuto(corsoData.lista4Contenuto || "");
          setLista5Titolo(corsoData.lista5Titolo || "");
          setLista5Contenuto(corsoData.lista5Contenuto || "");
          setTitoloDocenti(corsoData.titoloDocenti || "");
          setParagrafoDocenti(corsoData.paragrafoDocenti || "");
          setSelectedFacoltas(corsoData.facoltas || []);
          setImagePreview(corsoData.imageUrl || "");
          setNotDownload(corsoData.notDownload || false);
          // Aggiungi qui altri campi se necessario
        } else {
          // Gestisci il caso in cui il corso non esiste o non viene trovato
          console.error("Corso non trovato");
          setError(new Error("Corso non trovato"));
        }
      } catch (err) {
        console.error("Errore durante il recupero del corso:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (corsoId) {
      fetchCorso();
    }
  }, [corsoId]);

  if (isLoading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Errore durante il caricamento: {error.message}</div>;
  }

  if (!corso) {
    return <div>Corso non trovato.</div>;
  }

  const handleFacoltaChange = (event) => {
    // Imposta le facoltà selezionate
    setSelectedFacoltas(event.target.value);
  };
  const handleImageChange = (e) => {
    handleImageUpload(e, setOpen, setFeed, setImagePreview);
  };
  // Add your form handlers here...
  const handleUpdateCourse = async () => {
    // Crea un oggetto con i dati aggiornati
    const updatedCorsoData = {
      // Assicurati di includere tutti i campi necessari per l'aggiornamento
      id: corso.id,
      tipo: corso.tipo,
      nome: nomeCorso,
      titleHero: titleHero,
      paragrafoHero: paragrafoHero,
      paragrafoDescrizione: paragrafoDescrizione,
      lista1Titolo: lista1Titolo,
      lista1Contenuto: lista1Contenuto,
      lista2Titolo: lista2Titolo,
      lista2Contenuto: lista2Contenuto,
      lista3Titolo: lista3Titolo,
      lista3Contenuto: lista3Contenuto,
      lista4Titolo: lista4Titolo,
      lista4Contenuto: lista4Contenuto,
      lista5Titolo: lista5Titolo,
      lista5Contenuto: lista5Contenuto,
      titoloDocenti: titoloDocenti,
      paragrafoDocenti: paragrafoDocenti,
      facoltas: selectedFacoltas,
      imageUrl: imagePreview,
      notDownload: notDownload,
    };

    try {
      setFeed("Aggiornamento corso");
      setOpen(true);
      // Chiama la funzione di aggiornamento passando l'oggetto corsoData aggiornato
      await aggiornaCorsoById(updatedCorsoData);

      setFeed("Corso aggiornato con successo!");
      setOpen(true);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del corso:", error);
      setError(error);
      setFeed("Errore durante l'aggiornamento del corso.");
      setOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Update the breadcrumb navigation */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/admin"
          onClick={(e) => e.preventDefault()} // Replace with navigate function if needed
        >
          Admin
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={`/admin/corsi`}
          onClick={(e) => e.preventDefault()} // Replace with navigate function if needed
        >
          Corsi
        </Link>
        <Typography color="text.primary">{nomeCorso}</Typography>
      </Breadcrumbs>
      <Box>
        <Typography variant="h6" gutterBottom>
          Modifica Corso: {nomeCorso}
        </Typography>
        <Typography variant="body" gutterBottom>
          Tipologia: {corso.tipo}
        </Typography>
      </Box>
      <Divider light />
      <Box sx={{ margin: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="facolta-multiple-chip-label">Facoltà</InputLabel>
          <Select
            labelId="facolta-multiple-chip-label"
            multiple
            value={selectedFacoltas}
            onChange={handleFacoltaChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {facolta.map((facolta) => (
              <MenuItem
                key={facolta.id}
                value={facolta.nome}
                style={getStyles(facolta.nome, selectedFacoltas)}
              >
                {facolta.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          label="Nome Corso"
          fullWidth
          value={nomeCorso}
          onChange={(e) => setNomeCorso(e.target.value)}
          multiline
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
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
        <br />
        <br />
        <Typography variant="body" gutterBottom>
          Nascondere download piano di studi
        </Typography>
        <Switch
          checked={notDownload}
          onChange={(e) => {
            setNotDownload(e.target.checked);
            console.log(e.target.checked)
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <TextField
          label="Titolo Hero"
          fullWidth
          value={titleHero}
          onChange={(e) => setTitleHero(e.target.value)}
          multiline
        />
        <TextField
          label="Paragrafo Hero"
          fullWidth
          multiline
          value={paragrafoHero}
          onChange={(e) => setParagrafoHero(e.target.value)}
        />
        <TextField
          label="Paragrafo Descrizione"
          fullWidth
          multiline
          value={paragrafoDescrizione}
          onChange={(e) => setParagrafoDescrizione(e.target.value)}
        />
        <TextField
          label="Lista 1 Titolo"
          fullWidth
          value={lista1Titolo}
          onChange={(e) => setLista1Titolo(e.target.value)}
        />
        <TextField
          label="Lista 1 Contenuto"
          fullWidth
          multiline
          value={lista1Contenuto}
          onChange={(e) => setLista1Contenuto(e.target.value)}
        />
        <TextField
          label="Lista 2 Titolo"
          fullWidth
          value={lista2Titolo}
          onChange={(e) => setLista2Titolo(e.target.value)}
        />
        <TextField
          label="Lista 2 Contenuto"
          fullWidth
          multiline
          value={lista2Contenuto}
          onChange={(e) => setLista2Contenuto(e.target.value)}
        />

        <TextField
          label="Lista 3 Titolo"
          fullWidth
          value={lista3Titolo}
          onChange={(e) => setLista3Titolo(e.target.value)}
        />
        <TextField
          label="Lista 3 Contenuto"
          fullWidth
          multiline
          value={lista3Contenuto}
          onChange={(e) => setLista3Contenuto(e.target.value)}
        />

        <TextField
          label="Lista 4 Titolo"
          fullWidth
          value={lista4Titolo}
          onChange={(e) => setLista4Titolo(e.target.value)}
        />
        <TextField
          label="Lista 4 Contenuto"
          fullWidth
          multiline
          value={lista4Contenuto}
          onChange={(e) => setLista4Contenuto(e.target.value)}
        />
        <TextField
          label="Lista 5 Titolo"
          fullWidth
          value={lista5Titolo}
          onChange={(e) => setLista5Titolo(e.target.value)}
        />
        <TextField
          label="Lista 5 Contenuto"
          fullWidth
          multiline
          value={lista5Contenuto}
          onChange={(e) => setLista5Contenuto(e.target.value)}
        />

        <TextField
          label="Titolo Docenti"
          fullWidth
          multiline
          value={titoloDocenti}
          onChange={(e) => setTitoloDocenti(e.target.value)}
        />
        <TextField
          label="Paragrafo Docenti"
          fullWidth
          multiline
          value={paragrafoDocenti}
          onChange={(e) => setParagrafoDocenti(e.target.value)}
        />

        <Button variant="contained" onClick={handleUpdateCourse} sx={{ my: 2 }}>
          Aggiorna
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          {feed}
        </Alert>
      </Snackbar>
    </Box>
  );
}

function getStyles(name, selectedFacoltas) {
  return {
    fontWeight: selectedFacoltas.includes(name)
      ? "fontWeightMedium"
      : "fontWeightRegular",
    backgroundColor: selectedFacoltas.includes(name) ? "#95354c" : "", // backgroundColor magenta se selezionato
    color: selectedFacoltas.includes(name) ? "white" : "", // testo bianco se selezionato
  };
}
