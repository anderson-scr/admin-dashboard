import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "Theme",
  initialState: {
    mode: "dark"
  },
  reducers: {
    changeTheme: state => {
      state.mode === "dark"? state.mode = "light" : state.mode = "dark";
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;