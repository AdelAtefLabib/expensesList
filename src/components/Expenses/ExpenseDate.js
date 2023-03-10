import Card from "../UI/Card";
import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  const currentMonth = date?.toLocaleString("en-US", { month: "long" });
  const currentDay = date?.toLocaleString("en-US", { day: "2-digit" });
  const currentYear = date?.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{currentMonth}</div>
      <div className="expense-date__year">{currentYear}</div>
      <div className="expense-date__day">{currentDay}</div>
    </Card>
  );
};
export default ExpenseDate;
