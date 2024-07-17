import { axiosBackend } from "@/utils/axios";

export const usersAxios = {
  getUsers: async (page: number) => {
    return await axiosBackend.get("", {
      params: {
        results: 10,
        page: page,
        seed: "abc",
      },
    });
  },
  getUser: async () => {
    return await axiosBackend.get("", {
      params: {
        results: 1,
      },
    });
  },
};
