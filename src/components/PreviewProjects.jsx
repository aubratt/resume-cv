import { LinkIcon } from "@heroicons/react/24/outline";

export default function PreviewProjects({ projects, inputEmpty }) {
  return (
    <div className="preview__entries-section">
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <div className="preview__entry-heading">
              <p>{project.name}</p>
              <p>{project.period}</p>
            </div>
            <div>
              <p>{project.description}</p>
              {!inputEmpty(project.website) && (
                <div className="preview__icon-and-text">
                  <LinkIcon stroke="black" className="preview__icon" />
                  <a href={project.website} target="_blank" className="website">
                    Website
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
