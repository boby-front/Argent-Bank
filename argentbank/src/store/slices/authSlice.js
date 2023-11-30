import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  user: null,
  isLoggedIn: token ? true : false,
  error: null,
  firstName: null,
  lastName: null,
  userName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      state.firstName = null;
      state.lastName = null;
      state.userName = null;
    },
    userInfos: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { loginSuccess, loginFailure, logout, userInfos } =
  authSlice.actions;
export default authSlice.reducer;
