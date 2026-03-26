export default function PreviewSection({ heading, previewColor, children }) {
  return (
    <div
      className="preview__section"
      style={{ borderTop: `1px solid ${previewColor}` }}>
      <div className="preview__section-heading">
        <p style={{ color: previewColor }}>{heading}</p>
      </div>
      <div className="preview__section-content">{children}</div>
    </div>
  );
}
