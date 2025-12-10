import NextAuth, { NextAuthOptions, User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) return null;

        const res = await fetch("http://localhost:8000/login/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!res.ok) return null;

        const data: {
          success: boolean;
          user: { id: number; email: string; full_name?: string; role: string };
          token: string;
        } = await res.json();

        if (!data.success) return null;

        // Map backend user to NextAuth User type
        return {
          id: data.user.id,
          name: data.user.full_name || "",
          email: data.user.email,
          role: data.user.role,
          token: data.token,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt", // store session in JWT cookie
  },

  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      
      if (user) {
        token.id = Number(user.id);
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token; // DRF token
      }
      return token;
    },

    async session({ session, token }): Promise<Session> {
      session.user = {
        id: token.id!,
        name: token.name!,
        email: token.email!,
        role: token.role!,
        token: token.token!,
      };
      return session;
    },
  },

  pages: {
    signIn: "/login", // your login page
  },
};
