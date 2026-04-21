import axios from "axios";
import { cookies } from "next/headers";

const baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";

export const serverApi = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.toString();

  return axios.create({
    baseURL,
    headers: {
      Cookie: cookie,
    },
  });
};

export const getMe = async () => {
  const api = await serverApi();
  const res = await api.get("/users/me");
  return res.data;
};