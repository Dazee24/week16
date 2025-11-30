// index.js
// This is the entry file React uses to load the App component.

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Where React attaches to the HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
