import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import ContentPanel from "./components/ContentPanel";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <ContentPanel></ContentPanel>
  </StrictMode>,
);
