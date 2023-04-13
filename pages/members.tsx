import styles from "./modules/Detail.module.css";
import Image from "next/image";
import Profile from "@/components/profile";

export default function Members() {
  return (
    <div className={styles.main_div}>
      <div className={styles.container}>
        <div className={styles.title_div}>
          <h1 className={styles.main_title}>Members</h1>
          <span className={styles.sub_title}>in WING</span>
        </div>
        <div className={styles.members}>
          <div className={styles.senior_div}>
            <h2 className={styles.member_title}>Senior</h2>
            <Profile
              id={5}
              name="이주찬"
              email="---@gm.gist.ac.kr"
              skill={["現 22/23년도 GDSC Lead", "現 지간표 백엔드 개발자", "前 Naver Clova 백엔드 인턴", "前 (주)그룹바이 백엔드 개발자"]}
              role="BackEnd"
              link={["github,https://github.com", "linkedin,https://www.linkedin.com/"]}
            />
            <Profile
              id={6}
              name="이보성"
              email="paperstar@gm.gist.ac.kr"
              skill={["現 팀 피클 테크리드", "現 Zephy 개발팀 풀스택", "前 심플태그 개발팀장", "前 교내 인트라넷 개발팀 풀스택"]}
              role="FullStack"
              link={["github,https://github.com", "youtube,https://www.youtube.com/"]}
            />
            <Profile
              id={7}
              name="김선규"
              email="----@gm.gist.ac.kr"
              skill={["現 GDSC 멘토", "前 업비트 3년차 백엔드 개발자", "前 18년도 WING 동아리장", "前 펭귄리포트 백엔드 개발자"]}
              role="BackEnd"
              link={["github,https://github.com"]}
            />
            <Profile
              id={8}
              name="정재홍"
              email="jaehong21@gm.gist.ac.kr"
              skill={["現 22/23년도 WING 동아리장", "現 GDSC 멘토", "現 (주)시고르자브종 테크리드", "前 (주)PiLab Web3 개발자 인턴", "前 GIST 집행위 정보국 DevOps"]}
              role="BackEnd/Infra"
              link={["github,https://github.com"]}
            />
            <Profile id={9} name="이상유" email="----@gm.gist.ac.kr" skill={["現 데브시스터즈 3년차 개발자", "前 20/22년도 인포팀장"]} role="DevOps" link={["github,https://github.com"]} />
            <Profile
              id={10}
              name="김윤재"
              email="rladbswo@gm.gist.ac.kr"
              skill={["現 GDSC 멘토", "現 Focus50 풀스택 개발자", "前 (주)그룹바이 백엔드 개발자", "前 소프트웨어 마이스트로 13기"]}
              role="FrontEnd/Flutter"
              link={["github,https://github.com"]}
            />
            <Profile
              id={11}
              name="고도현"
              email="----@gm.gist.ac.kr"
              skill={["現 (주)시고르자브종 프론트엔드", "現 GDSC 코어팀 (기술팀)", "現 GIST 집행위 정보국 프론트엔드"]}
              role="FrontEnd"
              link={["github,https://github.com"]}
            />
          </div>
          <div className={styles.right_div}>
            <div className={styles.junior_div}>
              <h2 className={styles.member_title}>Junior</h2>
              <Profile
                id={1}
                name="최익준"
                email="ikjunchoi_ug@gm.gist.ac.kr"
                skill={["現 GIST 집행위 정보국 백엔드 개발자", "前 교내 학생커뮤니티 개발팀장"]}
                role="FrontEnd"
                link={["github,https://github.com/no-ikjun", "velog,https://velog.io/@choi041101", "else,https://jshsus.kr"]}
              />
              <Profile
                id={2}
                name="이예빈"
                email="leeyebeen_ug@gm.gist.ac.kr"
                skill={["現 GIST 집행위 정보국 프론트엔드 개발자"]}
                role="FrontEnd"
                link={["github,https://github.com", "instagram,https://instagram.com/"]}
              />
              <Profile
                id={3}
                name="오다현"
                email="o_dahyun@gm.gist.ac.kr"
                skill={["現 (주)시고르자브종 백엔드 개발자", "現 GIST 집행위 정보국 백엔드 개발자"]}
                role="BackEnd"
                link={["github,https://github.com/controlZ"]}
              />
              <Profile id={4} name="박시원" email="----@gm.gist.ac.kr" skill={["現 GIST 집행위 정보국 백엔드 개발자", "現 REGO 백엔드 개발자"]} role="BackEnd" link={["github,https://github.com"]} />
            </div>
            <div className={styles.ai_div}>
              <h2 className={styles.member_title}>AI Team</h2>
              <Profile
                id={15}
                name="김단을"
                email="flytodk98@gm.gist.ac.kr"
                skill={["現 Yonsei VnL Lab Intern", "現 GIST ViRL Lab Intern"]}
                role="ML/CV Researcher"
                link={["github,https://github.com"]}
              />
              <Profile
                id={13}
                name="김윤호"
                email="youknowyunho@gm.gist.ac.kr"
                skill={["現 비브스튜디오스 AI Engineer", "前 GIST CILAB 학부 인턴"]}
                role="AI Engineer"
                link={["github,https://github.com"]}
              />
              <Profile id={14} name="이호성" email="gitpush-force@gm.gist.ac.kr" skill={[""]} role="AI Engineer" link={["github,https://github.com"]} />
              <Profile id={12} name="이준명" email="slime0519@gm.gist.ac.kr" skill={[""]} role="AI Engineer" link={["github,https://github.com"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
