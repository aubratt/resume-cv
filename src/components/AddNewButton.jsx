import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddNewButton({ buttonText, onClick }) {
  return (
    <button onClick={onClick} className="add-new-button">
      <PlusIcon />
      <span>{buttonText}</span>
    </button>
  );
}
