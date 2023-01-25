import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newExpenseItemObj =  {...formValues,date:new Date(formValues.enteredDate)}
    console.log("formValues", newExpenseItemObj);
    props.onSaveExpenseItem(newExpenseItemObj)
    //clear what user input
    setFormValues({ enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",})
  };
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [amount, setAmount] = useState('');
  //   const [selectedDate,setSelectedDate] =  useState('')

  const [formValues, setFormValues] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const handleTitleChanged = (e) => {
    // setEnteredTitle(event.target.value);
    //setFormValues({...formValues, title: e.target.value });
    setFormValues((prevState)=>{
        return{
            ...prevState,enteredTitle:e.target.value
        }
    })
  };
  const handleAmountChanged = (e) => {
    // setFormValues({...formValues, enteredAmount: e.target.value})
     setFormValues((prevState)=>{
        return{...prevState, enteredAmount:e.target.value}
    })
  };
  const handleSelectedDateChanged = (e) => {
    //  setFormValues({...formValues,enteredDate:e.target.value})
        setFormValues((prevState)=>{
            return{...prevState, enteredDate:e.target.value}
        })
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            className="new-expense__control input"
            value={formValues.enteredTitle}
            onChange={handleTitleChanged}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            min={"0"}
            step="0.1"
            className="new-expense__control input"
            onChange={handleAmountChanged}
            value={formValues.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            min="1-2-2019"
            max="1-2-2024"
            className="new-expense__control input"
            value={formValues.enteredDate}
            onChange={handleSelectedDateChanged}
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
