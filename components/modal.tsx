import Image from "next/image";
import styles from "../pages/modules/Modal.module.css";

export default function Modal({ url }: { url: string }) {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal_body}>
          <p className={styles.modal_close}>Close</p>
          <Image src={url} alt="modal-img" width={480} height={680} className={styles.modal_img} />
        </div>
      </div>
    </>
  );
}
