import LayoutFormSection from "./LayoutFormSection";

export default function LayoutForm({ sections, setSections, sectionRegistry }) {
  return (
    <div className="layout-form">
      {sections
        .filter((section) => section.id !== "general")
        .sort((a, b) => a.order - b.order)
        .map(({ id }, index) => {
          return (
            <LayoutFormSection
              key={id}
              setSections={setSections}
              sectionRegistry={sectionRegistry}
              index={index + 1}
              id={id}
            />
          );
        })}
    </div>
  );
}
