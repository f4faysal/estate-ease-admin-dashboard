"use client";
import { PlusSquare } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { openModal } from "@/redux/features/modal/modalSlice";

const CreateAdminForm = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  // const handleOpenModal = () => {
  //   dispatch(openModal());
  // };

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     dispatch(openModal());
  //   }
  // }, [isModalOpen, dispatch]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading
          title="Manage Admins"
          description="Add, edit, and remove admins."
        />
        <Button
          // disabled={loading}
          variant="secondary"
          size="sm"
          // onClick={() => setOpen(true)}
          onClick={() => dispatch(openModal())}
        >
          <PlusSquare className="h-4 w-4" />
        </Button>
      </div>
      <Button onClick={() => dispatch(openModal())}>Open Modal</Button>

      <Separator />
    </div>
  );
};

export default CreateAdminForm;
