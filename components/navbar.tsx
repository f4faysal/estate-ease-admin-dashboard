import { MainNav } from "@/components/main-nav";
import Image from "next/image";
import Link from "next/link";
import Profile from "./profile";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/">
          <Image
            src="/estate-ease-logo.png"
            width={80}
            height={100}
            alt="Estate ease logo"
          />
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          {/* <ThemeToggle /> */}
          <Profile />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
