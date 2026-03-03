export default function Modal({ title, children, onClose, icon }) {
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div className="modal__header">
          <div className="modal__title">
            {icon}
            {title}
          </div>
          <button onClick={onClose}>
            <p className="modal__close">Close</p>
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
