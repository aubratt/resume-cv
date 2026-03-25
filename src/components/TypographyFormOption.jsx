export default function TypographyFormOption({
  fontFamily,
  fontClass,
  previewFont,
  setPreviewFont,
  activeFont,
}) {
  const handleClick = () => setPreviewFont(fontClass);

  return (
    <button
      onClick={handleClick}
      className={`typography-form__option ${fontClass} ${previewFont === fontClass ? "active-font" : ""}`}>
      <div className="typography-form__option-char-sample">
        <p>Aa</p>
      </div>
      <p className="typography-form__option-font-family">{fontFamily}</p>
    </button>
  );
}
