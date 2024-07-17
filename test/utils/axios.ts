import axios from "axios";

export const axiosBackend = axios.create({
  baseURL: `https://randomuser.me/api/`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
