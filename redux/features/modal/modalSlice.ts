import { createSlice } from "@reduxjs/toolkit";

interface IUseadminModalStore {
  isOpen: boolean;
}

const initialState: IUseadminModalStore = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "adminModal",
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
