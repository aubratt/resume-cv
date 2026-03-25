import { ItalicIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import PanelSection from "./PanelSection";
import LayoutForm from "./LayoutForm";
import TypographyForm from "./TypographyForm";

export default function SettingsPanel({
  settingsPanelOpen,
  sections,
  setSections,
  sectionRegistry,
  previewFont,
  setPreviewFont,
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
          <PanelSection title="Typography" icon={<ItalicIcon />}>
            <TypographyForm previewFont={previewFont} setPreviewFont={setPreviewFont} />
          </PanelSection>
        </div>
      </div>
    </div>
  );
}
