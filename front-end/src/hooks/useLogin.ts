import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

interface useLoginDto {
    username: string;
    password: string;
}

interface accessToken {
    access_token: string;
}

export function useLogin() {
    return useMutation<accessToken, Error, useLoginDto>({
        mutationFn: async (loginData: useLoginDto) => {
            const response = await apiClient.post<accessToken>({
                endpoint: "auth/login",
                data: loginData,
                isFormData: false,
            });

            if (!response) {
                throw new Error("Registration failed");
            }

            return response;
        },
    });
}