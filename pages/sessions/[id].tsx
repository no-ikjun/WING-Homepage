import { useRouter } from "next/router";
import IndexPage from "@/components/Head";
import styles from "../modules/SessionDetail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface sessionData {
  count: string;
  datetime: string;
  place: string;
  participant: string;
  description: string;
}

interface sessionProps {
  session_data: Array<sessionData>;
}

export default function SessionDetail({ session_data }: sessionProps) {
  const router = useRouter();
  const { id } = router.query;
  console.log(session_data);
  return (
    <div>
      <IndexPage title="WING | Sessions" description="GIST Developer Group, WING | Contents of WING's Sessions" />
      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.title_div}>
            <h1 className={styles.main_title}>{session_data[0].count} Session</h1>
            <span className={styles.sub_title}>from WING</span>
          </div>
          <div className={styles.detail_div}>
            <h1 className={styles.detail_title}>진행 일정</h1>
            <hr className={styles.detail_line} />
            <p className={styles.detail_content}>일시 : {session_data[0].datetime}</p>
            <p className={styles.detail_content}>장소 : {session_data[0].place}</p>
          </div>
          <div className={styles.detail_div}>
            <h1 className={styles.detail_title}>세션 주제</h1>
            <hr className={styles.detail_line} />
            <h2>FE 기깔나게 시작하기</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(`https://wing-homepage.vercel.app/api/sessions`);
  const allPostsData = res.data;
  const formData: { paths: { params: { id: string } }[] } = {
    paths: allPostsData.map((post: { id: any }): any => ({ params: { id: String(post.id) } })),
  };

  return {
    paths: formData.paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: any) => {
  const id = params?.id as string;
  const res = await axios.get(`https://wing-homepage.vercel.app/api/sessions?order=${id}`);
  const session_data = res.data;
  return { props: { session_data } };
};
