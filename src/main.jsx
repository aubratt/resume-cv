import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import ResumeBuilder from "./components/ResumeBuilder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeBuilder></ResumeBuilder>
  </StrictMode>,
);
