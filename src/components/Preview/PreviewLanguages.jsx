export default function PreviewLanguages({ data }) {
  return (
    <div className="preview__languages">
      {data.map((item) => {
        return <p key={item.id}>{item.language}</p>;
      })}
    </div>
  );
}
