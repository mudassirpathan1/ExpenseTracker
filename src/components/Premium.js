import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Premium.module.css';
import { themeActions } from '../store/themeSlice';

const Premium = () => {
  const dispatch = useDispatch();
  const expenseList = useSelector((state) => state.expense.expenses);
  const activatePremium = useSelector((state) => state.theme.premium);
  const totalAmount = useSelector((state) => state.expense.totalAmount);
  const themeMode = useSelector((state) => state.theme.theme);

  // creating the csv file to download
  const title = ['Category', 'Amount', 'Description'];
  const data = [title];

  expenseList.forEach((item) => {
    data.push([item.type, item.amount, item.description]);
  });

  const creatingCSV = data.map((row) => row.join(',')).join('\n');
  const blob = new Blob([creatingCSV]);

  // activating premium membership
  const activatePremiumHandler = () => {
    dispatch(themeActions.premium(true));
  };

  // dark mode handler
  const darkModeHandler = () => {
    if (themeMode === 'light') {
      dispatch(themeActions.dark());
    } else {
      dispatch(themeActions.light());
    }
  };

  if (totalAmount <= 10000 && activatePremium) {
    dispatch(themeActions.premium(false));
  }

  return (
    <React.Fragment>
      {totalAmount > 10000 && (
        <div className={classes.activate}>
          {!activatePremium && (
            <button onClick={activatePremiumHandler}>Activate Premium</button>
          )}
          {activatePremium && (
            <div>
              <button onClick={darkModeHandler}>
                {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
              <a href={URL.createObjectURL(blob)} download='expenses.csv'>
                Download Your Expenses
              </a>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Premium;
