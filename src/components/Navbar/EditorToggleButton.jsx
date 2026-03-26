export default function EditorToggleButton({
  onClick,
  panelOpen,
  panel,
  closedIcon,
  openIcon,
}) {
  return (
    <button
      onClick={onClick}
      className="navbar__editor-toggle"
      aria-label={`Toggle ${panel} panel`}>
      {panelOpen ? closedIcon : openIcon}
    </button>
  );
}
