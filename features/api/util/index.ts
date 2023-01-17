import axios from "axios";
import { API_URL, BACKEND_URL } from "@/common/constants";
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

// https://laravel.com/docs/9.x/sanctum#csrf-protection
const getCsrfCookie = async () => {
  await apiClient.get("sanctum/csrf-cookie", { baseURL: BACKEND_URL });
};

export const apiGet = async (url: string) => {
  return (await apiClient.get(url)).data;
};

export const apiPost = async (url: string, body: any) => {
  await getCsrfCookie();

  return await apiClient.post(url, body);
};
