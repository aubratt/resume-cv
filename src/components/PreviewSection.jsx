export default function PreviewSection({ heading, children }) {
  return (
    <div className="preview__section">
      <div className="preview__section-heading">
        <p>{heading}</p>
      </div>
      <div className="preview__section-content">
        {children}
      </div>
    </div>
  )
}