import axios from "axios";
import { API_URL } from "@/common/constants";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export const apiGet = async (url: string) => {
  return (await apiClient.get(url)).data;
};

export const apiPost = async (url: string, body: any) => {
  return await apiClient.post(url, body);
};
