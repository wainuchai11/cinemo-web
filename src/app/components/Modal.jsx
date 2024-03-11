'use client'
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={isOpen ? 'overlay' : 'hidden'} onClick={handleOverlayClick}>
            <div className="modal">
                <button className="closeButton" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;