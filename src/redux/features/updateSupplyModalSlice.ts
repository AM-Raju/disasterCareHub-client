import { createSlice } from "@reduxjs/toolkit";

type TUpdateSupplyModalState = {
  isOpen: boolean;
  id: string;
};

const initialState: TUpdateSupplyModalState = {
  isOpen: false,
  id: "",
};

export const updateSupplyModalSlice = createSlice({
  name: "updateSupplyModal",
  initialState,
  reducers: {
    openUpdateSupplyModal: (state, action) => {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeUpdateSupplyModal: (state) => {
      state.isOpen = false;
      state.id = "";
    },
  },
});

export const { openUpdateSupplyModal, closeUpdateSupplyModal } = updateSupplyModalSlice.actions;

export default updateSupplyModalSlice.reducer;
