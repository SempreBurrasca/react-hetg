<?php
// Abilita la segnalazione degli errori per il debug
// Rimuovi o commenta queste linee in produzione
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Assicurati che la richiesta sia di tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ottieni il corpo della richiesta
    $data = json_decode(file_get_contents('php://input'), true);

    // Verifica che i dati necessari siano presenti
    if (isset($data['path']) && isset($data['content'])) {
        $filePath =  __DIR__ . '/../copy/' . basename($data['path']);

        // Assicurati che il file esista
        if (file_exists($filePath) && is_writable($filePath)) {
            // Leggi il contenuto attuale del file JSON
            $jsonContent = json_decode(file_get_contents($filePath), true);

            // Aggiorna il contenuto con i nuovi dati
            foreach ($data['content'] as $key => $value) {
                $jsonContent["it"][$data['key']] = $value;
            }

            // Scrivi il nuovo contenuto nel file JSON
            if (file_put_contents($filePath, json_encode($jsonContent, JSON_PRETTY_PRINT))) {
                echo json_encode(['message' => 'Contenuto aggiornato con successo ']);
            } else {
                // Invia una risposta di errore
                http_response_code(500);
                echo json_encode(['message' => 'Impossibile aggiornare il file']);
            }
        } else {
            // Invia una risposta di errore
            http_response_code(500);
            echo json_encode(['message' => 'Il file non esiste o non è scrivibile '.$filePath]);
        }
    } else {
        // Invia una risposta di errore
        http_response_code(400);
        echo json_encode(['message' => 'Dati mancanti']);
    }
} else {
    // Metodo non permesso
    http_response_code(405);
    echo json_encode(['message' => 'Metodo non permesso']);
}
?>
