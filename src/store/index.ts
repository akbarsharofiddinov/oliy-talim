import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./Languages/languageSlice";

export const store = configureStore({
  reducer: {
    languages: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
