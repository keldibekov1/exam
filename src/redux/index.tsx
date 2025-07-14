import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    fake: () => ({name: "fake slice"}),
    // write your slice below
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
