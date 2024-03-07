import { createSlice } from "@reduxjs/toolkit";

type TSupplyId = {
  id: string;
};

const initialState: TSupplyId = {
  id: "",
};

export const supplyIdSlice = createSlice({
  name: "supplyId",
  initialState,
  reducers: {
    setSupplyId: (state, action) => {
      state.id = action?.payload;
    },
    removeSupplyId: (state) => {
      state.id = "";
    },
  },
});

export const { setSupplyId, removeSupplyId } = supplyIdSlice.actions;

export default supplyIdSlice.reducer;
