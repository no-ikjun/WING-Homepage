import { useRouter } from "next/router";

export default function SessionDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={{ paddingTop: 100 }}>
      <p>{id}</p>
    </div>
  );
}
