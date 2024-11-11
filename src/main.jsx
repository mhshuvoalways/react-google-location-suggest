import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGooglePlaceSuggest from "./ReactGooglePlaceSuggest.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactGooglePlaceSuggest />
  </StrictMode>
);
