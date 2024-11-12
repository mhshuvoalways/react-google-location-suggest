import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GoogleLocationSuggest from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleLocationSuggest />
  </StrictMode>
);
