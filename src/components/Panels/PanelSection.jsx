import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function PanelSection({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`panel-section ${isOpen ? "open" : ""}`}>
      <button
        className="panel-section__header"
        onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        {icon}
        <span className="panel-section__title">{title}</span>
      </button>
      {isOpen && <div className="panel-section__body">{children}</div>}
    </div>
  );
}
