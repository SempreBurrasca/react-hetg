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
import { aggiornaStaff } from "../../../Firebase/AggiornamentoCopy";
import { getStaffById } from "../../../Firebase/RecuperoCopy";
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

export function EditorStaff(props) {
  const navigate = useNavigate();
  const { staffId } = useParams();
  const [staff, setStaff] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Inizializza gli stati a stringa vuota o null
  const [nome, setNome] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [tipo, setTipo] = useState("");
  const [open, setOpen] = useState(false);
  const [feed, setFeed] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    console.log("=>>",staffId)
    const fetchStaff = async () => {
      setIsLoading(true);
      try {
        const staffData = await getStaffById(staffId);
        setStaff(staffData);
        // Inizializza gli stati qui dopo aver caricato staffData
        setNome(staffData.nome || "");
        setDescrizione(staffData.descrizione || "");
        setTipo(staffData.tipo || "");
        setImagePreview(staffData.imageUrl||"")
      } catch (err) {
        console.error("Errore durante il recupero della staff:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (staffId) {
      fetchStaff();
    }
  }, [staffId]);

  if (isLoading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Errore durante il caricamento: {error.message}</div>;
  }

  if (!staff) {
    return <div>Staff non trovato.</div>;
  }

  const handleImageChange = (e) => {
    handleImageUpload(e,setOpen,setFeed,setImagePreview)
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDescrizoneChange = (event) => {
    setDescrizione(event.target.value);
  };

  const handleAggiornaClick = async () => {
    try {
      setFeed("Aggiornamento in corso");
      setOpen(true);
      await aggiornaStaff(staff.id, {
        ...staff,
        nome: nome,
        descrizione: descrizione,
        tipo: tipo,
        imageUrl:imagePreview
      }).then(() => {
        setFeed("Staff aggiornata con successo!");
        setOpen(true);
        // Aggiorna la cache in localStorage
        const cachedStaff = localStorage.getItem("staff");
        if (cachedStaff) {
          const staffArray = JSON.parse(cachedStaff);
          const updatedstaffArray = staffArray.map((f) =>
            f.id === staff.id
              ? {
                  ...f,
                  nome: nome,
                  descrizione: descrizione,
                  tipo: tipo,
                  imageUrl:imagePreview
                }
              : f
          );
          localStorage.setItem("staff", JSON.stringify(updatedstaffArray));
        }
      });
    } catch (error) {
      setFeed("Errore durante l'aggiornamento della staff");
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
          href={`/admin/staff`}
          onClick={(e) => handleBreadcrumbClick(e, `/admin/staff`)}
        >
          Staff
        </Link>
        <Typography color="text.primary">{nome}</Typography>
      </Breadcrumbs>
      <Typography variant="h6" gutterBottom>
        {nome}
      </Typography>
      <TextField
        label="Nome"
        fullWidth
        value={nome}
        onChange={handleNomeChange}
        margin="normal"
      />
      <Select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="" disabled>
          Tipo di staff
        </MenuItem>
        <MenuItem value="rettore">Rettore</MenuItem>
            <MenuItem value="prorettore">Prorettore</MenuItem>
            <MenuItem value="direttore">Direttore Generale</MenuItem>
        <MenuItem value="sa">Senato Accademico</MenuItem>
        <MenuItem value="ndv">Nucleo di Valutazione</MenuItem>
        <MenuItem value="cdq">Commissione di Qualità</MenuItem>
      </Select>
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
        <VisuallyHiddenInput type="file"  accept="image/gif, image/jpeg, image/png" name="myFile"  onChange={handleImageChange} />
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
