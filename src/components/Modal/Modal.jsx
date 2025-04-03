import React from "react";
import { CloseModalButton } from "../Buttons/CloseModalButton";

export const Modal = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal_content" onClick={(event) => event.stopPropagation()}>
                <CloseModalButton onClick={onClose} />
                {children}
            </div>
        </div>
    );
};
