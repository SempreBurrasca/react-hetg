import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export const handleImageUploadFB = async (e, setLoad, setFeed, setImg) => {
  const file = e.target.files[0];
  const storage = getStorage();
  const storageReference = storageRef(storage, `images/${file.name}`);

  setLoad(true);
  try {
    // Carica il file su Firebase Storage
    const snapshot = await uploadBytes(storageReference, file);

    // Ottiene l'URL pubblico del file
    const imageUrl = await getDownloadURL(snapshot.ref);

    // Aggiorna lo stato con l'URL dell'immagine per visualizzare l'anteprima
    setImg(imageUrl);

    // Imposta il feedback per l'utente
    setFeed("Immagine caricata con successo!");

  } catch (error) {
    console.error("Errore durante il caricamento dell'immagine:", error);
    setFeed("Errore durante il caricamento dell'immagine.");
  } finally {
    setLoad(false);
  }
};
