"use client";

import { useRouter } from "next/navigation";
import { register } from "@/lib/api/clientApi";

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await register({ email, password });

    router.push("/profile");
  };

  return (
    <main>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button>Register</button>
      </form>
    </main>
  );
}