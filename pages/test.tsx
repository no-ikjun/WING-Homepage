import axios from "axios";
import { useEffect, useState } from "react";

interface Member {
  name: string;
  email: string;
  skill: string;
  role: string;
  link: string;
  team: string;
  profile: string;
}

interface MembersPageProps {
  members: Member[];
}

export default function MembersPage({ members }: MembersPageProps) {
  const [memberData, setMemberData] = useState<Member[]>([]);

  useEffect(() => {
    setMemberData(members);
  }, [members]);

  return (
    <div>
      <h1>Members</h1>
      <ul>
        {memberData.map((member) => (
          <li key={member.profile}>
            {member.name} ({member.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: MembersPageProps }> {
  const res = await axios.get<Member[]>("/api/members?team=junior");
  const members = res.data;

  return { props: { members } };
}
