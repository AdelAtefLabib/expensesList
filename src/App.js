import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import "./App.css";
const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];
const App = () => {
  const [expenses, setExpenses] =useState(initialExpenses)
  const addExpenseHandler=(expenseItem)=>{
    // console.log('App ' , {...expenseItem,key:Math.floor(Math.random() * 100)});
    //you can use ... operator not only for object but also for array
    // setExpenses([expenseItem,...expenses])
    setExpenses(prevExpenses=>{
      return [expenseItem,...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses Expenses={expenses} />
    </div>
  );
};

export default App;
