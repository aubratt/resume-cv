export default function PreviewTitle({ name, headline }) {
  return (
    <div className="preview__title">
      <p className="preview__name">{name}</p>
      <p className="preview__headline">{headline}</p>
    </div>
  );
}
