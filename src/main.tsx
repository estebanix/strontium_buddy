import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
