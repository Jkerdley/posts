import React from "react";

export const Modal = ({ postAuthor, postComments, children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="modal_modal-content_close-button" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};
