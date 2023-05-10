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
            <h1 className={styles.main_title}>Session</h1>
            <span className={styles.sub_title}>from WING</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  //const res = await axios.get(`https://wing-homepage.vercel.app/api/sessions`);
  //onst allPostsData = res.data;
  /*const paths = allPostsData.map((post: any) => ({
    params: {
      id: post.id,
    },
  }));
  */
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: any) => {
  const id = params?.id as string;
  const res = await axios.get(`https://wing-homepage.vercel.app/api/sessions/${id}`);
  const session_data = res.data;
  return { props: { session_data } };
};
