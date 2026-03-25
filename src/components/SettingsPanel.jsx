import {
  ItalicIcon,
  PencilIcon,
  RectangleGroupIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import PanelSection from "./PanelSection";
import LayoutForm from "./LayoutForm";
import TypographyForm from "./TypographyForm";
import ColorForm from "./ColorForm";
import NotesForm from "./NotesForm";
import DownloadButton from "./DownloadButton";

export default function SettingsPanel({
  settingsPanelOpen,
  sections,
  setSections,
  sectionRegistry,
  previewFont,
  setPreviewFont,
  previewColor,
  setPreviewColor,
  notes,
  setNotes,
  printResume,
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
            <TypographyForm
              previewFont={previewFont}
              setPreviewFont={setPreviewFont}
            />
          </PanelSection>
          <PanelSection title="Color" icon={<SwatchIcon />}>
            <ColorForm
              previewColor={previewColor}
              setPreviewColor={setPreviewColor}
            />
          </PanelSection>
          <PanelSection title="Notes" icon={<PencilIcon />}>
            <NotesForm notes={notes} setNotes={setNotes} />
          </PanelSection>
          <DownloadButton printResume={printResume} />
        </div>
      </div>
    </div>
  );
}
