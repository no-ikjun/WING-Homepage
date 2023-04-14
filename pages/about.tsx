import styles from "./modules/About.module.css";

export default function Sessions() {
  return (
    <div className={styles.main_div}>
      <div className={styles.container}>
        <div className={styles.title_div}>
          <h1 className={styles.main_title}>About</h1>
          <span className={styles.sub_title}>WING</span>
        </div>
      </div>
    </div>
  );
}
