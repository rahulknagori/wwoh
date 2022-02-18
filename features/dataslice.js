import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: {},
};

export const data = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    postData: (state, { payload }) => {
      state.postData = payload;
    },
  },
});

export const { postData } = data.actions;
export default data.reducer;
