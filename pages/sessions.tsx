import IndexPage from "@/components/Head";
import styles from "./modules/Sessions.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/modal";
import { useState } from "react";

export default function Sessions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState("");
  return (
    <>
      <IndexPage title="WING | Sessions" description="GIST Developer Group, WING | Contents of WING's Sessions" />
      <Modal url="/1st_session.webp" />
      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.title_div}>
            <h1 className={styles.main_title}>Sessions</h1>
            <span className={styles.sub_title}>from WING</span>
          </div>
          <div className={styles.sessions}>
            <div className={[styles.sessions_div, styles.intro_text, styles.intro_left].join(" ")} style={{ width: "55%" }}>
              <h2 className={styles.sessions_title}>What is WING Session?</h2>
              <p className={styles.sessions_content}>
                WING 세션은 초보자부터 전문 개발자까지 코딩에 관심 있는 모든 분들을 대상으로 합니다. 우리의 목표는 회원들이 새로운 프로그래밍 기술을 배우고, 프로젝트를 협업하며, 서로 지식을 공유할 수
                있는 플랫폼을 제공하는 것입니다.
              </p>
              <p className={styles.sessions_content}>
                <strong>Junior 세션</strong>은 WING Junior들이 진행하는 세션으로서, 프로그래밍 초보자들을 대상으로 하는 세션입니다.
                <strong> Senior 세션</strong>은 개발에 대한 경험이 있는 사람을 대상으로 진행하고 있습니다.
              </p>
            </div>
            <div className={[styles.sessions_div, styles.intro_photo, styles.intro_right].join(" ")} style={{ width: "45%" }}>
              <Image className={styles.sessions_photo} src={"/kindpng_484211.webp"} alt="sessions_intro" width={500} height={300} />
            </div>
          </div>
          <div className={styles.sessions}>
            <div className={[styles.sessions_div, styles.intro_photo, styles.intro_left].join(" ")} style={{ width: "35%" }}>
              <Image className={styles.sessions_photo} src={"/Daco_3737758.webp"} alt="sessions_intro" width={300} height={300} />
            </div>
            <div className={[styles.sessions_div, styles.intro_text, styles.intro_right].join(" ")} style={{ width: "65%" }}>
              <h2 className={styles.sessions_title}>How to join?</h2>
              <p className={styles.sessions_content}>
                WING 세션은 개발에 관심있는 모두에게 열려있습니다. WING 세션에 참여하고 싶다면, 게시판에 공지된 포스터를 참고하여 시간에 맞게 <strong>해동학술정보실</strong>로 오시면 됩니다. 세션
                도중에 자유롭게 들어오셔도 되고, 듣다가 자유롭게 나가셔도 좋습니다.
              </p>
              <p className={styles.sessions_content}>
                또한 <strong>WING 소속이 아니더라도</strong>, 세션을 진행해볼 수 있습니다. 아래 링크를 클릭하시면 세션 진행을 위한 신청서를 작성하실 수 있습니다.
              </p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSepAzNSCpMK-SYLIf0crB4EwBPRHveVXB4Nr2qiJu696bwYLA/viewform" target="_blank" className={styles.form_link}>
                WING Session 신청 링크
              </Link>
            </div>
          </div>
          <div className={styles.sessions} style={{ marginTop: 30 }}>
            <div className={styles.sessions_div} style={{ width: "100%" }}>
              <h2 className={[styles.sessions_title, styles.intro_left].join(" ")} style={{ marginTop: 25 }}>
                WING Session History
              </h2>
              <div className={styles.sessions_history_div}>
                <h3 className={styles.session_title}>1st Open Session</h3>
                <div className={styles.session_info}>
                  <Image src="/1st_session.webp" alt="poster" width={170} height={250} className={styles.session_poster} />
                  <span className={styles.session_info_detail}>
                    WING의 첫 번째 세션이 시작되었습니다!
                    <ul>
                      <li>첫번째주제</li>
                    </ul>
                    <h4 className={styles.session_info_sub_title}>진행 일정 및 장소</h4>
                    일시 : 2023년 3월 24일 (금) 19:00 ~ 21:00 <br />
                    장소 : GIST 학사기숙사 B동 1층 해동학술정보실
                    <h4 className={styles.session_info_sub_title}>진행자</h4>
                    FE : 이예빈, 박시원, 최익준
                    <br />
                    BE : 오다현, 김선규, 정재홍
                  </span>
                </div>
              </div>
              <Link href="/sessions" className={styles.session_link}>
                <div className={styles.sessions_history_div}>
                  <h3 className={styles.session_title}>2nd Session</h3>
                </div>
              </Link>
              <Link href="/sessions" className={styles.session_link}>
                <div className={styles.sessions_history_div}>
                  <h3 className={styles.session_title}>3rd Session</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
