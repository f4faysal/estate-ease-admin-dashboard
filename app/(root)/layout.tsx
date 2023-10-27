"use client";
import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { role, userId }: any = getUserInfo();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userId) {
      redirect("/sign-in");
    }
    if (role === "Admin" || role === "Super_Admin") {
      redirect(`/${userId}`);
    } else {
      removeUserInfo(authKey);
      toast.error("You are not authorized to access this page!");
    }
    setIsLoading(true);
  }, [userId, role, isLoading]);

  if (!isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default DashboardLayout;
