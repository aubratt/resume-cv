export default function FormFooter({ mode }) {
  return (
    <div className="form__footer">
      <button type="submit" className="form__submit">
        {mode === "add" ? "Add" : "Save"}
      </button>
    </div>
  );
}
