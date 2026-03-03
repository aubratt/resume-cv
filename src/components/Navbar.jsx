import EditorToggleButton from "./EditorToggleButton";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

export default function Navbar({
  toggleContentPanel,
  toggleSettingsPanel,
  contentPanelOpen,
  settingsPanelOpen,
}) {
  return (
    <div className="navbar">
      <EditorToggleButton
        onClick={toggleContentPanel}
        panelOpen={contentPanelOpen}
        panel="content"
        closedIcon={<ChevronDoubleLeftIcon />}
        openIcon={<ChevronDoubleRightIcon />}></EditorToggleButton>
      <h1>Resume Builder</h1>
      <EditorToggleButton
        onClick={toggleSettingsPanel}
        panelOpen={settingsPanelOpen}
        panel="settings"
        closedIcon={<ChevronDoubleRightIcon />}
        openIcon={<ChevronDoubleLeftIcon />}></EditorToggleButton>
    </div>
  );
}
