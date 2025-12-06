// services/auth.ts
import api from "@/app/utils/api"; // your axios instance

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  try {
    const response = await api.post("/login/", data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};
