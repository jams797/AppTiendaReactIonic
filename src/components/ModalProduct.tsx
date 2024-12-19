import React from 'react';
import ReactDOM from 'react-dom';
import './ModalProducts.css';

interface ModalProdtuctProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    img: string;
    description: string
}

const ModalProduct : React.FC<ModalProdtuctProps>  = ({ title, isOpen, onClose, img, description }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h1 className="modal-title">{title}</h1>
        <img src={img} alt="Modal Content" className="modal-image" />
        <h3 className="modal-description">{description}</h3>
      </div>
    </div>,
    document.body
  );
};

export default ModalProduct;