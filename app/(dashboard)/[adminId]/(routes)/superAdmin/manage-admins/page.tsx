import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusSquare } from "lucide-react";
import CreateAdminForm from "./components/create-admin-form";

const ManageAdmins = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CreateAdminForm />
      </div>
    </div>
  );
};

export default ManageAdmins;
