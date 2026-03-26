export default function ConfirmDelete({ onSubmit, onCancel }) {
  return (
    <div className="confirm-delete">
      <p className="confirm-delete__text">
        Are you sure you want to delete this entry?
      </p>
      <div className="confirm-delete__buttons">
        <button onClick={onCancel} className="confirm-delete__cancel">
          Cancel
        </button>
        <button onClick={onSubmit} className="confirm-delete__delete">
          Delete
        </button>
      </div>
    </div>
  );
}
