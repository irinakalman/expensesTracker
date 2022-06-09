import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(''); // useState is a hook
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {  // event is an object
        setEnteredTitle(event.target.value); // event.target.value is the value of the input
        console.log(enteredTitle)
    }
    

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value); // useState is saving the value, in other cases it can update and re render the function
        console.log(enteredAmount);
    }
    

    // eslint-disable-next-line no-unused-vars
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };
    
    const submitHandler =(event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} 
          onChange={titleChangeHandler} /> 
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min= '0.01' step ='0.01' value={enteredAmount}
           onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' max= '2022-12-31' value={enteredDate} 
          onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;