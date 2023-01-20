import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = ({ Expenses }) => {
  return Expenses?.map((item) => {
    return (
      <Card className="expenses" key={item.id}>
        <ExpenseItem item={item}></ExpenseItem>
      </Card>
    );
  });
};
export default Expenses;
