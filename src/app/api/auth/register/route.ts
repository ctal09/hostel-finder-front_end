// services/auth.ts
import api from "@/app/utils/api"; // your axios instance

interface RegisterData {
  full_name: string;
  email: string;
  phone_number: string;
  gender: string;
  dob: string;
  role: "tenant" | "owner";
  password: string;
  confirmPassword: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await api.post("/api/register/", data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};
