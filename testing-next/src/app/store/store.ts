import { configureStore } from "@reduxjs/toolkit";
import { wishlistApi } from "@/app/service/api";

export const store = configureStore({
  reducer: {
    [wishlistApi.reducerPath]: wishlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wishlistApi.middleware),
});
