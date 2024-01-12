import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Alert,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Snackbar,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { aggiungiDocenti } from "../../Firebase/AggiornamentoCopy";
import { getDocenti } from "../../Firebase/RecuperoCopy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function AdminDocenti() {
  const navigate = useNavigate();
  const location = useLocation();
  const atDetailPage = location.pathname !== "/admin/docenti";
  const [docenti, setDocenti] = React.useState(null);
  const [nomeCognome, setNomeCognome] = React.useState([" ", " "]);
  const [descrizione, setDescrizione] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [feed, setFeed] = React.useState("");
  // Definisci una funzione per recuperare le facoltà
  const fetchDocenti = () => {
    getDocenti()
      .then((data) => {
        localStorage.setItem("docenti", JSON.stringify(data));
        setDocenti(data);
      })
      .catch(console.error);
  };
  React.useEffect(() => {
    // Controlla se i dati sono presenti in localStorage
    const cachedDocenti = localStorage.getItem("docenti");
    if (cachedDocenti) {
      // Se presenti in localStorage, utilizza i dati dalla cache
      setDocenti(JSON.parse(cachedDocenti));
      console.log("Presa dalla cache");
    } else {
      fetchDocenti();
    }
  }, []);

  const handleAggiungiClick = async () => {
    try {
      if (nomeCognome[0] !== "" && descrizione !== "") {
        await aggiungiDocenti(nomeCognome, descrizione).then(() => {
          setOpen(true);
          setFeed("Docenti aggiunta con successo");
          fetchDocenti();
        });
      } else {
        console.log("Campi vuoti");
        setOpen(true);
        setFeed("Campi Vuoti");
      }
    } catch (error) {
      console.error("Errore durante l'aggiunta della facoltà:", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Funzione per la navigazione alla sotto-route
  const handleListItemClick = (id) => {
    navigate(`./${id}`);
  };

  return (
    <>
      {atDetailPage ? (
        <Outlet />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Aggiungi una nuovo Docente</Typography>
          <br />
          <TextField
            fullWidth
            label="Nome"
            value={nomeCognome[1]}
            onChange={(e) => setNomeCognome([nomeCognome[0], e.target.value])} // Aggiorna lo stato quando l'input cambia
          />
          <br />
          <TextField
            fullWidth
            label="Cognome"
            value={nomeCognome[0]}
            onChange={(e) => setNomeCognome([e.target.value, nomeCognome[1]])} // Aggiorna lo stato quando l'input cambia
          />
          <br />
          <TextField
            fullWidth
            label="Descrizione"
            value={descrizione}
            multiline
            onChange={(e) => setDescrizione(e.target.value)} // Aggiorna lo stato quando l'input cambia
          />
          <br />
          <br />
          <Button variant="contained" fullWidth onClick={handleAggiungiClick}>
            Aggiungi
          </Button>
          <Divider light />
          <br />
          <br />
          <List>
            {docenti &&
              docenti
                .sort((a, b) => a.nome.localeCompare(b.nome))
                .map((f, index) => (
                  <React.Fragment key={f.id}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleListItemClick(f.id)}>
                        <ListItemText primary={f.nome} />
                        <ArrowForwardIosIcon fontSize="small" />{" "}
                        {/* Aggiunta dell'icona */}
                      </ListItemButton>
                    </ListItem>
                    {index !== docenti.length - 1 && <Divider />}{" "}
                    {/* Aggiunge Divider eccetto che dopo l'ultimo elemento */}
                  </React.Fragment>
                ))}
          </List>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              {feed}
            </Alert>
          </Snackbar>
        </Box>
      )}
    </>
  );
}
