
# Unicampus HETG

Il sito internet di Unicampus HETG è un progetto dinamico che ha subito modifiche e aggiunte di sezioni nel tempo. Di conseguenza, alcune parti possono apparire ridondanti o caotiche. Il progetto è progettato per essere pienamente responsive, con l'eccezione di cinque pagine che dispongono di una versione mobile specifica, situata all'interno della cartella "Mobile".


## Inizio Rapido
Queste istruzioni ti forniranno una copia del progetto in esecuzione sul tuo computer locale a scopo di sviluppo e test.
### Prerequisiti
Cosa è necessario per installare il software e come installarlo, per esempio:
``` javascript
node.js
npm
```
### Installazione
Segui questi passaggi per avviare un ambiente di sviluppo:

``` javascript
git clone https://yourproject.git
cd your-project-folder
npm install
npm run dev
```
## Utilizzo Vite
Vite è uno strumento di sviluppo front-end che migliora l'esperienza di sviluppo con React. Per utilizzare Vite nel progetto, segui questi passaggi:
### Sviluppo Locale
Per avviare il server di sviluppo:
``` javascript
npx vite dev
```
Questo comando avvia un server di sviluppo locale per il progetto. Apri il browser e naviga all'indirizzo indicato nel terminale (tipicamente http://localhost:5173) per visualizzare l'applicazione.

### Build per la Produzione
Per costruire l'applicazione per la produzione:

``` javascript
npx vite build
```
Questo comando crea una build ottimizzata del tuo progetto nella cartella dist. I file all'interno di questa cartella sono minimizzati e pronti per essere distribuiti su un server di produzione.

## Costruito con
1. React - Libreria JavaScript per la costruzione di interfacce utente
3. Vite - Strumento di sviluppo front-end
4. MUI - Libreria di componenti UI per React
5. Firebase - Piattaforma di sviluppo di app
6. Axios - Cliente HTTP basato su promesse
7. React Router - Libreria di routing per React
8. Editor.js - Editor di testo WYSIWYG
9. React Helmet - Gestione degli elementi head per React


## Struttura
Il progetto Unicampus HETG utilizza specifiche cartelle all'interno della directory public per organizzare script PHP e file JSON. Queste cartelle sono cruciali per la gestione dei form, degli upload e dei contenuti testuali del sito.
### Cartella api per gli Script PHP
La cartella api, situata all'interno della directory public, contiene gli script PHP utilizzati per gestire varie funzionalità del sito:

Gestione dei Form: Gli script PHP in questa cartella sono responsabili per la gestione dei form inviati dall'utente, compresa la validazione dei dati e la risposta alle richieste.

Upload di File: Questa cartella include anche script per gestire l'upload di file, permettendo agli utenti di caricare documenti o immagini in modo sicuro e efficiente.
### Cartella copy per i File JSON
La cartella copy, anch'essa situata all'interno della directory public, è utilizzata per conservare i file JSON che contengono i testi (copy) del sito:

File JSON Separati: Originariamente, i testi erano conservati in file JSON separati all'interno di questa cartella, con una struttura organizzata per facilitare la gestione e l'aggiornamento dei contenuti.

Migrazione verso copy.json: È stata avviata la migrazione di tutti i contenuti verso un unico file denominato copy.json. Questo passaggio è stato intrapreso per centralizzare la gestione dei testi e semplificare gli aggiornamenti futuri.

### Best Practices
Sicurezza degli Script PHP: Assicurati che gli script PHP siano ben protetti per prevenire vulnerabilità, specialmente nelle funzioni di upload e nella gestione dei form.

Gestione Centralizzata dei Testi: Continua la migrazione dei testi verso il file copy.json per avere una gestione più coerente e centralizzata dei contenuti testuali del sito.


## Utilizzo React Helmet
React Helmet è una libreria di React utilizzata per gestire le informazioni all'interno dell'elemento <head> delle pagine web. È particolarmente utile in un'applicazione React per gestire i titoli, le descrizioni e i meta tag di ogni pagina, che sono essenziali per il SEO (Search Engine Optimization) e per l'esperienza utente.

### Caratteristiche Principali di React Helmet
Gestione Dinamica del Titolo e dei Meta Tag: React Helmet permette di modificare il titolo della pagina e i meta tag in base al componente attualmente renderizzato.

Compatibilità con il Rendering Lato Server (SSR): Funziona bene con il rendering lato server, garantendo che i motori di ricerca possano indicizzare correttamente le pagine.

Facile da Usare: Si integra direttamente nei componenti React, rendendo semplice l'aggiunta e la modifica degli elementi head.

### Come Utilizzare React Helmet nel Progetto
Per utilizzare React Helmet nel tuo progetto Unicampus HETG, segui questi passi:
[https://www.npmjs.com/package/react-helmet ]

Integrazione nel Componente: In un componente React, importa React Helmet e utilizzalo per definire gli elementi del <head> che vuoi modificare. Ad esempio:
``` javascript
import { Helmet } from 'react-helmet';

const MyComponent = () => (
  <div>
    <Helmet>
      <title>Titolo della Pagina</title>
      <meta name="description" content="Descrizione della Pagina" />
    </Helmet>
    {/* Contenuto del componente */}
  </div>
);
```