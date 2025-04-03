import "./close-modal-button.css";

export const CloseModalButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="close-modal-button" aria-label="Закрыть окно">
            <span className="close-modal-button_line close-modal-button_line-first" />
            <span className="close-modal-button_line close-modal-button_line-second" />
        </button>
    );
};
