export default function ConfirmDelete({ data, onConfirm, onCancel }) {
  return (
    <div className="confirm-delete">
      <p className="confirm-delete__text">
        Are you sure you want to delete this entry?
      </p>
      <div className="confirm-delete__buttons">
        <button onClick={onCancel} className="confirm-delete__cancel">
          Cancel
        </button>
        <button onClick={onConfirm} className="confirm-delete__delete">
          Delete
        </button>
      </div>
    </div>
  );
}
