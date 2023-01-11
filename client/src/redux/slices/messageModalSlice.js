import { createSlice } from "@reduxjs/toolkit";

export const messageModalSlice = createSlice({
  name: "Show Modal",
  initialState: {
    showMessageModal: false
  },
  reducers: {
    showModal: state => {
      state.showMessageModal? state.showMessageModal = false : state.showMessageModal = true;
    }
  }
});

export const { showModal } = messageModalSlice.actions;
export default messageModalSlice.reducer;