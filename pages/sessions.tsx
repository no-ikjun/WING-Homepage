import styles from "./modules/Sessions.module.css";

export default function Sessions() {
  return (
    <div className={styles.main_div}>
      <div className={styles.container}>
        <div className={styles.title_div}>
          <h1 className={styles.main_title}>Sessions</h1>
          <span className={styles.sub_title}>from WING</span>
        </div>
      </div>
    </div>
  );
}
