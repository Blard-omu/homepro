import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; 

const Modal = ({ isOpen=false, onClose, closeOnClickOutside=true, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background' && closeOnClickOutside) {
      onClose();
    }
  };

  // Close the modal when pressing the "Escape" key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Determine if the modal should be visible and animate
  const modalVisibilityClass = isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full';

  return (
    <div
      id="modal-background"
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99] transition-opacity duration-500 ease-in-out  ${
        isOpen ? 'visible' : 'invisible'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-white w-full md:w-10/12  lg:w-1/2 p-2 md:p-6 md:rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out lg:h-[650px] 2xl:h-[800px] overflow-y-auto  ${modalVisibilityClass}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute w-8 h-8 top-4 right-4 text-center bg-neutral-200 rounded-full text-primary"
        >
          <b>X</b>
        </button>

        {/* Modal content */}
        {children}
      </div>
    </div>
  );
};




export default Modal;