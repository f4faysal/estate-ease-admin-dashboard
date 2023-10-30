import { baseApi } from "./api/baseApi";
import adminModal from "./features/modal/modalSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  modal: adminModal,
};
