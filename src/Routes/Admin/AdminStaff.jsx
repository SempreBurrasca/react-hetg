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
import { aggiungiStaff } from "../../Firebase/AggiornamentoCopy";
import { getStaff } from "../../Firebase/RecuperoCopy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function AdminStaff() {
  const navigate = useNavigate();
  const location = useLocation();
  const atDetailPage = location.pathname !== "/admin/staff";
  const [staff, setStaff] = React.useState(null);
  const [nome, setNome] = React.useState("");
  const [descrizione, setDescrizione] = React.useState("");
  const [tipoStaff, setTipoStaff] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [feed, setFeed] = React.useState("");
  // Definisci una funzione per recuperare le facoltà
  const fetchStaff = () => {
    getStaff()
      .then((data) => {
        localStorage.setItem("staff", JSON.stringify(data));
        setStaff(data);
      })
      .catch(console.error);
  };
  React.useEffect(() => {
    fetchStaff();
  }, []);

  const handleAggiungiClick = async () => {
    try {
      if (nome !== "" && descrizione !== "") {
        await aggiungiStaff(nome, descrizione, tipoStaff).then(() => {
          setOpen(true);
          setFeed("Staff aggiunta con successo");
          fetchStaff();
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
          <Typography variant="h5">Aggiungi una nuovo Staff</Typography>
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
            label="Descrizione"
            value={descrizione}
            multiline
            onChange={(e) => setDescrizione(e.target.value)} // Aggiorna lo stato quando l'input cambia
          />
          <br />
          <Select
            value={tipoStaff}
            onChange={(e) => setTipoStaff(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Tipo di staff
            </MenuItem>
            <MenuItem value="segreteria-studenti">Segreteria Studenti</MenuItem>
          </Select>
          <br />
          <Button variant="contained" fullWidth onClick={handleAggiungiClick}>
            Aggiungi
          </Button>
          <Divider light />
          <br />
          <br />
          <List>
            {staff &&
              staff.map((f, index) => (
                <React.Fragment key={f.id}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleListItemClick(f.id)}>
                      <ListItemText primary={f.nome} />
                      <ArrowForwardIosIcon fontSize="small" />{" "}
                      {/* Aggiunta dell'icona */}
                    </ListItemButton>
                  </ListItem>
                  {index !== staff.length - 1 && <Divider />}{" "}
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
