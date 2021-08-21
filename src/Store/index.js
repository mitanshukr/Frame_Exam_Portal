import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthStore";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export default store;
