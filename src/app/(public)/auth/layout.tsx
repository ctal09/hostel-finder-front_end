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

export default function authLayout({ children }: ControlPanelLayoutProps) {
  return (
    <>
      

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>
    </>
  );
}
