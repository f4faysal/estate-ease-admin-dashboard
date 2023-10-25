"use client";

import { useEffect } from "react";

import StoreModal from "@/components/reusable-ui/store-modal";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  // const handleOpenModal = () => {
  //   dispatch(openModal());
  // };

  useEffect(() => {
    if (!isModalOpen) {
      dispatch(openModal());
    }
  }, [isModalOpen, dispatch]);

  return (
    <div>
      <p>Hello admin dashboard</p>
      <StoreModal />
    </div>
  );
};

export default Dashboard;
