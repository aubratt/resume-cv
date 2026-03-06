import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import AddEntryButton from "./AddEntryButton";
import PanelSection from "./PanelSection";
import SavedEntry from "./SavedEntry";
import ConfirmDelete from "./ConfirmDelete";
import { PlusIcon } from "@heroicons/react/24/solid";

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
              {sectionEntries[section.id].map((entry) => (
                <SavedEntry
                  key={entry.id}
                  data={entry}
                  titleField={sectionRegistry[section.id].titleField}
                  subtitleField={sectionRegistry[section.id].subtitleField}
                  onEdit={(entry) =>
                    openModal({
                      title: `Edit ${registryItem.title}`,
                      icon: <PencilSquareIcon />,
                      component: registryItem.component,
                      props: {
                        mode: "edit",
                        initialData: entry,
                        sectionId: section.id,
                      },
                    })
                  }
                  onDelete={(entry) =>
                    openModal({
                      title: "Confirm Delete",
                      icon: <TrashIcon />,
                      component: ConfirmDelete,
                      props: {
                        mode: "delete",
                        initialData: entry,
                        sectionId: section.id,
                      },
                    })
                  }
                />
              ))}
              <AddEntryButton
                onClick={() =>
                  openModal({
                    title: `Add ${registryItem.title}`,
                    icon: <PlusIcon />,
                    component: registryItem.component,
                    props: {
                      mode: "add",
                      initialData: null,
                      sectionId: section.id,
                    },
                  })
                }
                buttonText={`Add ${registryItem.title}`}
              />
            </PanelSection>
          );
        })}
      </div>
    </div>
  );
}
