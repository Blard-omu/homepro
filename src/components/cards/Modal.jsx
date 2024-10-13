
const Modal = ({ isOpen = false, onClose, children }) => {

  const modalVisibilityClass = isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full';

  return (
    <div
      id="modal"
      className={`fixed inset-0 bg-black bg-opacity-70 z-[99] flex justify-center items-center transition-opacity duration-500 ease-in-out ${
        isOpen ? 'visible' : 'invisible'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`modal-content bg-white w-[94%] mx-auto md:w-10/12 lg:w-1/2 p-2 md:p-6 rounded-xl md:rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out max-h-screen lg:max-h-[650px] overflow-y-auto ${modalVisibilityClass}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute font-bold top-2 right-2 md:top-4 md:right-4 text-center md:text-2xl rounded-2xl text-primary"
        >
          X
        </button>

        {/* Modal content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
