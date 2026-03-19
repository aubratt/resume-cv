export default function PreviewCertifications({ certifications }) {
  return (
    <div className="preview__entries-section">
      {certifications.map((certification) => {
        return (
          <div key={certification.id}>
            <div className="preview__entry-heading">
              <p>{certification.certification}</p>
              <p>{certification.date}</p>
            </div>
            <div className="preview__entry-subheading">
              <p>{certification.issuer}</p>
            </div>
            <div>
              <p>{certification.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
