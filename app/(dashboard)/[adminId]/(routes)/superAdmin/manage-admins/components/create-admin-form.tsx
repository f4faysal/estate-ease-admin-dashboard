"use client";
import { Plus } from "lucide-react";

import AdminModal from "@/components/reusable-ui/admin-modal";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { getUserInfo } from "@/services/auth.service";

import Link from "next/link";
import { useDispatch } from "react-redux";
import AdminFormData from "./AdminFormData";

const CreateAdminForm = () => {
  const admin: any = getUserInfo();
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Manage Admins"
          description="Add, edit, and remove admins."
        />
        <Link href={`/${admin?.userId}/superAdmin/manage-admins/create`}>
          {/* <Button
            // disabled={loading}
            variant="secondary"
            size="sm"
            // onClick={() => setOpen(true)}
            // onClick={() => dispatch(openModal())}
          >
            <PlusSquare className="h-4 w-4" />
          </Button> */}
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </Link>
      </div>
      <AdminModal
        title="Create Admin"
        description="Add a new admin to your organization."
      >
        <AdminFormData />
      </AdminModal>
      <Separator />
    </>
  );
};

export default CreateAdminForm;
