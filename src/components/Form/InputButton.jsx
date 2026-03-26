export default function InputButton({
  id,
  name,
  placeholder,
  value,
  onChange,
  mode = "add",
}) {
  return (
    <div className="input-button">
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="form__submit">
        {mode === "add" ? "Add" : "Save"}
      </button>
    </div>
  );
}
