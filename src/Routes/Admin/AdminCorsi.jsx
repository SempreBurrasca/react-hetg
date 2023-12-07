import * as React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Autocomplete,
  Divider,
  Snackbar,
  Alert,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import {
  aggiornaCorsoById,
  aggiungiCorso,
} from "../../Firebase/AggiornamentoCopy";
import { getCorsiXXX, getFacoltas } from "../../Firebase/RecuperoCopy";
import { v4 as uuidv4 } from "uuid";
function generateUniqueId() {
  return uuidv4(); // Genera un UUID
}
export function AdminCorsi() {
  const navigate = useNavigate();
  const location = useLocation();
  const atDetailPage = location.pathname !== "/admin/corsi";
  const [facolta, setFacolta] = React.useState([]);
  const [nomeCorso, setNomeCorso] = React.useState("");
  const [tipoCorso, setTipoCorso] = React.useState("");
  const [facoltaSelezionata, setFacoltaSelezionata] = React.useState("");
  const [corsi, setCorsi] = React.useState([]);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [selectedFacolta, setSelectedFacolta] = React.useState([]);
  const [isEditMode, setIsEditMode] = React.useState(false);

  const db = getFirestore(); // assicurati di aver inizializzato Firestore

  const columns = [
    { field: "nome", headerName: "Corso", flex: 1 },
    { field: "tipo", headerName: "Tipo", flex: 0.3 },
    {
      field: "facoltas",
      headerName: "Facoltà",
      flex: 1,
      editable: isEditMode, // Rendi la colonna modificabile
      renderEditCell: (params) => (
        <FacoltaSelectEditor {...params} facolta={facolta} />
      ),
      valueGetter: (params) => params.row.facoltas || [],
    },
  ];
  // Recupero delle facoltà
  React.useEffect(() => {
    // Controlla se i dati sono presenti in localStorage
    const cachedFacolta = false;
    if (cachedFacolta) {
      // Se presenti in localStorage, utilizza i dati dalla cache
      setFacolta(JSON.parse(cachedFacolta));
      console.log("Presa dalla cache");
    } else {
      // Altrimenti, recupera i dati e aggiorna localStorage
      getFacoltas()
        .then((data) => {
          localStorage.setItem("corsi", JSON.stringify(data)); // Aggiorna localStorage
          setFacolta(data);
        })
        .catch(console.error);
    }
  }, []);
  React.useEffect(() => {
    // Funzione per recuperare tutti i corsi da tutte le collezioni
    async function getAllCorsi() {
      const collections = [
        "triennale",
        "magistrale",
        "phd",
        "master-i",
        "master-ii",
        "master-ex",
        "perfezionamento",
        "academy",
      ];

      try {
        const allCorsiPromises = collections.map((collection) =>
          getCorsiXXX(collection)
        );
        const allCorsiResults = await Promise.all(allCorsiPromises);
        const combinedCorsi = allCorsiResults.flat(); // Combina tutti i corsi in un unico array

        // Salva i corsi combinati nella cache e nello stato
        localStorage.setItem("corsi", JSON.stringify(combinedCorsi));
        setCorsi(combinedCorsi);
      } catch (error) {
        console.error("Errore nel recupero dei corsi:", error);
      }
    }

    getAllCorsi();
  }, []);

  const filteredCorsi = corsi.filter((corso) => {
    return corso.nome.toLowerCase().includes(filterValue.toLowerCase());
  });
  const handleEditModeChange = (event) => {
    setIsEditMode(event.target.checked);
  };
  const renderFilterTextField = () => (
    <TextField
      label="Filtra per nome del corso"
      variant="outlined"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)} // Step 3: Update the filter state on input change
      fullWidth
      margin="normal"
    />
  );
  const handleAggiungiCorso = async () => {
    console.log(facoltaSelezionata.nome);
    // Assicurati che la facoltà selezionata sia un oggetto con il campo 'nome'.
    if (typeof facoltaSelezionata === "object" && facoltaSelezionata.nome) {
      const corsoData = {
        tipo: tipoCorso.toLowerCase(),
        nome: nomeCorso,
        facolta: facoltaSelezionata.nome, // Qui si suppone che il nome della facoltà sia sotto la proprietà 'nome'
      };

      aggiungiCorso(corsoData)
        .then((newDocId) => {
          const newCorsoWithId = { ...corsoData, id: newDocId }; // Aggiunge l'ID al nuovo corso
          setCorsi((prevCorsi) => [...prevCorsi, newCorsoWithId]);
          localStorage.setItem(
            "corsi",
            JSON.stringify([...corsi, newCorsoWithId])
          );
          setSnackbarSeverity("success");
          setSnackbarMessage("Corso aggiunto con successo!");
          setOpenSnackbar(true);
        })
        .catch((e) => {
          // Set the Snackbar message to show the error and open it
          setSnackbarSeverity("error");
          setSnackbarMessage("Errore nell'aggiunta del corso: " + e.message);
          setOpenSnackbar(true);
        });
    } else {
      console.error("Facoltà non selezionata o non valida");
      setSnackbarSeverity("warning");
      setSnackbarMessage("Facoltà non selezionata o non valida");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleRowClick = (params) => {
    // Supponendo che tu abbia un path /corso/:corsoId definito nelle tue rotte
    navigate(`./${params.row.id}`);
  };
  const handleSelectionChange = (selectionModel) => {
    setSelectedRows(selectionModel);
    console.log(selectionModel);
  };
  const handleFacoltaChange = (event) => {
    const newFacoltas = event.target.value;
    setSelectedFacolta(newFacoltas);

    const updatedRows = corsi.map((row) => {
      if (selectedRows.includes(row.id)) {
        return { ...row, facoltas: newFacoltas };
      }
      return row;
    });
    setCorsi(updatedRows);
    // Qui dovresti anche aggiornare i dati sul tuo database o backend
  };
  const handleProcessRowUpdate = async (newRow) => {
    const updatedRows = corsi.map((row) => {
      if (row.id === newRow.id) {
        // Assicurati che l'array facoltas non contenga duplicati e sia corretto
        return { ...row, facoltas: [...new Set(newRow.facoltas)] };
      }
      return row;
    });

    setCorsi(updatedRows);
    // Aggiorna il database qui se necessario
    const updatedCorsoData = {
      ...newRow,
      facoltas: newRow.selectedFacoltas, // Assumi che selectedFacoltas sia un array di stringhe
    };
    await aggiornaCorsoById(newRow);
    return newRow;
  };
  return (
    <>
      {atDetailPage ? (
        <Outlet />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography variant="h5">Aggiungi un nuovo Corso</Typography>
          <TextField
            label="Nome Corso"
            value={nomeCorso}
            onChange={(e) => setNomeCorso(e.target.value)}
          />
          <Select
            value={tipoCorso}
            onChange={(e) => setTipoCorso(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Tipo di corso
            </MenuItem>
            {/* Aggiungi altri MenuItem per ogni tipo di corso */}
            <MenuItem value="Triennale">Triennale</MenuItem>
            <MenuItem value="Magistrale">Magistrale</MenuItem>
            <MenuItem value="PhD">Ph.D.</MenuItem>
            <MenuItem value="Master-I">Master I Livello</MenuItem>
            <MenuItem value="Master-II">Master II Livello</MenuItem>
            <MenuItem value="Master-Ex">Master Executive</MenuItem>
            <MenuItem value="Perfezionamento">
              Corsi di Perfezionamento
            </MenuItem>
            <MenuItem value="Academy">Corsi Academy</MenuItem>
          </Select>
          <Autocomplete
            value={facoltaSelezionata}
            onChange={(event, newValue) => {
              setFacoltaSelezionata(newValue);
            }}
            options={facolta}
            getOptionLabel={(option) => option.nome || ""}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Seleziona Facoltà"
                placeholder="Digita per cercare..."
              />
            )}
            fullWidth
          />
          <Button variant="contained" fullWidth onClick={handleAggiungiCorso}>
            Aggiungi Corso
          </Button>
          <Divider light />
          {renderFilterTextField()}
          {corsi && corsi.length > 0 && (
            <Typography variant="p">
              Clicca sulla singola riga per modificare il corso. Fai doppio
              click sulla colonna delle Facoltà per modificarle.
            </Typography>
          )}

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isEditMode}
                  onChange={handleEditModeChange}
                />
              }
              label="Modalità di modifica"
            />
          </FormGroup>

          {corsi && corsi.length > 0 && (
            <Box style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={filteredCorsi} // Changed this line
                columns={columns}
                editable={isEditMode}
                getRowId={(row) => row.id}
                onRowClick={!isEditMode ? handleRowClick : undefined}
                processRowUpdate={handleProcessRowUpdate}
              />
            </Box>
          )}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      )}
    </>
  );
}

function FacoltaSelectEditor(props) {
  const { id, value, api, field, facolta } = props;

  const handleChange = (event) => {
    // Chiamare setEditCellValue per cambiare il valore della cella
    api.setEditCellValue({ id, field, value: event.target.value });

    // Terminare la modalità di modifica dopo aver cambiato il valore
    // Nota: Non è necessario passare event a commitCellEditStop
    api.commitCellEditStop();

    // Se necessario, puoi anche chiamare commitRowChange per confermare il cambiamento
    // api.commitRowChange(id); // Questa funzione potrebbe non essere necessaria se il cambiamento viene già confermato con stopCellEdit
  };

  return (
    <Select
      multiple
      value={value}
      onChange={handleChange}
      renderValue={(selected) => selected.join(", ")}
    >
      {facolta.map((option) => (
        <MenuItem key={option.id} value={option.nome}>
          {option.nome}
        </MenuItem>
      ))}
    </Select>
  );
}
