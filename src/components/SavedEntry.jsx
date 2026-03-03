import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function SavedEntry({
  data,
  title,
  subtitle,
  onEdit,
  onDelete,
}) {
  return (
    <div className="saved-entry">
      <div className="entry-info">
        <p className="entry-info__title">{title}</p>
        <p className="entry-info__subtitle">{subtitle}</p>
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
