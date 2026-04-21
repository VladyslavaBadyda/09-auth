"use client";

import { useRouter } from "next/navigation";
import { updateMe } from "@/lib/api/clientApi";

export default function EditProfile() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = e.target.username.value;

    await updateMe({ username });

    router.push("/profile");
  };

  return (
    <main>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" />
        <button>Save</button>
      </form>
    </main>
  );
}