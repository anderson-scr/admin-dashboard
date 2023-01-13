import { createSlice } from "@reduxjs/toolkit";

export const messageModalSlice = createSlice({
  name: "Show Modal",
  initialState: {
    showMessageModal: false,
    icon: "warning",
    title: "No info past to Modal",
    bodyText: "Please, pass some value trough the function to render a new text inside the modal body."
  },
  reducers: {
    showModal: (state, actions) => {
      state.icon = actions.payload[0];
      state.title = actions.payload[1];
      state.bodyText = actions.payload[2];

      state.showMessageModal? state.showMessageModal = false : state.showMessageModal = true;
    },
    hideModal: state => {
      state.showMessageModal? state.showMessageModal = false : state.showMessageModal = true;
    }
  }
});


export const { showModal, hideModal } = messageModalSlice.actions;
export default messageModalSlice.reducer;