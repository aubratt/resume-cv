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

export default function Preview({ general, entries, printRef }) {
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
    return array.length < 1;
  }

  return (
    <div className="preview" ref={containerRef}>
      <div className="preview__scale" style={{ transform: `scale(${scale})` }}>
        <div className="preview__page" ref={printRef}>
          <div className="preview__content">
            {!objectEmpty(general) && (
              <PreviewHeader
                general={general}
                objectEmpty={objectEmpty}
                inputEmpty={inputEmpty}
              />
            )}
            {!inputEmpty(general.summary) && (
              <PreviewSection heading="Summary">
                <PreviewSummary summary={general.summary} />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.links) && (
              <PreviewSection heading="Links">
                <PreviewLinks
                  links={entries.links}
                  icon={<LinkIcon stroke="black" className="preview__icon" />}
                />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.experience) && (
              <PreviewSection heading="Experience">
                <PreviewExperience experience={entries.experience} />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.education) && (
              <PreviewSection heading="Education">
                <PreviewEducation
                  education={entries.education}
                  inputEmpty={inputEmpty}
                />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.projects) && (
              <PreviewSection heading="Projects">
                <PreviewProjects
                  projects={entries.projects}
                  inputEmpty={inputEmpty}
                />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.skills) && (
              <PreviewSection heading="Skills">
                <PreviewSkills skills={entries.skills} />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.languages) && (
              <PreviewSection heading="Languages">
                <PreviewLanguages languages={entries.languages} />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.awards) && (
              <PreviewSection heading="Awards">
                <PreviewAwards awards={entries.awards} />
              </PreviewSection>
            )}
            {!arrayEmpty(entries.certifications) && (
              <PreviewSection heading="Certifications">
                <PreviewCertifications
                  certifications={entries.certifications}
                />
              </PreviewSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
