import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      role: string;     // ADD THIS
      token: string;    // ADD THIS
    };
  }

  interface User {
    id: number;
    name: string;
    email: string;
    role: string;     // ADD THIS
    token: string;    // ADD THIS
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    name: string;
    email: string;
    role: string;     // ADD THIS
    token: string;    // ADD THIS
  }
}
