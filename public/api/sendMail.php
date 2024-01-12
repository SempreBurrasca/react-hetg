<?php
header('Access-Control-Allow-Origin: https://unicampushetg.ch');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $corso = $_POST['corso'];
    $messaggio = $_POST['messaggio'];

    $to = 'segreteria@unicampushetg.ch'; // Sostituisci con la tua email
    $subject = 'Nuovo contatto dal form del sito di Unicampus HETG';
    $body = "Nome: $nome\nCognome: $cognome\nEmail: $email\nTelefono: $telefono\nCorso: $corso\nMessaggio: $messaggio";

    if (mail($to, $subject, $body)) {
        echo 'Messaggio inviato con successo!';
    } else {
        echo 'Errore nell\'invio del messaggio.';
    }
} else {
    echo 'Metodo non permesso.';
}
?>
