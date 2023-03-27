import styles from "./modules/Home.module.css";
import { useState, useEffect, useRef } from "react";
export default function Home() {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerHeight);
  }, []);
  return (
    <div>
      <div className="main-div" style={{ background: "#FFFFF" }}>
        <h1 className={styles.title}>WING</h1>
      </div>
      <div className="main-div" style={{ background: "#cccc" }}>
        <h1 className={styles.title}>WING</h1>
      </div>

      <style jsx>
        {`
          .main-div {
            height: ${windowSize}px;
            width: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
          }
        `}
      </style>
    </div>
  );
}
