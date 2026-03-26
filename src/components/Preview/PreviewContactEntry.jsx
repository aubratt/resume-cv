export default function PreviewContactEntry({ icon, text }) {
  return (
    <div className="preview__icon-and-text">
      {icon}
      <p>{text}</p>
    </div>
  )
}