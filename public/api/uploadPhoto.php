<?php
$uploadDir = __DIR__ . '/../uploads/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_FILES['myFile'])) {
    $file = $_FILES['myFile'];

    if ($file['error'] === UPLOAD_ERR_OK) {
        $tempName = $file['tmp_name'];
        $fileExtension = pathinfo($file['name'], PATHINFO_EXTENSION); // Ottiene l'estensione del file
        $safeName = bin2hex(random_bytes(8)) . '.' . $fileExtension; // Aggiunge l'estensione al nome sicuro
        $safeName = str_replace(" ", "_", $safeName); // Sostituzione degli spazi con underscore
        $uploadFilePath = $uploadDir . $safeName;

        if (move_uploaded_file($tempName, $uploadFilePath)) {
            echo json_encode(['success' => true, 'url' => "/uploads/$safeName"]);
        } else {
            echo json_encode(['success' => false, 'error' => "Impossibile spostare il file nel percorso: $uploadFilePath"]);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Errore nel caricamento del file.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Nessun file inviato.']);
}
?>
