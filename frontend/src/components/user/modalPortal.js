import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');
    
    if (!modalRoot) {
        console.error("The 'modal-root' element is not found in the document.");
        return null; // Or handle the case when modal-root is not found
    }

    return ReactDOM.createPortal(
        children,
        modalRoot
    );
};

export default ModalPortal;
