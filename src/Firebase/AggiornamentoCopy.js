import { doc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function aggiornamentoPagina(paginaId, nomeCampo, valoreCampo) {
  const paginaRef = doc(db, "pagine", paginaId);

  try {
    await updateDoc(paginaRef, {
      [nomeCampo]: valoreCampo,
    });
    console.log("Documento aggiornato con successo");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del documento: ", error);
  }
}

export async function aggiungiFacolta(nome, soprannome) {
  try {
    // Creare un riferimento alla collezione "facolta"
    const facoltaCollectionRef = collection(db, "facolta");

    // Aggiungere un nuovo documento alla collezione "facolta"
    const docRef = await addDoc(facoltaCollectionRef, {
      nome: nome,
      soprannome: soprannome,
    });

    // Aggiornare il campo 'id' del documento appena creato con il suo ID
    await updateDoc(docRef, {
      id: docRef.id,
    });

    console.log("Documento aggiunto con ID: ", docRef.id);
  } catch (error) {
    console.error("Errore durante aggiunta del documento: ", error);
  }
}
export async function aggiungiStaff(nome, descrizione, tipoStaff) {
  try {
    // Creare un riferimento alla collezione "facolta"
    const facoltaCollectionRef = collection(db, "staff");

    // Aggiungere un nuovo documento alla collezione "facolta"
    const docRef = await addDoc(facoltaCollectionRef, {
      nome: nome,
      descrizione: descrizione,
      tipo: tipoStaff,
    });

    // Aggiornare il campo 'id' del documento appena creato con il suo ID
    await updateDoc(docRef, {
      id: docRef.id,
    });

    console.log("Documento aggiunto con ID: ", docRef.id);
  } catch (error) {
    console.error("Errore durante aggiunta del documento: ", error);
  }
}
export async function aggiungiDocenti(nomeCognome, descrizione) {
  try {
    // Creare un riferimento alla collezione "facolta"
    const facoltaCollectionRef = collection(db, "docenti");

    // Aggiungere un nuovo documento alla collezione "facolta"
    const docRef = await addDoc(facoltaCollectionRef, {
      nome: nomeCognome[1]+" "+nomeCognome[0],
      nomeCognome:[nomeCognome[0],nomeCognome[1]],
      descrizione: descrizione,
    });

    // Aggiornare il campo 'id' del documento appena creato con il suo ID
    await updateDoc(docRef, {
      id: docRef.id,
    });

    console.log("Documento aggiunto con ID: ", docRef.id);
  } catch (error) {
    console.error("Errore durante aggiunta del documento: ", error);
  }
}

export async function aggiornaFacolta(docId, campi) {
  const facoltaRef = doc(db, "facolta", docId);

  try {
    await updateDoc(facoltaRef, campi);
    console.log("Documento aggiornato con successo");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del documento:", error);
  }
}
export async function aggiornaStaff(docId, campi) {
  const facoltaRef = doc(db, "staff", docId);

  try {
    await updateDoc(facoltaRef, campi);
    console.log("Documento aggiornato con successo");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del documento:", error);
  }
}
export async function aggiornaDocenti(docId, campi) {
  const facoltaRef = doc(db, "docenti", docId);

  try {
    await updateDoc(facoltaRef, campi);
    console.log("Documento aggiornato con successo");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del documento:", error);
  }
}

export const aggiungiCorso = async (corsoData) => {
  const corsoCollectionPath = `${corsoData.tipo}`;
  const corsoCollectionRef = collection(db, corsoCollectionPath);

  try {
    const docRef = await addDoc(corsoCollectionRef, {
      nome: corsoData.nome,
      tipo: corsoData.tipo,
      facolta: corsoData.facolta ? corsoData.facolta : "",
    });
    console.log("Corso aggiunto con successo con ID:", docRef.id);
    return docRef.id; // Ritorna l'ID del documento appena creato
  } catch (error) {
    console.error("Errore nell'aggiunta del corso:", error);
    throw error; // Propagare l'errore per eventuali gestioni nel componente
  }
};

export async function aggiornaCorsoById(corsoData) {
  // Assicurati che corsoData.id sia presente
  if (!corsoData.id) {
    throw new Error("L'ID del corso è necessario per l'aggiornamento.");
  }

  // Crea un riferimento al documento del corso usando l'ID del corso.
  const corsoRef = doc(db, corsoData.tipo, corsoData.id);

  try {
    // Costruisci l'oggetto con i campi da aggiornare, escludendo l'ID
    const { id, ...fieldsToUpdate } = corsoData;

    // Aggiorna il documento con i nuovi dati.
    await updateDoc(corsoRef, fieldsToUpdate);

    console.log("Corso aggiornato con successo.");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del corso:", error);
    throw error; // Rilancia l'errore per un'eventuale gestione degli errori nel componente.
  }
}

export async function aggiornaOrdiniIstituzioni( campi) {
  const ordiniRef = doc(db, "admin", "ordini");

  try {
    await updateDoc(ordiniRef, campi);
    console.log("Documento degli OrdiniIstituzioni aggiornato con successo");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del documento degli OrdiniIstituzioni:", error);
  }
}