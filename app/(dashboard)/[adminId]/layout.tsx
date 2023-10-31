"use client";

import { redirect } from "next/navigation";
import toast from "react-hot-toast";

import Loading from "@/app/loading";
import Navbar from "@/components/navbar";
import { useMyProfileQuery } from "@/redux/api/authApi";
import { isLoggedIn } from "@/services/auth.service";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { adminId: string };
}) {
  const { adminId } = params;
  const { data, isLoading } = useMyProfileQuery({});
  const isLogin = isLoggedIn();
  const userId = data?._id;

  if (isLoading) {
    return <Loading />;
  }

  if (adminId !== userId) {
    toast.error("your id is not matched to this page!");
    redirect("/");
  }

  if (!isLogin) {
    redirect("/sign-in");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
