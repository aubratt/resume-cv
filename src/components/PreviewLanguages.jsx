export default function PreviewLanguages({ languages }) {
  return (
    <div className="preview__languages">
      {languages.map((item) => {
        return <p key={item.id}>{item.language}</p>;
      })}
    </div>
  );
}
