"use client";

import { openModal } from "@/redux/features/modal/modalSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SetupPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  useEffect(() => {
    if (!isModalOpen) {
      dispatch(openModal());
    }
  }, [isModalOpen, dispatch]);

  return null;
};

export default SetupPage;
