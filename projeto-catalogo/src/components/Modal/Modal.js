import React from 'react';
import { Backdrop, ModalBox, CloseButton } from './Modal.css'

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                {children}
            </ModalBox>
        </Backdrop>
    );
};
