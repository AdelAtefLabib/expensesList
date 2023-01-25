import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import "./App.css";
const expenses = [
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
  }, {
    id: "e5",
    title: "Papers",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e6",
    title: "Papers",
    amount: 1000.12,
    date: new Date(2019, 7, 14),
  },
];
const App = () => {
  const parentToChild=(expenseItem)=>{
    console.log('App ' , {...expenseItem,key:Math.floor(Math.random() * 100)});
  }
  return (
    <div>
      <NewExpense parentToChild={parentToChild}/>
      <Expenses Expenses={expenses} />
    </div>
  );
};

export default App;
