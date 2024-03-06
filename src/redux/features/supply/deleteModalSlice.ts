import { createSlice } from "@reduxjs/toolkit";

type TDeleteModalState = {
  isOpen: boolean;
  id?: string;
};

const initialState: TDeleteModalState = {
  isOpen: false,
};

export const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal: (state, action) => {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeDeleteModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;

export default deleteModalSlice.reducer;
