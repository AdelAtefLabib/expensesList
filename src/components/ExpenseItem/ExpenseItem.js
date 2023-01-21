import React ,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate";
const ExpenseItem = (props) => {
  // imperative way
  // document.getElementById("root").addEventListener()
  const clickHandler=()=>{
    setTitle("updated")
    console.log('ExpenseItem evaluated by React');
  }
  const [title,setTitle] = useState(props.item.title)
  
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.item.date} />
          <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.item.amount}</div>
            <button onClick={clickHandler}>change title</button>
          </div>
        </div>
      );
};
export default ExpenseItem;
