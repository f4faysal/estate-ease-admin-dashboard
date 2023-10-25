"use client";
import { isLoggedIn } from "@/services/auth.service";
// import Contents from "@/components/ui/Contents";
// import SideBar from "@/components/ui/Sidebar";
// import { isLoggedIn } from "@/services/auth.service";
// import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/sign-in");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        {/* <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space> */}

        <PuffLoader color="#36d7b7" />
      </div>
    );
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
