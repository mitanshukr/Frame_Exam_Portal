const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userId: null,
  email: null,
  authToken: null,
  expiry: null,
  isAuthenticated: false,
};

if (localStorage.getItem("authToken")) {
  initialState.isAuthenticated = true;
  initialState.authToken = localStorage.getItem("authToken");
  initialState.userId = localStorage.getItem("userId");
  initialState.email = localStorage.getItem("email");
}

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.authToken = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("authToken", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("email", action.payload.email);
    },
    logout(state) {
      state = {};
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
    },
  },
});

export default authSlice;
