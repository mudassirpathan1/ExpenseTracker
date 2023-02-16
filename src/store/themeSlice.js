import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: 'light', premium: false };

const themeSlice = createSlice({
  name: 'Theme',
  initialState: initialState,
  reducers: {
    dark(state) {
      state.theme = 'dark';
    },
    light(state) {
      state.theme = 'light';
    },
    premium(state, action) {
      state.premium = action.payload;
      if(action.payload) {
        state.theme = 'dark';
      }
      if(!action.payload && state.theme === 'dark') {
        state.theme = 'light';
      }
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
