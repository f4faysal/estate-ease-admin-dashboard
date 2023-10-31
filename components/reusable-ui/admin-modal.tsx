"use client";

import { useDispatch, useSelector } from "react-redux";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import { Modal } from "@/components/ui/modal";
import { closeModal, openModal } from "@/redux/features/modal/modalSlice";

const formSchema = z.object({
  name: z.string().min(1),
});

interface ModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const AdminModal: React.FC<ModalProps> = ({ children, title, description }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
    }
  };

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    >
      {children}
    </Modal>
  );
};

export default AdminModal;
