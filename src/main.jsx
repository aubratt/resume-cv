import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import ContentPanel from "./components/ContentPanel";
import ResumeBuilder from "./components/ResumeBuilder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeBuilder></ResumeBuilder>
  </StrictMode>,
);
