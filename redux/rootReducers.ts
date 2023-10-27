import { baseApi } from "./api/baseApi";
import storeModal from "./features/modal/modalSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  modal: storeModal,
};
