import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import PanelSection from "./PanelSection";
import LayoutForm from "./LayoutForm";

export default function SettingsPanel({
  settingsPanelOpen,
  sections,
  setSections,
  sectionRegistry,
}) {
  return (
    <div className={`settings-panel ${!settingsPanelOpen && "hidden"}`}>
      <div className="panel-sections-wrapper">
        <div className="panel-sections">
          <PanelSection title="Layout" icon={<RectangleGroupIcon />}>
            <LayoutForm
              sections={sections}
              setSections={setSections}
              sectionRegistry={sectionRegistry}
            />
          </PanelSection>
        </div>
      </div>
    </div>
  );
}
