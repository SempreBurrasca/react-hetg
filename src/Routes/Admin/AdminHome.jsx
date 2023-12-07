import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

export function AdminHome() {
  const navigate = useNavigate();
  const [collectionName, setCollectionName] = useState('triennale');
  const [file, setFile] = useState(null);


  // Funzione per scaricare i dati come JSON
  const downloadData = async () => {
    if (!collectionName.trim()) {
      alert("Inserisci il nome di una collezione.");
      return;
    }
    
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const jsonString = JSON.stringify(data);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.download = `${collectionName}.json`;
      document.body.appendChild(link); // Aggiunta al body per garantire il funzionamento su alcuni browser
      link.click();
      link.remove(); // Rimuove il link dal DOM
      URL.revokeObjectURL(href);
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    }
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadData = async () => {
    if (!file) {
      alert('Per favore, carica un file JSON.');
      return;
    }
    if (!collectionName.trim()) {
      alert('Per favore, inserisci il nome di una collezione.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const json = JSON.parse(e.target.result);
        for (const item of json) {
          console.log(item.id)
          if (item.id) {
            const docRef = doc(db, collectionName, item.id);
            await updateDoc(docRef, item);
          } else {
            console.error('ID mancante nel documento:', item);
          }
        }
        alert('Aggiornamento della collezione completato.');
      } catch (error) {
        console.error('Errore durante l\'aggiornamento dei dati:', error);
        alert('Si è verificato un errore durante l\'aggiornamento dei dati.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
    
    </Box>
  );
}