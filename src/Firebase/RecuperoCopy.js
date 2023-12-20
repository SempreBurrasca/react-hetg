import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getPagina(paginaId) {
  const paginaRef = doc(db, "pagine", paginaId);
  const paginaSnap = await getDoc(paginaRef);

  if (paginaSnap.exists()) {
    return paginaSnap.data();
  } else {
    console.log("Nessun documento trovato!");
    return null;
  }
}

export async function getPagine() {
  const pagineRef = collection(db, "pagine");
  const pagineSnap = await getDocs(pagineRef);

  const pagine = [];
  pagineSnap.forEach((doc) => {
    pagine.push({ id: doc.id, ...doc.data() });
  });

  return pagine;
}

export async function getFacoltas() {
  const facoltaRef = collection(db, "facolta");
  const facoltaSnap = await getDocs(facoltaRef);

  const facoltas = [];
  facoltaSnap.forEach((doc) => {
    facoltas.push({ id: doc.id, ...doc.data() });
  });

  return facoltas;
}
export async function getStaff() {
  const facoltaRef = collection(db, "staff");
  const facoltaSnap = await getDocs(facoltaRef);

  const facoltas = [];
  facoltaSnap.forEach((doc) => {
    facoltas.push({ id: doc.id, ...doc.data() });
  });

  return facoltas;
}
export async function getDocenti() {
  const facoltaRef = collection(db, "docenti");
  const facoltaSnap = await getDocs(facoltaRef);

  const facoltas = [];
  facoltaSnap.forEach((doc) => {
    facoltas.push({ id: doc.id, ...doc.data() });
  });

  return facoltas;
}

export async function getFacoltaById(facoltaId) {
  const facoltaDocRef = doc(db, "facolta", facoltaId);
  const facoltaSnapshot = await getDoc(facoltaDocRef);

  if (facoltaSnapshot.exists()) {
    return { id: facoltaSnapshot.id, ...facoltaSnapshot.data() };
  } else {
    throw new Error("Facoltà non esiste.");
  }
}
export async function getStaffById(staffId) {
  const staffDocRef = doc(db, "staff", staffId);
  const staffSnapshot = await getDoc(staffDocRef);

  if (staffSnapshot.exists()) {
    return { id: staffSnapshot.id, ...staffSnapshot.data() };
  } else {
    throw new Error("Staff non esiste.");
  }
}
export async function getDocentiById(facoltaId) {
  const facoltaDocRef = doc(db, "docenti", facoltaId);
  const facoltaSnapshot = await getDoc(facoltaDocRef);

  if (facoltaSnapshot.exists()) {
    return { id: facoltaSnapshot.id, ...facoltaSnapshot.data() };
  } else {
    throw new Error("Facoltà non esiste.");
  }
}

export async function getCorsiByFacoltaNome(collectionName, facoltaNome) {
  const corsiCollection = collection(db, collectionName);
  // Assicurati che 'facoltas' sia il nome esatto del campo nel database
  const corsiQuery = query(
    corsiCollection,
    where("facoltas", "array-contains", facoltaNome)
  );
  const corsiSnapshot = await getDocs(corsiQuery);
  const corsiList = corsiSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return corsiList;
}

export async function getCorsiXXX(collectionName) {
  const corsiCollection = collection(db, collectionName);
  const corsiSnapshot = await getDocs(corsiCollection);
  const corsiList = corsiSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return corsiList;
}

export async function getCorsoById(corsoId) {
  const courseTypes = [
    "triennale",
    "phd",
    "master-i",
    "master-ii",
    "master-ex",
    "magistrale",
    "perfezionamento",
    "academy",
  ];

  for (const tipo of courseTypes) {
    const corsoDocRef = doc(db, tipo, corsoId);
    try {
      const corsoSnapshot = await getDoc(corsoDocRef);
      if (corsoSnapshot.exists()) {
        return { id: corsoSnapshot.id, ...corsoSnapshot.data() };
      }
    } catch (error) {
      console.error(
        `Errore durante il recupero del corso da ${tipo}: ${error.message}`
      );
      // Potresti decidere di continuare a cercare negli altri tipi o di gestire l'errore
    }
  }
  // Se il ciclo termina e il corso non è stato trovato in nessuna collezione
  throw new Error(
    "Corso non esistente in nessuna delle collezioni del database."
  );
}
export async function getOrdini() {
  const ordiniDocRef = doc(db, "admin", "ordini"); // Sostituisci con il nome corretto della collezione "admin"
  const ordiniSnapshot = await getDoc(ordiniDocRef);

  if (ordiniSnapshot.exists()) {
    return { id: ordiniSnapshot.id, ...ordiniSnapshot.data() };
  } else {
    throw new Error("Ordini non esiste.");
  }
}
