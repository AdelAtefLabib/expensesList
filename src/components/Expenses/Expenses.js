import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
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
  return (
    <Card>
      <ExpenseFilter
        onSelectFilterValue={selectFilterValue}
        selected={selectYear}
      />
      {filterByYear?.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};
export default Expenses;
