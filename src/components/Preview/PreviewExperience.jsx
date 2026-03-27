export default function PreviewExperience({ data }) {
  return (
    <div className="preview__entries-section">
      {data.map((item) => {
        return (
          <div key={item.id} className="preview__entry">
            <div className="preview__entry-heading">
              <p>{item.company}</p>
              <p>{item.period}</p>
            </div>
            <div className="preview__entry-subheading">
              <p>{item.position}</p>
              <p>{item.location}</p>
            </div>
            <div className="preview__entry-description">
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
