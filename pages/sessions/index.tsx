import IndexPage from "@/components/Head";
import styles from "../modules/Sessions.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/modal";
import { useEffect, useRef, useState } from "react";
import { ModalProvider, useModal } from "@/components/ModalContext";
import SessionDetail from "@/components/sessionDetail";
import axios from "axios";

interface SessionData {
  count: string;
  datetime: string;
  place: string;
  participant: string;
  description: string;
}

interface SessionProps {
  session_data: Array<SessionData>;
}

export default function Sessions({ session_data }: SessionProps) {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  useEffect(() => {
    setSessions(session_data);
  }, [session_data]);
  const [visible, setVisible] = useState(false);
  const [modalNum, setModalNum] = useState("");
  return (
    <ModalProvider>
      <Modal
        url={modalNum}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
      <IndexPage title="WING | Sessions" description="GIST Developer Group, WING | Contents of WING's Sessions" />
      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.title_div}>
            <h1 className={styles.main_title}>Sessions</h1>
            <span className={styles.sub_title}>from WING</span>
          </div>
          <div className={styles.sessions}>
            <div className={[styles.sessions_div, styles.intro_text, styles.intro_left, styles.width_55].join(" ")}>
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
            <div className={[styles.sessions_div, styles.intro_photo, styles.intro_right, styles.width_45].join(" ")}>
              <Image className={styles.sessions_photo} src={"/kindpng_484211.webp"} alt="sessions_intro" width={500} height={300} />
            </div>
          </div>
          <div className={styles.sessions}>
            <div className={[styles.sessions_div, styles.intro_photo, styles.intro_left, styles.width_35].join(" ")}>
              <Image className={styles.sessions_photo} src={"/Daco_3737758.webp"} alt="sessions_intro" width={300} height={300} />
            </div>
            <div className={[styles.sessions_div, styles.intro_text, styles.intro_right, styles.width_65].join(" ")}>
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
              {sessions.map((item: SessionData) => {
                const ment1 = item.description.split("&&")[0];
                const ment2 = item.description.split("&&")[1];
                const member = item.participant.split("&&");
                return (
                  <SessionDetail
                    url={item.count}
                    event={() => {
                      setVisible(true);
                      setModalNum(`${item.count}`);
                    }}
                    key={item.count}
                    title={`${item.count} Open Session`}
                    ment1={ment1}
                    ment2={ment2}
                    date={item.datetime}
                    location={item.place}
                    member={member}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <figure className={styles.notification}>
        <div className={styles.notification_body}>Your account has been created! &#128640;</div>
        <div className={styles.notification_progress}></div>
      </figure>
    </ModalProvider>
  );
}

export const getStaticProps = async (): Promise<{ props: any }> => {
  const res = await axios.get(`https://wing-homepage.vercel.app/api/sessions`);
  const session_data = res.data;
  return { props: { session_data } };
};
