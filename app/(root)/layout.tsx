"use client";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
// import Contents from "@/components/ui/Contents";
// import SideBar from "@/components/ui/Sidebar";
// import { isLoggedIn } from "@/services/auth.service";
// import { Layout, Row, Space, Spin } from "antd";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const { role, userId }: any = getUserInfo();
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(userId);

  useEffect(() => {
    if (!userId) {
      redirect("/sign-in");
    }
    if (userId) {
      redirect(`/${role}-${userId}`);
    }
    setIsLoading(true);
  }, [userId, role, isLoading, userLoggedIn]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* <SideBar /> */}
      {/* <Contents></Contents> */}
      {children}
    </div>
  );
};

export default DashboardLayout;
