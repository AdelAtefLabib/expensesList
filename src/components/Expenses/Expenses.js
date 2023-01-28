import React ,{useState}from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
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
      <Card>
      {filterArray?.map((item) => {
        return (
            <ExpenseItem key={item.id} item={item}></ExpenseItem>
        );
      })}
      </Card>
    </>
  );
};
export default Expenses;
