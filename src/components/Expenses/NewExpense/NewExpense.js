import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const onAddExpense = (expense) => {
    props.onAddExpense({ ...expense, id: Number(Math.random()) });
    setShowExpenseForm(!showExpenseForm);
  };

  const showAddExpenseHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };
  const CancelHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };
  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseItem={onAddExpense}
          onCancelHandler={CancelHandler}
        />
      )}
      {!showExpenseForm && (
        <div className="new_expense__actions">
          <button onClick={showAddExpenseHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};
export default NewExpense;
