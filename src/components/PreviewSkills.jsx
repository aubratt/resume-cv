export default function PreviewSkills({ skills }) {
  return (
    <div className="preview__skills">
      {skills.map((item) => {
        return <p key={item.id}>{item.skill}</p>;
      })}
    </div>
  );
}
