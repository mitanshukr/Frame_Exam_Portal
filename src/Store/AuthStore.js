const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userId: null,
  email: null,
  authToken: null,
  expiry: null,
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
