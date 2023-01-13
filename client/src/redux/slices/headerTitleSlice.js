import { createSlice } from "@reduxjs/toolkit";

export const headerTitleSlice = createSlice({
  name: "Theme",
  initialState: {
    title: "Dashboard"
  },
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { changeTitle } = headerTitleSlice.actions;
export default headerTitleSlice.reducer;