"use client";

import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { redirect } from "next/navigation";

// import Navbar from '@/components/navbar'

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { adminId: string };
}) {
  const { role, userId }: any = getUserInfo();
  const isLogin = isLoggedIn();
  if (!isLogin) {
    redirect("/sign-in");
  }

  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
}
