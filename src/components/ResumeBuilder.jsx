import { useState } from "react";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  LanguageIcon,
  LinkIcon,
  PuzzlePieceIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import Navbar from "./Navbar";
import ContentPanel from "./ContentPanel";
import Modal from "./Modal";
import GeneralForm from "./GeneralForm";
import LinksForm from "./LinksForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import LanguagesForm from "./LanguagesForm";
import AwardsForm from "./AwardsForm";
import CertificationsForm from "./CertificationsForm";
import Preview from "./Preview";

export default function ResumeBuilder() {
  const [contentPanelOpen, setContentPanelOpen] = useState(true);
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [sections, setSections] = useState([
    { id: "general", order: 0 },
    { id: "links", order: 1 },
    { id: "experience", order: 2 },
    { id: "education", order: 3 },
    { id: "projects", order: 4 },
    { id: "skills", order: 5 },
    { id: "languages", order: 6 },
    { id: "awards", order: 7 },
    { id: "certifications", order: 8 },
  ]);
  const [general, setGeneral] = useState({
    name: "",
    headline: "",
    email: "",
    phone: "",
    location: "",
  });
  const [sectionEntries, setSectionEntries] = useState({
    links: [],
    education: [],
    experience: [],
    projects: [],
    skills: [],
    languages: [],
    awards: [],
    certifications: [],
  });

  const sectionRegistry = {
    general: {
      sectionTitle: "General",
      icon: <IdentificationIcon />,
      component: GeneralForm,
    },
    links: {
      sectionTitle: "Links",
      sectionSingular: "Link",
      icon: <LinkIcon />,
      component: LinksForm,
    },
    education: {
      sectionTitle: "Education",
      sectionSingular: "Education",
      icon: <AcademicCapIcon />,
      component: EducationForm,
    },
    experience: {
      sectionTitle: "Experience",
      sectionSingular: "Experience",
      icon: <BriefcaseIcon />,
      component: ExperienceForm,
    },
    projects: {
      sectionTitle: "Projects",
      sectionSingular: "Project",
      icon: <ClipboardDocumentListIcon />,
      component: ProjectsForm,
    },
    skills: {
      sectionTitle: "Skills",
      sectionSingular: "Skill",
      icon: <PuzzlePieceIcon />,
      component: SkillsForm,
    },
    languages: {
      sectionTitle: "Languages",
      sectionSingular: "Language",
      icon: <LanguageIcon />,
      component: LanguagesForm,
    },
    awards: {
      sectionTitle: "Awards",
      sectionSingular: "Award",
      icon: <TrophyIcon />,
      component: AwardsForm,
    },
    certifications: {
      sectionTitle: "Certifications",
      sectionSingular: "Certification",
      icon: <CheckBadgeIcon />,
      component: CertificationsForm,
    },
  };

  const toggleContentPanel = () => setContentPanelOpen(!contentPanelOpen);
  const toggleSettingsPanel = () => setSettingsPanelOpen(!settingsPanelOpen);

  let layout = "none";
  if (contentPanelOpen && settingsPanelOpen) layout = "both";
  else if (contentPanelOpen) layout = "content";
  else if (settingsPanelOpen) layout = "settings";

  function openModal(config) {
    setActiveModal(config);
  }

  function closeModal() {
    setActiveModal(null);
  }

  const addEntry = (sectionId, newEntry) => {
    setSectionEntries((prev) => ({
      ...prev,
      [sectionId]: [...prev[sectionId], newEntry],
    }));
    setActiveModal(null);
  };

  const updateEntry = (sectionId, updatedEntry) => {
    setSectionEntries((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry,
      ),
    }));
    setActiveModal(null);
  };

  const deleteEntry = (sectionId, entryId) => {
    setSectionEntries((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].filter((entry) => entry.id !== entryId),
    }));
    setActiveModal(null);
  };

  const submitHandlers = {
    add: (formData) =>
      addEntry(activeModal.props.sectionId, {
        ...formData,
        id: crypto.randomUUID(),
      }),
    edit: (formData) =>
      updateEntry(activeModal.props.sectionId, { ...formData }),
    delete: () =>
      deleteEntry(
        activeModal.props.sectionId,
        activeModal.props.initialData.id,
      ),
  };

  const submitHandler = submitHandlers[activeModal?.props.mode];

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className={`resume-builder layout-${layout}`}>
      <Navbar
        toggleContentPanel={toggleContentPanel}
        toggleSettingsPanel={toggleSettingsPanel}
        contentPanelOpen={contentPanelOpen}
        settingsPanelOpen={settingsPanelOpen}
        onClick={reactToPrintFn}
      />
      <ContentPanel
        isOpen={contentPanelOpen}
        openModal={openModal}
        sections={sections}
        general={general}
        setGeneral={setGeneral}
        sectionEntries={sectionEntries}
        sectionRegistry={sectionRegistry}
      />
      <Preview
        general={general}
        entries={sectionEntries}
        printRef={contentRef}
      />
      <div className={`settings-panel ${!settingsPanelOpen && "hidden"}`}>
        <div className="panel-sections-wrapper">
          <div className="panel-sections">
            <div className="panel-section">
              <button className="panel-section__header">
                <span className="panel-section__title">Layout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <Modal
          title={activeModal.title}
          icon={activeModal.icon}
          onClose={closeModal}>
          <activeModal.component
            {...activeModal.props}
            onSubmit={submitHandler}
            onCancel={closeModal}
          />
        </Modal>
      )}
    </div>
  );
}
