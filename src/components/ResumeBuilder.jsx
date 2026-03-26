import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import Navbar from "./Navbar/Navbar";
import ContentPanel from "./Panels/ContentPanel/ContentPanel";
import GeneralForm from "./Panels/ContentPanel/GeneralForm";
import SummaryForm from "./Panels/ContentPanel/SummaryForm";
import LinksForm from "./Panels/ContentPanel/LinksForm";
import ExperienceForm from "./Panels/ContentPanel/ExperienceForm";
import EducationForm from "./Panels/ContentPanel/EducationForm";
import ProjectsForm from "./Panels/ContentPanel/ProjectsForm";
import SkillsForm from "./Panels/ContentPanel/SkillsForm";
import LanguagesForm from "./Panels/ContentPanel/LanguagesForm";
import AwardsForm from "./Panels/ContentPanel/AwardsForm";
import CertificationsForm from "./Panels/ContentPanel/CertificationsForm";
import Preview from "./Preview/Preview";
import PreviewHeader from "./Preview/PreviewHeader";
import PreviewSummary from "./Preview/PreviewSummary";
import PreviewLinks from "./Preview/PreviewLinks";
import PreviewEducation from "./Preview/PreviewEducation";
import PreviewExperience from "./Preview/PreviewExperience";
import PreviewProjects from "./Preview/PreviewProjects";
import PreviewSkills from "./Preview/PreviewSkills";
import PreviewLanguages from "./Preview/PreviewLanguages";
import PreviewAwards from "./Preview/PreviewAwards";
import PreviewCertifications from "./Preview/PreviewCertifications";
import SettingsPanel from "./Panels/SettingsPanel/SettingsPanel";
import Modal from "./Modal/Modal";

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

export default function ResumeBuilder() {
  const [contentPanelOpen, setContentPanelOpen] = useState(true);
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);
  const [previewFont, setPreviewFont] = useState("Arial");
  const [previewColor, setPreviewColor] = useState("black");
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
  const [notes, setNotes] = useState("");

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
    <div className="resume-builder">
      <Navbar
        toggleContentPanel={toggleContentPanel}
        toggleSettingsPanel={toggleSettingsPanel}
        contentPanelOpen={contentPanelOpen}
        settingsPanelOpen={settingsPanelOpen}
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
        previewFont={previewFont}
        previewColor={previewColor}
        printRef={contentRef}
      />
      <SettingsPanel
        settingsPanelOpen={settingsPanelOpen}
        sections={sections}
        setSections={setSections}
        sectionRegistry={sectionRegistry}
        previewFont={previewFont}
        setPreviewFont={setPreviewFont}
        previewColor={previewColor}
        setPreviewColor={setPreviewColor}
        notes={notes}
        setNotes={setNotes}
        printResume={reactToPrintFn}
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
