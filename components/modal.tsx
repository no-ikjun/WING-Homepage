import Image from "next/image";
import styles from "../pages/modules/Modal.module.css";
import React, { useEffect, useState } from "react";

interface ModalProps {
  url: string;
  onClose: () => void;
  visible: boolean;
}

export default function Modal({ url, onClose, visible }: ModalProps) {
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [margin, setMargin] = useState(0);

  const modalSizing = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if (windowWidth > windowHeight) {
      setHeight(windowHeight * 0.8);
      setWidth((windowHeight * 0.8) / 1.414);
      setMargin(windowHeight * 0.1);
    } else {
      setWidth(windowWidth * 0.8);
      setHeight(windowWidth * 0.8 * 1.414);
      setMargin((windowHeight - windowWidth * 0.8 * 1.414) / 2);
    }
  };

  useEffect(() => {
    modalSizing();
    window.addEventListener("resize", modalSizing);
    return () => {
      window.removeEventListener("resize", modalSizing);
    };
  }, []);

  return (
    <>
      <div className={styles.modal} style={{ display: `${visible ? "block" : "none"}` }}>
        <div className={styles.modal_close} onClick={handleCloseClick}>
          창 닫기 ☓
        </div>
        <div className={styles.modal_body}>
          <Image src={`/sessions/${url}.webp`} alt="modal-img" width={width} height={height} className={styles.modal_img} style={{ marginTop: margin }} />
        </div>
      </div>
    </>
  );
}
