import React from 'react';
import Modal from '../components/cards/Modal';
import { useModal } from './ModalContext';

// This component wraps the Modal component and provides a context to access the modal state.
const ModalWrapper = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {modalContent}
    </Modal>
  );
};

export default ModalWrapper;
