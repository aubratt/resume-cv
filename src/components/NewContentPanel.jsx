import PanelSection from "./PanelSection";
import SavedEntry from "./SavedEntry";

export default function ContentPanel({
  isOpen,
  openModal,
  sections,
  general,
  setGeneral,
  sectionEntries,
  sectionRegistry,
}) {
  return (
    <div className={`content-panel ${!isOpen && "hidden"}`}>
      <div className="panel-sections">
        {sections.map((section) => {
          const registryItem = sectionRegistry[section.id];

          if (section.id === "general") {
            const GeneralComponent = registryItem.component;
            return (
              <PanelSection
                key={section.id}
                title={registryItem.title}
                icon={registryItem.icon}>
                <GeneralComponent general={general} setGeneral={setGeneral} />
              </PanelSection>
            );
          }

          return (
            <PanelSection
              key={section.id}
              title={registryItem.title}
              icon={registryItem.icon}>
              {sectionEntries[section.id].map((entry) => {
                <SavedEntry
                  key={entry.id}
                  data={entry}
                  onEdit={(data) => openModal({
                    title: `Edit ${registryItem.title}`,
                    icon: registryItem.icon,
                    component: registryItem.component,
                    props: {
                      mode: "edit",
                      initialData: entry,
                      sectionId: section.id
                    }
                  })}
                />;
              })}
            </PanelSection>
          );
        })}
      </div>
    </div>
  );
}
