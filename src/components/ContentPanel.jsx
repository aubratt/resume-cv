import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddEntryButton from "./AddEntryButton";
import PanelSection from "./PanelSection";
import SavedEntry from "./SavedEntry";
import ConfirmDelete from "./ConfirmDelete";
import EditSectionsButton from "./EditSectionsButton";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

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
      <div className="panel-sections-wrapper">
        <SimpleBar style={{ maxHeight: "100%", height: "100%" }}>
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
                    <GeneralComponent
                      general={general}
                      setGeneral={setGeneral}
                    />
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
                      titleField={registryItem.titleField}
                      subtitleField={registryItem.subtitleField}
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
        </SimpleBar>
      </div>

      <div className="edit-sections">
        <EditSectionsButton buttonText="Edit Sections" />
      </div>
    </div>
  );
}
