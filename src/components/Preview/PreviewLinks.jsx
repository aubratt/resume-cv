import { LinkIcon } from "@heroicons/react/24/outline";

export default function PreviewLinks({ data }) {
  return (
    <div className="preview__links">
      {data.map((link) => {
        return (
          <div key={link.id} className="preview__icon-and-text">
            <LinkIcon stroke="black" className="preview__icon" />
            <a href={link.url} key={link.id} target="_blank">
              {link.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}
