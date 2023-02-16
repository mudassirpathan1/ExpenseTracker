import { createSlice } from '@reduxjs/toolkit';

const loggedIn = localStorage.getItem('idToken') ? true : false;
const initialState = { isLoggedIn: loggedIn };

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('idToken');
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;