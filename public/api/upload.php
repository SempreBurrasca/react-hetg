<?php
$targetDir = "uploads/"; // Assicurati che questa cartella esista e sia scrivibile
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$urlPath = "http://localhost/" . $targetFilePath; // Modifica con il tuo dominio

// Controlla se c'è un errore con il file in arrivo
if ($_FILES["file"]["error"] != UPLOAD_ERR_OK) {
    echo json_encode(array("error" => "Errore durante l'upload del file: " . $_FILES["file"]["error"]));
    exit;
}

// Prova a spostare il file dalla posizione temporanea alla destinazione finale
if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
    // Restituisci l'URL dell'immagine come risposta JSON
    echo json_encode(array("imageUrl" => $urlPath));
} else{
    // Gestisci l'errore di caricamento
    echo json_encode(array("error" => "Sorry, there was an error uploading your file."));
}
?>
