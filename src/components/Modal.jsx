export default function Modal({ title, children, onClose }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
