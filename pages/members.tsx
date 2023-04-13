import styles from "./modules/Detail.module.css";

export default function Members() {
  return (
    <div className={styles.main_div}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.main_title}>Members</h1>
          <span className={styles.sub_title}>in Wing</span>
        </div>
      </div>
    </div>
  );
}
