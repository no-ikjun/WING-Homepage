import styles from "../pages/modules/Detail.module.css";
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  id: number;
  name: string;
  email: string;
  skill: Array<string>;
  role: string;
  link: Array<string>;
}

export default function Profile({ id, name, email, skill, role, link }: ProfileProps) {
  return (
    <div className={styles.member_info_div}>
      <div className={styles.member_photo_div}>
        <Image className={styles.member_photo} src={`/profile/profile_${id}.webp`} width={140} height={140} alt="Member Photo" quality={100} />
      </div>
      <div className={styles.member_detail_div}>
        <h3 className={styles.member_name}>
          {name} <span style={{ fontSize: 18, fontWeight: 600 }}>- {role}</span>
        </h3>
        <span className={styles.member_link}>
          {link.map((url: string) => {
            let url_link = url.split(",")[0];
            let url_name = url.split(",")[1];
            return (
              <Link href={`${url_name}`} key={url_name + url_link}>
                <Image className={styles.link_icon} src={`/${url_link}.webp`} width={20} height={20} alt="Icon" quality={100} />
              </Link>
            );
          })}
        </span>
        <br />
        <p className={styles.member_email}>{email}</p>
        <ul className={styles.member_skill}>
          {skill.map((item) => {
            return (
              <li className={styles.member_skill_list} key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
