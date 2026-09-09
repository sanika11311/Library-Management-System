import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LibraryProvider } from "./assets/LibraryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LibraryProvider>
    <App />
  </LibraryProvider>
);