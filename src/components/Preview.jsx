import {
  EnvelopeIcon,
  LinkIcon,
  LinkSlashIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewSummary from "./PreviewSummary";
import PreviewLinks from "./PreviewLinks";
import PreviewExperience from "./PreviewExperience";
import PreviewEducation from "./PreviewEducation";
import PreviewProjects from "./PreviewProjects";
import PreviewSkills from "./PreviewSkills";
import PreviewSection from "./PreviewSection";
import PreviewLanguages from "./PreviewLanguages";
import PreviewAwards from "./PreviewAwards";
import PreviewCertifications from "./PreviewCertifications";

export default function Preview({
  general,
  summary,
  entries,
  sections,
  sectionRegistry,
  previewFont,
  previewColor,
  printRef,
}) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  const PAGE_WIDTH = 816;
  const PAGE_HEIGHT = 1056;

  useEffect(() => {
    function updateScale() {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const styles = window.getComputedStyle(container);
      const paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);
      const usableHeight = container.clientHeight - paddingTop - paddingBottom;
      const scaleY = usableHeight / PAGE_HEIGHT;

      setScale(scaleY);
    }

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  function inputEmpty(input) {
    if (input === undefined || input === "") return true;
    else return false;
  }

  function objectEmpty(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        let value = object[key];
        if (!inputEmpty(value)) return false;
      }
    }
    return true;
  }

  function arrayEmpty(array) {
    if (array === undefined) return true;
    return array.length < 1;
  }

  return (
    <div className="preview" ref={containerRef}>
      <div className="preview__scale" style={{ transform: `scale(${scale})` }}>
        <div className="preview__page" ref={printRef}>
          <div className={`preview__content ${previewFont}`}>
            {!objectEmpty(general) && (
              <PreviewHeader
                general={general}
                objectEmpty={objectEmpty}
                inputEmpty={inputEmpty}
                previewColor={previewColor}
              />
            )}
            {sections
              .filter((section) => section.id !== "general")
              .sort((a, b) => a.order - b.order)
              .map(({ id }) => {
                const Component = sectionRegistry[id].previewComponent;
                let empty;
                id === "summary"
                  ? (empty = inputEmpty(summary.summary))
                  : (empty = arrayEmpty(entries[id]));

                if (empty) return null;

                return (
                  <PreviewSection
                    key={id}
                    heading={sectionRegistry[id].sectionTitle}
                    previewColor={previewColor}>
                    <Component
                      data={id === "summary" ? summary.summary : entries[id]}
                    />
                  </PreviewSection>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
