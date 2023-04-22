import styles from "../pages/modules/Sessions.module.css";
import Image from "next/image";
import Link from "next/link";

interface SessionProps {
  url: string;
  event: () => void;
  title: string;
  ment1: string;
  ment2: string;
  date: string;
  location: string;
  member: Array<string>;
}

export default function SessionDetail({ url, event, title, ment1, ment2, date, location, member }: SessionProps) {
  return (
    <div className={styles.sessions_history_div}>
      <h3 className={styles.session_title}>
        {title}
        <Link href={`/sessions/${url}`} className={styles.session_title_sub}>
          자세히 보기 →
        </Link>
      </h3>
      <div className={styles.session_info}>
        <Image
          src={`/${url}_session.webp`}
          alt="poster"
          width={170}
          height={250}
          className={styles.session_poster}
          onClick={() => {
            event();
          }}
        />
        <span className={styles.session_info_detail}>
          <p className={styles.session_info_detail_ment}>{ment1}</p>
          <p className={styles.session_info_detail_ment}>{ment2}</p>
          <h4 className={styles.session_info_sub_title}>진행 일정 및 장소</h4>
          <p className={styles.session_info_member}>일시 : {date}</p>
          <p className={styles.session_info_member}>장소 : {location}</p>
          <h4 className={styles.session_info_sub_title}>진행자</h4>
          {member.map((item) => (
            <p key={item} className={styles.session_info_member}>
              {item}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
}
