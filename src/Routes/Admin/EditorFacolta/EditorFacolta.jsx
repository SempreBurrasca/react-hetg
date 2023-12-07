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
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { aggiornaFacolta } from "../../../Firebase/AggiornamentoCopy";
import { getDocenti, getFacoltaById } from "../../../Firebase/RecuperoCopy";

import { handleImageUpload } from "../../../Componenti/Tools/axiosTools";

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

export function EditorFacolta(props) {
  const navigate = useNavigate();
  const { facoltaId } = useParams();
  const [facolta, setFacolta] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [corsi, setCorsi] = useState(null);
  // Inizializza gli stati a stringa vuota o null
  const [nome, setNome] = useState("");
  const [soprannome, setSoprannome] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroParagraph, setHeroParagraph] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [infoParagraph, setInfoParagraph] = useState("");
  const [teachersTitle, setTeachersTitle] = useState("");
  const [teachersParagraph, setTeachersParagraph] = useState("");
  const [open, setOpen] = useState(false);
  const [feed, setFeed] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [preside, setPreside] = useState("");
  const [docenti, setDocenti] = useState([]);

  useEffect(() => {
    const fetchFacolta = async () => {
      setIsLoading(true);
      try {
        const facoltaData = await getFacoltaById(facoltaId);
        setFacolta(facoltaData);
        // Inizializza gli stati qui dopo aver caricato facoltaData
        setNome(facoltaData.nome || "");
        setSoprannome(facoltaData.soprannome || "");
        setHeroTitle(facoltaData.heroTitle || "");
        setHeroParagraph(facoltaData.heroParagraph || "");
        setInfoTitle(facoltaData.infoTitle || "");
        setInfoParagraph(facoltaData.infoParagraph || "");
        setTeachersTitle(facoltaData.teachersTitle || "");
        setTeachersParagraph(facoltaData.teachersParagraph || "");
        setImagePreview(facoltaData.imageUrl || "");
      } catch (err) {
        console.error("Errore durante il recupero della facoltà:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (facoltaId) {
      fetchFacolta();
    }
  }, [facoltaId]);

  useEffect(() => {
    const fetchDocenti = async () => {
      try {
        const docentiData = await getDocenti();
        setDocenti(docentiData); // Supponendo che 'docentiData' sia un array di oggetti docente
      } catch (error) {
        console.error("Errore nel recupero dei docenti", error);
      }
    };
  
    fetchDocenti();
  }, []);


  if (isLoading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Errore durante il caricamento: {error.message}</div>;
  }

  if (!facolta) {
    return <div>Facoltà non trovata.</div>;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

  const handleSoprannomeChange = (event) => {
    setSoprannome(event.target.value);
  };

  const handleAggiornaClick = async () => {
    try {
      setFeed("Aggiornamento in corso");
      setOpen(true);
      console.log(preside)
      await aggiornaFacolta(facolta.id, {
        ...facolta,
        nome: nome,
        soprannome: soprannome,
        heroTitle: heroTitle,
        heroParagraph: heroParagraph,
        infoTitle: infoTitle,
        infoParagraph: infoParagraph,
        teachersTitle: teachersTitle,
        teachersParagraph: teachersParagraph,
        imageUrl: imagePreview,
        corsi: corsi,
        presideId: preside,
      }).then(() => {
        setFeed("Facoltà aggiornata con successo!");
        console.log("Yeee");
        setOpen(true);
        // Aggiorna la cache in localStorage
        const cachedFacolta = localStorage.getItem("facolta");
        if (cachedFacolta) {
          const facoltaArray = JSON.parse(cachedFacolta);
          const updatedFacoltaArray = facoltaArray.map((f) =>
            f.id === facolta.id
              ? {
                  ...f,
                  nome: nome,
                  soprannome: soprannome,
                  heroTitle: heroTitle,
                  heroParagraph: heroParagraph,
                  infoTitle: infoTitle,
                  infoParagraph: infoParagraph,
                  teachersTitle: teachersTitle,
                  teachersParagraph: teachersParagraph,
                  imageUrl: imagePreview,
                  presideId: preside.id,
                  presideNome: preside.nome
                }
              : f
          );
          localStorage.setItem("facolta", JSON.stringify(updatedFacoltaArray));
        }
      });
    } catch (error) {
      setFeed("Errore durante l'aggiornamento della facoltà");
      console.log(error);
      setOpen(true);
    }
  };

  const handleUpload = async (e) => {
    handleImageUpload(e, setOpen, setFeed, setImagePreview);
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
          href={`/admin/facolta`}
          onClick={(e) => handleBreadcrumbClick(e, `/admin/facolta`)}
        >
          Facoltà
        </Link>
        <Typography color="text.primary">{nome}</Typography>
      </Breadcrumbs>
      <Typography variant="h6" gutterBottom>
        {nome}
      </Typography>
      <TextField
        label="Nome"
        multiline
        fullWidth
        value={nome}
        onChange={handleNomeChange}
        margin="normal"
      />
      <TextField
        label="Soprannome"
        multiline
        fullWidth
        value={soprannome}
        onChange={handleSoprannomeChange}
        margin="normal"
      />
      <span>Seleziona Predide di Facoltà</span>
<Select
  label="Preside di Facoltà"
  value={preside}
  onChange={(e) => setPreside(e.target.value)}
  fullWidth
  margin="normal"
>
  {docenti.map((docente) => (
       <MenuItem key={docente.id} value={docente.id}>
       {docente.nome}
     </MenuItem>
  ))}
</Select>
<br/>  <br/>
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
          onChange={handleUpload}
        />
      </Button>
      <br/>  <br/>
      {imagePreview && (
        <Box margin="normal">
          <img
            src={imagePreview}
            alt="Anteprima"
            style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          />
        </Box>
      )}
      <TextField
        label="Titolo Hero Banner"
        multiline
        fullWidth
        value={heroTitle}
        onChange={(e) => {
          setHeroTitle(e.target.value);
        }}
        margin="normal"
      />
      <TextField
        label="Paragrafo Hero Banner"
        multiline
        fullWidth
        value={heroParagraph}
        onChange={(e) => setHeroParagraph(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Titolo Sezione Informazioni"
        multiline
        fullWidth
        value={infoTitle}
        onChange={(e) => setInfoTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Paragrafo Sezione Informazioni"
        multiline
        fullWidth
        value={infoParagraph}
        onChange={(e) => setInfoParagraph(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Titolo Sezione Docenti"
        multiline
        fullWidth
        value={teachersTitle}
        onChange={(e) => setTeachersTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Paragrafo Sezione Docenti"
        multiline
        fullWidth
        value={teachersParagraph}
        onChange={(e) => setTeachersParagraph(e.target.value)}
        margin="normal"
      />
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
