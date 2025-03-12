import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

interface useRegisterDto {
  fullname: string;
  email: string;
  username: string;
  password: string;
}

interface User {
  message: string;
}

export function useRegister() {
  return useMutation<User, Error, useRegisterDto>({
    mutationFn: async (newUser: useRegisterDto) => {
      const response = await apiClient.post<User>({
        endpoint: "auth/register",
        data: newUser,
        isFormData: false,
      });

      if (!response) {
        throw new Error("Registration failed");
      }

      return response;
    },
  });
}
