import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './utils/localization/i18n';
import 'modern-normalize/modern-normalize.css';
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/gravitas">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
