import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function EditSectionsButton({ onClick, buttonText }) {
  return (
    <button onClick={onClick} className="edit-sections__button">
      <PencilSquareIcon />
      <span>{buttonText}</span>
    </button>
  );
}
