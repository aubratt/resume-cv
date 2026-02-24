export default function ContentPanel() {
  const chevronDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  return (
    <div className="content-panel">
      <div className="content-panel__section">
        <button className="content-panel__section-toggle">{chevronDown}</button>
        <h2>General</h2>
      </div>
    </div>
  );
}
