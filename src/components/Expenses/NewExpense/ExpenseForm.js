import React, { useState } from "react";
import "./ExpenseForm.css";
const initial_Values = { title: "", amount: "", date: "" };
const ExpenseForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseItem({
      ...formValues,
      date: new Date(formValues.date),
    });
    //clear what user input
    setFormValues(initial_Values);
  };

  const [formValues, setFormValues] = useState(initial_Values);
  const titleChangeHandler = (e) => {
    // setEnteredTitle(event.target.value);
    //setFormValues({...formValues, title: e.target.value });
    setFormValues((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    // setFormValues({...formValues, enteredAmount: e.target.value})
    setFormValues((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    //  setFormValues({...formValues,enteredDate:e.target.value})
    setFormValues((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            className="new-expense__control input"
            value={formValues.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            min={"0"}
            step="0.1"
            className="new-expense__control input"
            onChange={amountChangeHandler}
            value={formValues.amount}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            min="1-2-2019"
            max="1-2-2024"
            className="new-expense__control input"
            value={formValues.date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new_expense__actions">
          <button onClick={props.CancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
       
      </div>
    </form>
  );
};
export default ExpenseForm;
