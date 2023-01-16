import { createSlice } from "@reduxjs/toolkit";

export const headerTitleSlice = createSlice({
  name: "Theme",
  initialState: {
    title: "Dashboard",
    hamburgerIsOpenSlice: "open"
  },
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    handleHamburgerIsOpenSlice: state => {
      state.hamburgerIsOpenSlice? state.hamburgerIsOpenSlice = "" : state.hamburgerIsOpenSlice = "open";
    }
  }
});

export const { changeTitle, handleHamburgerIsOpenSlice } = headerTitleSlice.actions;
export default headerTitleSlice.reducer;