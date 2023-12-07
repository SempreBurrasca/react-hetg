import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FirebaseContext from "./Firebase/FirebaseContext"; // Aggiungi questo
import { app } from "./Firebase/firebase";



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
