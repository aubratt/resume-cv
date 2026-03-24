import { useState } from "react";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
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
import PreviewHeader from "./PreviewHeader";
import PreviewLinks from "./PreviewLinks";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PreviewProjects from "./PreviewProjects";
import PreviewSkills from "./PreviewSkills";
import PreviewLanguages from "./PreviewLanguages";
import PreviewAwards from "./PreviewAwards";
import PreviewCertifications from "./PreviewCertifications";
import SummaryForm from "./SummaryForm";
import PreviewSummary from "./PreviewSummary";
import SettingsPanel from "./SettingsPanel";

export default function ResumeBuilder() {
  const [contentPanelOpen, setContentPanelOpen] = useState(true);
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [sections, setSections] = useState([
    { id: "general", order: 0 },
    { id: "summary", order: 1 },
    { id: "links", order: 2 },
    { id: "experience", order: 3 },
    { id: "education", order: 4 },
    { id: "projects", order: 5 },
    { id: "skills", order: 6 },
    { id: "languages", order: 7 },
    { id: "awards", order: 8 },
    { id: "certifications", order: 9 },
  ]);
  const [general, setGeneral] = useState({
    name: "",
    headline: "",
    email: "",
    phone: "",
    location: "",
  });
  const [summary, setSummary] = useState({
    summary: "",
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
      formComponent: GeneralForm,
      previewComponent: PreviewHeader,
    },
    summary: {
      sectionTitle: "Summary",
      icon: <DocumentTextIcon />,
      formComponent: SummaryForm,
      previewComponent: PreviewSummary,
    },
    links: {
      sectionTitle: "Links",
      sectionSingular: "Link",
      icon: <LinkIcon />,
      formComponent: LinksForm,
      previewComponent: PreviewLinks,
    },
    education: {
      sectionTitle: "Education",
      sectionSingular: "Education",
      icon: <AcademicCapIcon />,
      formComponent: EducationForm,
      previewComponent: PreviewEducation,
    },
    experience: {
      sectionTitle: "Experience",
      sectionSingular: "Experience",
      icon: <BriefcaseIcon />,
      formComponent: ExperienceForm,
      previewComponent: PreviewExperience,
    },
    projects: {
      sectionTitle: "Projects",
      sectionSingular: "Project",
      icon: <ClipboardDocumentListIcon />,
      formComponent: ProjectsForm,
      previewComponent: PreviewProjects,
    },
    skills: {
      sectionTitle: "Skills",
      sectionSingular: "Skill",
      icon: <PuzzlePieceIcon />,
      formComponent: SkillsForm,
      previewComponent: PreviewSkills,
    },
    languages: {
      sectionTitle: "Languages",
      sectionSingular: "Language",
      icon: <LanguageIcon />,
      formComponent: LanguagesForm,
      previewComponent: PreviewLanguages,
    },
    awards: {
      sectionTitle: "Awards",
      sectionSingular: "Award",
      icon: <TrophyIcon />,
      formComponent: AwardsForm,
      previewComponent: PreviewAwards,
    },
    certifications: {
      sectionTitle: "Certifications",
      sectionSingular: "Certification",
      icon: <CheckBadgeIcon />,
      formComponent: CertificationsForm,
      previewComponent: PreviewCertifications,
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
        summary={summary}
        setSummary={setSummary}
        sectionEntries={sectionEntries}
        sectionRegistry={sectionRegistry}
      />
      <Preview
        general={general}
        summary={summary}
        entries={sectionEntries}
        sections={sections}
        sectionRegistry={sectionRegistry}
        printRef={contentRef}
      />
      <SettingsPanel
        settingsPanelOpen={settingsPanelOpen}
        sections={sections}
        setSections={setSections}
        sectionRegistry={sectionRegistry}
      />

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
