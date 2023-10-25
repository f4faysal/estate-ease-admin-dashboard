import { useDispatch, useSelector } from "react-redux";

import { Modal } from "@/components/ui/modal";
import { closeModal, openModal } from "@/redux/features/modal/modalSlice";

const StoreModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <Modal
      title="Creat Store"
      discrption="Add a new store to manage your products and categories"
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    >
      <p>Childern</p>
    </Modal>
  );
};

export default StoreModal;
