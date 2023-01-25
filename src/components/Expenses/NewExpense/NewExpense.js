import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const onSaveExpenseItemFunc=(expenseData)=>{
        const expenseDataObj = {...expenseData,id: Number(Math.random())}

        props.parentToChild(expenseDataObj)

        // props.onSaveExpense(expenseDataObj)
        console.log('NewExpenseScreen',expenseDataObj);
       // return ExpenseDataObj
    }
    
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseItem={onSaveExpenseItemFunc} />
    </div>
  );
};
export default NewExpense;
