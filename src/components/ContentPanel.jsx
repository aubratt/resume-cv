import AddNewButton from "./AddNewButton";
import GeneralForm from "./GeneralForm";
import PanelSection from "./PanelSection";
import SavedEntry from "./SavedEntry";
import {
  AcademicCapIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function ContentPanel({ isOpen, openModal, education }) {
  return (
    <div className={`content-panel ${isOpen ? "" : "hidden"}`}>
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
        <AddNewButton
          onClick={() =>
            openModal({
              type: "add-education",
              title: "Add Education",
              icon: <PlusIcon />,
            })
          }
          buttonText="Add Education"></AddNewButton>
      </PanelSection>
    </div>
  );
}
