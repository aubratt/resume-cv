export default function PreviewSkills({ data }) {
  return (
    <div className="preview__skills">
      {data.map((item) => {
        return <p key={item.id}>{item.skill}</p>;
      })}
    </div>
  );
}
