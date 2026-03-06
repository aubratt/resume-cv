import {
  AcademicCapIcon,
  BriefcaseIcon,
  IdentificationIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import ContentPanel from "./ContentPanel";
import GeneralForm from "./GeneralForm";
import LinksForm from "./LinksForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

export default function ResumeBuilder() {
  const [contentPanelOpen, setContentPanelOpen] = useState(true);
  const [settingsPanelOpen, setSettingsPanelOpen] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [sections, setSections] = useState([
    { id: "general", order: 0 },
    { id: "links", order: 1 },
    { id: "education", order: 2 },
    { id: "experience", order: 3 },
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
  });

  const sectionRegistry = {
    general: {
      title: "General",
      icon: <IdentificationIcon />,
      component: GeneralForm,
    },
    links: {
      title: "Links",
      icon: <LinkIcon />,
      component: LinksForm,
    },
    education: {
      title: "Education",
      icon: <AcademicCapIcon />,
      component: EducationForm,
    },
    experience: {
      title: "Experience",
      icon: <BriefcaseIcon />,
      component: ExperienceForm,
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
  };

  const updateEntry = (sectionId, updatedEntry) => {
    setSectionEntries((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry,
      ),
    }));
  };

  const deleteEntry = (sectionId, entryId) => {
    setSectionEntries((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].filter((entry) => entry.id !== entryId),
    }));
  };

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
        sectionEntries={sectionEntries}
        sectionRegistry={sectionRegistry}
      />

      {activeModal && (
        <Modal
          title={activeModal.title}
          icon={activeModal.icon}
          onClose={closeModal}>
          <activeModal.component {...activeModal.props} onCancel={closeModal} />
        </Modal>
      )}
    </div>
  );
}
