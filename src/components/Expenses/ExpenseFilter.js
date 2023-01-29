import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const onChangeHandler = (event) => {
    props.onSelectFilterValue(event.target.value);
  };
  const options = [
    {
      Text: "Select",
      value: "0",
    },
    { Text: 2019, value: "2019" },
    { Text: 2020, value: "2020" },
    { Text: 2021, value: "2021" },
    { Text: 2022, value: "2022" },
    { Text: 2023, value: "2023" },
    { Text: 2024, value: "2024" },
  ];
  return <div className="expenses-filter">
    <div className="expenses-filter__control">
         <label>Filter by year</label>
         <select onChange={onChangeHandler} value={props.selected}>
          {
            options.map(option=>{
              return<option key={option.Text} value={option.value}>{option.Text}</option>
            })
          }
          </select>

    </div>
  </div>;
};
export default ExpenseFilter;
