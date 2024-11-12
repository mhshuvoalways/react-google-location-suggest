import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GoogleLocationSuggest from "./GoogleLocationSuggest.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleLocationSuggest />
  </StrictMode>
);
