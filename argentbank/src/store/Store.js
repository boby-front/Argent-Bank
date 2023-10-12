import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

//Parametrage du Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
