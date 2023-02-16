import { createSlice } from '@reduxjs/toolkit';

const initialState = { expenses: [], totalAmount: 0, firstTime: true };

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: initialState,
  reducers: {
    firstTime(state, action) {
      state.firstTime = action.payload;
    },
    replaceExpense(state, action) {
      state.firstTime = false;
      state.expenses = action.payload.expenses;
      state.totalAmount = action.payload.totalAmount;
      console.log(state);
    },
    addExpense(state, action) {
      state.expenses = [...state.expenses, action.payload.expenses];
      state.totalAmount =
        Number(state.totalAmount) + Number(action.payload.totalAmount);
      // console.log(state);
    },
    removeExpense(state, action) {
      state.expenses = action.payload.expenses;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const expenseAction = expenseSlice.actions;
export default expenseSlice.reducer;
