export default function LabelTextarea({
  id,
  name,
  label,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className="label-textarea">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        rows="5"
        value={value}
        placeholder={placeholder}
        onChange={onChange}></textarea>
    </div>
  );
}
