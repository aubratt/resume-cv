import { useState } from "react";

export default function Navbar() {
  const [contentPanelOpen, setContentPanelOpen] = useState(true);
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);

  const toggleContentPanel = () => setContentPanelOpen(!contentPanelOpen);
  const toggleSettingsPanel = () => setSettingsPanelOpen(!settingsPanelOpen);

  const doubleChevronLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );
  const doubleChevronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <div className="navbar">
      <button
        onClick={toggleContentPanel}
        className="navbar__editor-toggle"
        aria-label="Toggle content panel">
        {contentPanelOpen ? doubleChevronLeft : doubleChevronRight}
      </button>
      <h1>Resume Builder</h1>
      <button
        onClick={toggleSettingsPanel}
        className="navbar__editor-toggle"
        aria-label="Toggle settings panel">
        {settingsPanelOpen ? doubleChevronRight : doubleChevronLeft}
      </button>
    </div>
  );
}
