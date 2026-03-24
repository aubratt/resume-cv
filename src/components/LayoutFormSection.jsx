import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

export default function LayoutFormSection({
  setSections,
  sectionRegistry,
  index,
  id,
}) {
  const handleDownClick = () => {
    setSections((prevSections) => {
      const current = prevSections.find((section) => section.id === id);
      const next = prevSections.find(
        (section) => section.order === current.order + 1,
      );

      return prevSections.map((section) => {
        if (section.id === current.id) {
          return { ...section, order: next.order };
        }
        if (section.id === next.id) {
          return { ...section, order: current.order };
        }
        return section;
      });
    });
  };

  const handleUpClick = () => {
    setSections((prevSections) => {
      const current = prevSections.find((section) => section.id === id);
      const prev = prevSections.find(
        (section) => section.order === current.order - 1,
      );

      return prevSections.map((section) => {
        if (section.id === current.id) {
          return { ...section, order: prev.order };
        }
        if (section.id === prev.id) {
          return { ...section, order: current.order };
        }
        return section;
      });
    });
  };

  return (
    <div className="layout-form__section">
      <p>{sectionRegistry[id].sectionTitle}</p>
      <div className="layout-form__section-arrows">
        <button onClick={() => handleDownClick()} disabled={index === 9}>
          <ArrowDownIcon className="layout-form__icon" />
        </button>
        <button onClick={() => handleUpClick()} disabled={index === 1}>
          <ArrowUpIcon className="layout-form__icon" />
        </button>
      </div>
    </div>
  );
}
