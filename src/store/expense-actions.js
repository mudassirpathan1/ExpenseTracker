import { expenseAction } from "./expenseSlice";

// adding expense data
export const addingExpense = (inputData, emailUrl, removeInputData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://expense-tracker-e8647-default-rtdb.firebaseio.com/${emailUrl}expenses.json`,
        {
          method: 'POST',
          body: JSON.stringify(inputData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await res.json();
      if (res.ok) {
        removeInputData();
        const newData = {
          id: data.name,
          ...inputData,
        };
        dispatch(
          expenseAction.addExpense({
            expenses: newData,
            totalAmount: newData.amount,
          })
        );
      } else {
        throw data.error;
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

// fetching data on refresh
export const requestingExpense = (emailUrl) => {
  return async(dispatch) => {
    try {
      const res = await fetch(
        `https://expense-tracker-e8647-default-rtdb.firebaseio.com/${emailUrl}expenses.json`
      );

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        let retrievedData = [];
        let totalAmount = 0;

        for (let key in data) {
          retrievedData.push({ id: key, ...data[key] });
          totalAmount = Number(totalAmount) + Number(data[key].amount);
        }
        dispatch(
          expenseAction.replaceExpense({
            expenses: retrievedData,
            totalAmount: totalAmount,
          })
        );
      } else {
        throw data.error;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}