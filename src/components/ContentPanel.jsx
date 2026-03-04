import AddEntryButton from "./AddEntryButton";
import EditSectionsButton from "./EditSectionsButton";
import GeneralForm from "./GeneralForm";
import PanelSection from "./PanelSection";
import SavedEntry from "./SavedEntry";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function ContentPanel({
  isOpen,
  openModal,
  education,
  experience,
}) {
  return (
    <div className={`content-panel ${isOpen ? "" : "hidden"}`}>
      <div className="panel-sections">
        <PanelSection title="General" icon={<IdentificationIcon />}>
          <GeneralForm></GeneralForm>
        </PanelSection>
        <PanelSection title="Education" icon={<AcademicCapIcon />}>
          {education.map((edu) => (
            <SavedEntry
              key={edu.id}
              data={edu}
              title={edu.school}
              subtitle={edu.degree}
              onEdit={(data) =>
                openModal({
                  type: "edit-education",
                  title: "Edit Education",
                  icon: <PencilSquareIcon />,
                  data,
                })
              }
              onDelete={(data) =>
                openModal({
                  type: "confirm-delete",
                  title: "Confirm Delete",
                  icon: <TrashIcon />,
                  data,
                })
              }
            />
          ))}
          <AddEntryButton
            onClick={() =>
              openModal({
                type: "add-education",
                title: "Add Education",
                icon: <PlusIcon />,
              })
            }
            buttonText="Add Education"></AddEntryButton>
        </PanelSection>
        <PanelSection title="Experience" icon={<BriefcaseIcon />}>
          {experience.map((exp) => (
            <SavedEntry
              key={exp.id}
              data={exp}
              title={exp.company}
              subtitle={exp.position}
              onEdit={(data) =>
                openModal({
                  type: "edit-experience",
                  title: "Edit Experience",
                  iocn: <PencilSquareIcon />,
                  data,
                })
              }
              onDelete={(data) =>
                openModal({
                  type: "confirm-delete",
                  title: "Confirm Delete",
                  icon: <TrashIcon />,
                  data,
                })
              }
            />
          ))}
          <AddEntryButton
            onClick={() =>
              openModal({
                type: "add-experience",
                title: "Add Experience",
                icon: <PlusIcon />,
              })
            }
            buttonText="Add Experience"
          />
        </PanelSection>
      </div>
      <div className="edit-sections">
        <EditSectionsButton buttonText="Edit Sections" />
      </div>
    </div>
  );
}
