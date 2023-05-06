import styles from "./modules/Detail.module.css";
import Profile from "@/components/profile";
import IndexPage from "@/components/Head";
import axios from "axios";
import { useState, useEffect, memo } from "react";

interface memberData {
  name: string;
  email: string;
  skill: string;
  role: string;
  link: string;
  team: string;
  profile: string;
}

interface membersProps {
  seniors: Array<memberData>;
  juniors: Array<memberData>;
  ais: Array<memberData>;
}

export default function Members({ seniors, juniors, ais }: membersProps) {
  const [juniorData, setJuniorData] = useState<memberData[]>([]);
  const [seniorData, setSeniorData] = useState<memberData[]>([]);
  const [aiData, setAiData] = useState<memberData[]>([]);
  async function getMembers(team: string) {
    await axios
      .get(`/api/members?team=${team}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function createMembers(data: memberData) {
    await axios
      .post("/api/members", { name: data.name, email: data.email, skill: data.skill, role: data.role, link: data.link, team: data.team, profile: data.profile })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setJuniorData(juniors);
    setSeniorData(seniors);
    setAiData(ais);
  }, [juniors, seniors, ais]);
  return (
    <>
      <IndexPage title="WING | Members" description="GIST Developer Group, WING | WING's Members" />
      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.title_div}>
            <h1 className={styles.main_title}>Members</h1>
            <span className={styles.sub_title}>in WING</span>
          </div>
          <div className={styles.members}>
            <div className={styles.senior_div}>
              <h2 className={styles.member_title}>Senior</h2>
              {seniorData.map((item: memberData) => {
                return <Profile id={Number(item.profile)} name={item.name} email={item.email} skill={item.skill.split(", ")} role={item.role} link={item.link.split("&&")} key={item.profile} />;
              })}
            </div>
            <div className={styles.right_div}>
              <div className={styles.junior_div}>
                <h2 className={styles.member_title}>Junior</h2>
                {juniorData.map((item: memberData) => {
                  return <Profile id={Number(item.profile)} name={item.name} email={item.email} skill={item.skill.split(", ")} role={item.role} link={item.link.split("&&")} key={item.profile} />;
                })}
              </div>
              <div className={styles.ai_div}>
                <h2 className={styles.member_title}>AI Team</h2>
                {aiData.map((item: memberData) => {
                  return <Profile id={Number(item.profile)} name={item.name} email={item.email} skill={item.skill.split(", ")} role={item.role} link={item.link.split("&&")} key={item.profile} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (): Promise<{ props: any }> => {
  const seniort_res = await axios.get("http://localhost:3000/api/members?team=senior");
  const seniors: membersProps = seniort_res.data;
  const junior_res = await axios.get("http://localhost:3000/api/members?team=junior");
  const juniors: membersProps = junior_res.data;
  const ai_res = await axios.get("http://localhost:3000/api/members?team=ai");
  const ais: membersProps = ai_res.data;
  return { props: { seniors: seniors, juniors: juniors, ais: ais } };
};
