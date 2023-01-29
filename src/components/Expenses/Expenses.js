import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
const Expenses = ({ Expenses }) => {
  const [selectValue, setSelectValue] = useState();
  const [filterArray, setFilterArray] = useState(Expenses);

  const selectFilterValue = (selectedVal) => {
    setSelectValue(selectedVal);
    console.log("selectValue", selectValue);
    const filteredArray = Expenses.filter((item) => {
      let itemDate = new Date(item.date).getFullYear();
      return itemDate === Number(selectedVal);
    });
    setFilterArray(filteredArray);
  };
  useEffect(() => {
    setFilterArray(Expenses);
  },[Expenses]);

  return (
    <Card>
      <ExpenseFilter
        onSelectFilterValue={selectFilterValue}
        selected={selectValue}
      />
      {
        filterArray?.map((expense) => {
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
