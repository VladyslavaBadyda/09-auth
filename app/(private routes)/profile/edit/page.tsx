import css from "./page.module.css";
import Image from "next/image";
import { getMe } from "@/lib/api/serverApi";
import { updateMe } from "@/lib/api/clientApi";

export default async function EditProfilePage() {
  const user = await getMe();

  async function handleSubmit(formData: FormData) {
    "use server";

    const username = String(formData.get("username"));

    await updateMe({
      username,
    });
  }

  return (
    <main className={css.main}>
      <h1>Edit profile</h1>

      <div className={css.card}>
        <Image
          src={user.avatar}
          alt={user.username}
          width={120}
          height={120}
        />

        <p>{user.email}</p>

        <form action={handleSubmit} className={css.form}>
          <label>
            Name
            <input
              type="text"
              name="username"
              defaultValue={user.username}
              required
            />
          </label>

          <button type="submit">Save</button>
        </form>
      </div>
    </main>
  );
}