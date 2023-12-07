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
} from "@mui/material";
import { aggiungiFacolta } from "../../Firebase/AggiornamentoCopy";
import { getFacoltas } from "../../Firebase/RecuperoCopy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function AdminFacolta() {
  const navigate = useNavigate();
  const location = useLocation();
  const atDetailPage = location.pathname !== "/admin/facolta";
  const [facolta, setFacolta] = React.useState(null);
  const [nome, setNome] = React.useState("");
  const [soprannome, setSoprannome] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [feed, setFeed] = React.useState("");
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

  const handleAggiungiClick = async () => {
    try {
      if (nome !== "" && soprannome !== "") {
        await aggiungiFacolta(nome, soprannome).then(() => {
          setOpen(true);
          setFeed("Facoltà aggiunta con successo");
          fetchFacoltas();
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
          <Typography variant="h5">Aggiungi una nuova Facoltà</Typography>
          <br />
          <TextField
            fullWidth
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Aggiorna lo stato quando l'input cambia
          />
          <br />
          <TextField
            fullWidth
            label="Soprannome"
            value={soprannome}
            onChange={(e) => setSoprannome(e.target.value)} // Aggiorna lo stato quando l'input cambia
          />
          <br />
          <Button variant="contained" fullWidth onClick={handleAggiungiClick}>
            Aggiungi
          </Button>
          <Divider light />
          <br />
          <br />

          <List>
            {facolta &&
              facolta.map((f, index) => (
                <React.Fragment key={f.id}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleListItemClick(f.id)}>
                      <ListItemText primary={f.nome} />
                      <ArrowForwardIosIcon fontSize="small" />{" "}
                      {/* Aggiunta dell'icona */}
                    </ListItemButton>
                  </ListItem>
                  {index !== facolta.length - 1 && <Divider />}{" "}
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
