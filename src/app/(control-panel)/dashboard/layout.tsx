"use client";

import Link from "next/link";
import "@/app/globals.css";
import { ReactNode, useState } from "react";
import {
  LayoutDashboard,
  Menu,
  Bell,
  Search,
  Building2,
  Mail,
} from "lucide-react";

interface ControlPanelLayoutProps {
  children: ReactNode;
}

export default function ControlPanelLayout({ children }: ControlPanelLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans antialiased">

        {/* Header */}
     

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
      

      </body>
    </html>
  );
}
