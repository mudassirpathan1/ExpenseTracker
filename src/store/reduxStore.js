import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './loginSlice';
import expenseReducer from './expenseSlice';
import themeReducer from './themeSlice'

const store = configureStore({
  reducer: { login: loginReducer, expense: expenseReducer, theme: themeReducer },
});

export default store;
