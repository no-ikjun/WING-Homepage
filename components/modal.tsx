import Image from "next/image";
import styles from "../pages/modules/Modal.module.css";
import React, { useState, useEffect } from "react";

interface ModalProps {
  url: string;
  onClose: (e: any) => void;
  visible: boolean;
  modalRef: React.ForwardedRef<HTMLDivElement>;
}

export default function Modal({ url, onClose, visible, modalRef }: ModalProps) {
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose(e);
  };

  return (
    <>
      <div className={styles.modal} style={{ display: `${visible ? "block" : "none"}` }} ref={modalRef} onClick={handleCloseClick}>
        <div className={styles.modal_body}>
          <Image src={`/${url}_session.webp`} alt="modal-img" fill className={styles.modal_img} />
        </div>
      </div>
    </>
  );
}
