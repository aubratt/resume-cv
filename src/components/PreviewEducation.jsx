export default function PreviewEducation({ data }) {
  function inputEmpty(input) {
    if (input === undefined || input === "") return true;
    else return false;
  }

  return (
    <div className="preview__entries-section">
      {data.map((item) => {
        return (
          <div key={item.id} className="preview__entry">
            <div className="preview__entry-heading">
              <p>{item.school}</p>
              <p>{item.period}</p>
            </div>
            <div className="preview__entry-subheading">
              <p>
                <span>{item.degree}</span>
                {!inputEmpty(item.degree) && !inputEmpty(item.field) && (
                  <span>, </span>
                )}
                <span>{item.field}</span>
              </p>
              <p>{item.location}</p>
            </div>
            {!inputEmpty(item.gpa) && (
              <div className="gpa">
                <p>{item.gpa} GPA</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
