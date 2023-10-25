import { createSlice } from "@reduxjs/toolkit";

interface IUseStoreModalStore {
  isOpen: boolean;
}

const initialState: IUseStoreModalStore = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "storeModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
