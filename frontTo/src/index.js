import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TolgeeProvider } from "@tolgee/react";
import { UI } from "@tolgee/ui";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
