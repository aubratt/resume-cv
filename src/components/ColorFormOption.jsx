export default function ColorFormOption({
  color,
  previewColor,
  setPreviewColor,
}) {
  const handleClick = () => setPreviewColor(color);

  return (
    <button
      onClick={handleClick}
      className={`color-form-option`}
      style={{ backgroundColor: color }}></button>
  );
}
