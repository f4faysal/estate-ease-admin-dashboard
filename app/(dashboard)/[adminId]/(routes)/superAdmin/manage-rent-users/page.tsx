import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import RentUserTable from "./components/rent-user-table";

export const metadata: Metadata = {
  title: "Rent Users",
  description: "Manage Rent Users and their details.",
};

const ManageAdmins = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Heading
            title="Manage Rent Users"
            description="Manage Rent Users and their details."
          />
        </div>
        <Separator />
        <RentUserTable />
      </div>
    </div>
  );
};

export default ManageAdmins;
