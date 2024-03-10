import { createSlice } from "@reduxjs/toolkit";

type TRoleState = {
  role: null | string;
};

const initialState: TRoleState = {
  role: null,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action) => {
      // console.log("role payload", action.payload);

      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
