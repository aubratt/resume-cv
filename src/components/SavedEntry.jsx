import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function SavedEntry({ data, onEdit, onDelete }) {
  return (
    <div className="saved-entry">
      <div className="entry-info">
        <p className="entry-info__title">
          {data.label ||
            data.school ||
            data.company ||
            data.name ||
            data.skill ||
            data.language ||
            data.award}
        </p>
        <p className="entry-info__subtitle">
          {data.url || data.degree || data.position || data.issuer}
        </p>
      </div>
      <div className="entry-actions">
        <button onClick={() => onEdit(data)} className="entry-actions__edit">
          <PencilSquareIcon />
        </button>
        <button
          onClick={() => onDelete(data)}
          className="entry-actions__delete">
          <TrashIcon stroke="#EF4444" />
        </button>
      </div>
    </div>
  );
}
