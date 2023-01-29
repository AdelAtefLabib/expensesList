import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const onSaveExpenseItemFunc=(expenseData)=>{
        props.onAddExpense({...expenseData,id: Number(Math.random()).toString()})
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseItem={onSaveExpenseItemFunc} />
    </div>
  );
};
export default NewExpense;
