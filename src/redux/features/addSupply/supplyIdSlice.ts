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
  },
});

export const { setSupplyId } = supplyIdSlice.actions;

export default supplyIdSlice.reducer;
