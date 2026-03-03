import { useState, useEffect } from "react";
import ContentPanel from "./ContentPanel";
import Modal from "./Modal";
import Navbar from "./Navbar";
import EducationForm from "./EducationForm";
import ConfirmDelete from "./ConfirmDelete";

export default function ResumeBuilder() {
  const [contentPanelOpen, setContentPanelOpen] = useState(true);
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [education, setEducation] = useState([]);

  const addEducation = (newEducation) => {
    setEducation((prev) => [...prev, newEducation]);
    setActiveModal(null);
  };

  const updateEducation = (updatedEducation) => {
    setEducation((prev) =>
      prev.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu,
      ),
    );
    setActiveModal(null);
  };

  const deleteEducation = (educationToDelete) => {
    setEducation((prev) =>
      prev.filter((edu) => edu.id !== educationToDelete.id),
    );
    setActiveModal(null);
  };

  const toggleContentPanel = () => setContentPanelOpen(!contentPanelOpen);
  const toggleSettingsPanel = () => setSettingsPanelOpen(!settingsPanelOpen);

  return (
    <div className="resume-builder">
      <Navbar
        toggleContentPanel={toggleContentPanel}
        contentPanelOpen={contentPanelOpen}
        toggleSettingsPanel={toggleSettingsPanel}
        settingsPanelOpen={settingsPanelOpen}></Navbar>
      <ContentPanel
        isOpen={contentPanelOpen}
        openModal={setActiveModal}
        education={education}></ContentPanel>

      {activeModal && (
        <Modal
          title={activeModal.title}
          onClose={() => setActiveModal(null)}
          icon={activeModal.icon}>
          {activeModal.type === "add-education" && (
            <EducationForm
              mode="create"
              onSubmit={addEducation}
              onCancel={() => setActiveModal(null)}
            />
          )}

          {activeModal.type === "edit-education" && (
            <EducationForm
              mode="edit"
              initialData={activeModal.data}
              onSubmit={updateEducation}
              onCancel={() => setActiveModal(null)}
            />
          )}

          {activeModal.type === "confirm-delete" && (
            <ConfirmDelete
              data={activeModal.data}
              onConfirm={() => deleteEducation(activeModal.data)}
              onCancel={() => setActiveModal(null)}
            />
          )}
        </Modal>
      )}
    </div>
  );
}
