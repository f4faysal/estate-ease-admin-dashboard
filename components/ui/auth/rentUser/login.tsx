"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Button } from "../../button";
import { Input } from "../../input";

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const loginHandler = async () => {
    const data = {
      id: "HW-00002",
      password: "123456",
    };

    try {
      const res = await userLogin(data).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/dashboard");
        // message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[80%]  md:w-[280px] h-[400px]  border  rounded-md p-4 grid grid-flow-row  auto-rows-max gap-3">
        <div className="h-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl font-bold text-center">Sign in</h1>
          <p className="text-sm text-slate-400">
            Sign in to access your account
          </p>
        </div>
        <Input placeholder="Enter Your User ID" name="id" />
        <Input placeholder="Enter Your User ID" name="id" />
        <Input placeholder="Enter Your User ID" name="id" />
        <Button onClick={loginHandler}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
