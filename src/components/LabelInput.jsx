export default function LabelInput({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="label-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
