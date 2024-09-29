

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // corrected to userReducer

export const store = configureStore({
  reducer: { user: userReducer }, // corrected to userReducer
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
