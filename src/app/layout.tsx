// app/layout.tsx

import "./globals.css";
import { Home, Building2, Info, Mail, Menu, X } from "lucide-react";

export const metadata = {
  title: "Smart Hostel Finder - Find Your Perfect Room",
  description:
    "Discover and explore hostel room allocations with our intelligent room finder system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
