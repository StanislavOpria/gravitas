import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./index.scss";
import './utils/localization/i18n';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/gravitas">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
