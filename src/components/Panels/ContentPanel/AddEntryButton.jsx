import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddEntryButton({ onClick, buttonText }) {
  return (
    <button onClick={onClick} className="add-entry-button">
      <PlusIcon />
      <span>{buttonText}</span>
    </button>
  );
}
