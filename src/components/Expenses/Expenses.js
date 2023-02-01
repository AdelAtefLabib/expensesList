import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensisChart";
const Expenses = ({ Expenses }) => {
  const [selectYear, setSelectYear] = useState();

  const selectFilterValue = (selectedVal) => {
    setSelectYear(selectedVal);
  };
  const filterByYear = Expenses.filter((expense) => {
    if (selectYear && selectYear !== "0") {
      return expense.date.getFullYear().toString() === selectYear;
    } else {
      return Expenses;
    }
  });
 
  let expenseContent= <p>No Expenses Found</p>
  if (filterByYear.length>0){ 
    expenseContent =filterByYear?.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          title={expense.title}
          date={expense.date}
        />
      );
    })
  }
    
  return (
    <Card>
      <ExpenseFilter
        onSelectFilterValue={selectFilterValue}
        selected={selectYear}
      />
      <ExpensesChart Expenses={filterByYear}/>
     {expenseContent}
    </Card>
  );
};
export default Expenses;
