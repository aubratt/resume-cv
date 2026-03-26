export default function TypographyFormOption({
  fontFamily,
  previewFont,
  setPreviewFont,
}) {
  const handleClick = () => setPreviewFont(fontFamily);

  return (
    <button
      onClick={handleClick}
      className={`typography-form__option ${previewFont === fontFamily ? "active-font" : ""}`}
      style={{ fontFamily: fontFamily }}>
      <div className="typography-form__option-char-sample">
        <p>Aa</p>
      </div>
      <p className="typography-form__option-font-family">{fontFamily}</p>
    </button>
  );
}
