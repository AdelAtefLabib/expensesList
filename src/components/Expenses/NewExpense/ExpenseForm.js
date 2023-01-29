import React, { useState } from "react";
import "./ExpenseForm.css";
const initialFormValues={
  title: '',
  amount: '',
  date: '',
}
const ExpenseForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpenseItemObj =  {...formValues,date:new Date(formValues.date)}
    props.onSaveExpenseItem(newExpenseItemObj)
    //clear what user input
    setFormValues(initialFormValues)
  };
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [amount, setAmount] = useState('');
  //   const [selectedDate,setSelectedDate] =  useState('')

  const [formValues, setFormValues] = useState(initialFormValues);
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    //setFormValues({...formValues, title: e.target.value });
    setFormValues((prevState)=>{
        return{
            ...prevState,title:event.target.value
        }
    })
  };
  const amountChangeHandler = (event) => {
    // setFormValues({...formValues, enteredAmount: e.target.value})
     setFormValues((prevState)=>{
        return{...prevState, amount:event.target.value}
    })
  };
  const dateChangeHandler = (event) => {
    //  setFormValues({...formValues,enteredDate:e.target.value})
        setFormValues((prevState)=>{
          console.log('dateChangeHandler--Value',event.target.value);
            return{...prevState, date:event.target.value}
        })
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
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
