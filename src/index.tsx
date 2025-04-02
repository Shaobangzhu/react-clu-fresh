import "./styles/border.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Dynamically adjust the root font size based on the viewport width to support responsive scaling (e.g., for REM units)
window.addEventListener("resize", () => {
  document.documentElement.style.fontSize =
    (document.documentElement.clientWidth / 375) * 100 + "px";
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
