"use client";

import { Button } from "@/components/ui/button";
import { openModal } from "@/redux/features/modal/modalSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const SuperAdminDashboard = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const notify = () => toast("Here is your toast.");

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
      <p>Hello admin dashboard</p>
      {/* <AdminModal /> */}
      <Button onClick={() => dispatch(openModal())}>Open Modal</Button>
      <Button onClick={() => toast.success("User logged in successfully!")}>
        Toast
      </Button>
      <Button onClick={notify}>Make me a toast</Button>
      {/* <Toaster /> */}
    </div>
  );
};

export default SuperAdminDashboard;
