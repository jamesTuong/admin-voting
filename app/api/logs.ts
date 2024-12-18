import axios from "axios";
import { baseUrl } from "@/app/constants";

export const getLogs = async () => {
  const response = await axios.get(`${baseUrl}/logs`);
  return response.data;
};
