import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const onAddExpense=(expense)=>{
        props.onAddExpense({...expense,id: Number(Math.random())})
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseItem={onAddExpense} />
    </div>
  );
};
export default NewExpense;
