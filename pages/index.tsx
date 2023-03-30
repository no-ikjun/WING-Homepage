import styles from "./modules/Home.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
export default function Home() {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerHeight);
  }, []);
  return (
    <div>
      <div className={["main-div", styles.main_div].join(" ")} style={{ background: "#FFFFF" }}>
        <div className={styles.sub_div} style={{ justifyContent: "flex-start", width: "40%" }}>
          <h2 className={styles.sub_title}>
            <span style={{ color: "#CD4233" }}>G</span>
            <span style={{ color: "#5C625E" }}>IST</span>
            <br />
            Developer
            <br />
            Group
          </h2>
          <div className={styles.btn_div}>
            <button className={styles.btn}>
              Sessions<span>→</span>
            </button>
            <button className={styles.btn}>Members</button>
          </div>
        </div>
        <div className={[styles.sub_div, "right_div", styles.show_later].join(" ")} style={{ alignItems: "center", width: "60%" }}>
          <h1 className={styles.title}>WING</h1>
        </div>
      </div>

      <div className="main-div" style={{ background: "#cccc" }}>
        <h1 className={styles.title} style={{ marginTop: 0 }}>
          WING
        </h1>
      </div>

      <style jsx>
        {`
          .main-div {
            height: ${windowSize}px;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
