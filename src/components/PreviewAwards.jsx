export default function PreviewAwards({ awards }) {
  return (
    <div className="preview__entries-section">
      {awards.map(award => {
        return (
          <div key={award.id}>
            <div className="preview__entry-heading">
              <p>{award.award}</p>
              <p>{award.date}</p>
            </div>
            <div className="preview__entry-subheading">
              <p>{award.issuer}</p>
            </div>
            <div>
              <p>{award.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}