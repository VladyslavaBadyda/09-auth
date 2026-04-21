"use client";

import { useRouter } from "next/navigation";
import { login } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

export default function SignIn() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = await login({ email, password });

    setUser(user);
    router.push("/profile");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button>Login</button>
      </form>
    </main>
  );
}