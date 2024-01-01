"use client";

import { BadgeCheck, Copy, Edit, MoreHorizontal } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { VerifiedModal } from "@/components/reusable-ui/VarifideModal";
import { useGetUsersQuery, useUpdateUserMutation } from "@/redux/api/usersApi";
import { getUserInfo } from "@/services/auth.service";
import { RentUserColumn } from "./columns";

interface CellActionProps {
  data: RentUserColumn;
}

export const CellAction: React.FC<any> = ({ data: user }) => {
  const { userId }: any = getUserInfo();

  const { data, isLoading } = useGetUsersQuery({});

  const [UpdateUser] = useUpdateUserMutation();

  const findUser = data?.find((item: any) => item.id === user.id);

  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      await UpdateUser({
        id: user.id,
        data: {
          nidVerified: true,
        },
      });
      setLoading(true);
      window.location.reload();
      toast.success("User verified successfully.");
    } catch (error) {
      toast.error(
        "Make sure you removed all categories using this billboard first."
      );
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("User Id copied.");
  };

  return (
    <>
      <VerifiedModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/${userId}/superAdmin/manage-rent-users/${data.id}`)
            }
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          {findUser?.nidVerified ? (
            <></>
          ) : (
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <BadgeCheck className="mr-2 h-4 w-4" /> Verified NID
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
