import React from 'react';

import classes from './ExpenseItems.module.css';

const ExpenseItems = (props) => {

  const editHandler = async() => {
    try{
      const res = await fetch(`https://expense-tracker-e8647-default-rtdb.firebaseio.com/${props.emailUrl}expenses/${props.item.id}.json`,{
        method: 'DELETE'
      })
      const data = await res.json();
      if(res.ok) {
        props.edit(props.item)
      } else {
        throw data.error;
      }
    }
    catch(err) {
      console.log(err.message)
    }
  }

  const deleteHandler = async() => {
    try{
      const res = await fetch(`https://expense-tracker-e8647-default-rtdb.firebaseio.com/${props.emailUrl}expenses/${props.item.id}.json`,{
        method: 'DELETE'
      })
      const data = await res.json();
      if(res.ok) {
        props.deleted(props.item)
      } else {
        throw data.error;
      }
    }
    catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className={classes.item}>
      <span className={classes.type}>{props.item.type}</span>
      <span className={classes.amount}>Rs. {props.item.amount}</span>
      <span className={classes.description}>{props.item.description}</span>
      <div className={classes.button}>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItems;

// sanjay