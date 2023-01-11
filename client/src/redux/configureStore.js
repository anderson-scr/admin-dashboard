import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import messageModalSlice from "./slices/messageModalSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    showMessageModal: messageModalSlice
  }
})