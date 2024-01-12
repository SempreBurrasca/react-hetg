<?php
// Abilita la segnalazione degli errori per il debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['path']) && isset($data['content']) && isset($data['key']) && isset($data['paginaId'])) {
        // Assicurati che il percorso del file sia corretto e raggiungibile
        // Ad esempio, potrebbe essere qualcosa come /var/www/html/copy/copy.json
        $filePath = __DIR__ . '/../copy/copy.json'; // Modifica questo percorso

        if (file_exists($filePath) && is_writable($filePath)) {
            $jsonContent = json_decode(file_get_contents($filePath), true);

            if (isset($jsonContent["it"][$data['paginaId']])) {
                $jsonContent["it"][$data['paginaId']][$data['key']] = $data['content'];

                if (file_put_contents($filePath, json_encode($jsonContent, JSON_PRETTY_PRINT))) {
                    echo json_encode(['message' => 'Contenuto aggiornato con successo']);
                } else {
                    http_response_code(500);
                    echo json_encode(['message' => 'Impossibile scrivere nel file']);
                }
            } else {
                http_response_code(400);
                echo json_encode(['message' => 'Pagina o chiave non trovata nel JSON']);
            }
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Il file non esiste o non è scrivibile', 'filePath' => $filePath]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Dati mancanti']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Metodo non permesso']);
}
?>
