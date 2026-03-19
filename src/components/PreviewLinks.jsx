export default function PreviewLinks({ links, icon }) {
  return (
    <div className="preview__links">
      {links.map((link) => {
        return (
          <div className="preview__icon-and-text">
            {icon}
            <a href={link.url} key={link.id} target="_blank">
              {link.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}
