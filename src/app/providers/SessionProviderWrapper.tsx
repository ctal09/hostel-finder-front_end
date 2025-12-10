// app/providers/SessionProviderWrapper.tsx
"use client"; // <- must be a client component

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
