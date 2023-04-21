import Image from "next/image";
import styles from "../pages/modules/Modal.module.css";
import { useState, useEffect } from "react";

interface ModalProps {
  url: string;
  onClose: () => void;
  visible: boolean;
}

export default function Modal({ url, onClose, visible }: ModalProps) {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <div className={styles.modal} style={{ display: `${visible && modalVisible ? "block" : "none"}` }}>
        <div className={styles.modal_body}>
          <div className={styles.modal_close} onClick={handleCloseClick}>
            창 닫기 ☓
          </div>
          <Image src={url} alt="modal-img" width={480} height={680} className={styles.modal_img} />
        </div>
      </div>
    </>
  );
}
