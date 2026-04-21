"use client";

import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";

export default function AuthNavigation() {
  const { isAuthenticated, user, clear } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    clear();
    router.push("/sign-in");
  };

  if (!isAuthenticated) {
    return (
      <>
        <li><a href="/sign-in">Login</a></li>
        <li><a href="/sign-up">Register</a></li>
      </>
    );
  }

  return (
    <>
      <li><a href="/profile">Profile</a></li>
      <li>{user?.email}</li>
      <li><button onClick={handleLogout}>Logout</button></li>
    </>
  );
}