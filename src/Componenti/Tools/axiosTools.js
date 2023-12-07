import axios from "axios";

export const handleImageUpload = async (e, setLoad, setFeed, setImg) => {
  const file = e.target.files[0];
  if (!file) {
    setFeed("Nessun file selezionato.");
    return;
  }

  // Creare un FormData per inviare il file
  const formData = new FormData();
  formData.append("myFile", file);

  setLoad(true);
  try {
    // Eseguire la richiesta POST verso lo script PHP usando Axios
    const response = await axios.post("/api/uploadPhoto.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Non c'è bisogno di .then() o .catch() qui poiché stiamo già usando await
    // e abbiamo il try/catch block che gestisce l'aspettativa e l'errore

    const data = response.data;
    console.log(data);
    if (data.success) {
      // Ottiene l'URL pubblico del file
      const imageUrl = data.url;

      // Aggiorna lo stato con l'URL dell'immagine per visualizzare l'anteprima
      setImg(imageUrl);
      console.log(imageUrl);

      // Imposta il feedback per l'utente
      setFeed("Immagine caricata con successo!");
    } else {
      // Gestire l'errore
      setFeed(data.error);
    }
  } catch (error) {
    console.error("Errore durante il caricamento dell'immagine:", error);
    setFeed("Errore durante il caricamento dell'immagine.");
  } finally {
    setLoad(false);
  }
};
