import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Importa o componente App

// Pega a raiz da aplicação no HTML
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

// Renderiza o componente principal que gerencia as rotas
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
