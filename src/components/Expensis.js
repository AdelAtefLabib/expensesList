import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
const Expenses = ({ Expenses }) => {
  return Expenses?.map((item) => {
    return (
      <div className="expenses" key={item.id}>
        <ExpenseItem item={item}></ExpenseItem>
      </div>
    );
  });
};
export default Expenses;
