import { getMe } from "@/lib/api/serverApi";

export default async function ProfilePage() {
  const user = await getMe();

  return (
    <main>
      <h1>Profile</h1>
      <p>{user.email}</p>
      <p>{user.username}</p>
    </main>
  );
}