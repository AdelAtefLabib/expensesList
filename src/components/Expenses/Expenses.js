import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses = ({ Expenses }) => {
  const [selectValue, setSelectValue] = useState();
  const [filterArray,setFilterArray] = useState(Expenses)
  const selectFilterValue = (selectedVal) => {
    setSelectValue(selectedVal);
    console.log('selectValue',selectValue)
      const filteredArray = Expenses.filter((item) => {
        let itemDate = new Date(item.date).getFullYear();
        return itemDate === Number(selectedVal);
      })
      setFilterArray(filteredArray)
   
     
  };

  return (
    <>
      <ExpenseFilter onSelectFilterValue={selectFilterValue} selected={selectValue} />
      {filterArray?.map((item) => {
        return (
          <Card key={item.id}>
            <ExpenseItem item={item}></ExpenseItem>
          </Card>
        );
      })}
    </>
  );
};
export default Expenses;
