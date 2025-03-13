import { useQuery } from "@tanstack/react-query";
import apiInterceptors from "../api/apiInterceptors";

interface User {
  id: string;
  fullname: string;
  email: string;
  username: string;
}

export function useGetUser(enabled: boolean) {
  return useQuery<User, Error>({
    queryKey: ["getUser"],
    queryFn: async () => {
      return await apiInterceptors.get<User>("/user");
    },
    enabled, // ✅ ใช้ enabled เพื่อควบคุมการเรียก API
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
