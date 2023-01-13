import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import messageModalSlice from "./slices/messageModalSlice";
import headerTitleSlice from "./slices/headerTitleSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    showMessageModal: messageModalSlice,
    headerTitle: headerTitleSlice
  }
})