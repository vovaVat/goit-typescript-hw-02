import Modal from "react-modal";
import style from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: { src: string; alt: string } | null;
}

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }: ImageModalProps) => {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName="modal-overlay"
      className={style.modalOverlay}
    >
      <div className={style.modalBody} onClick={onRequestClose}>
        <img
          src={image.src}
          alt={image.alt}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
