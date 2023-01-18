import "./ExpenseDate.css"
const ExpenseItemDate = ({ date }) => {
  const currentMonth = date?.toLocaleString("en-US", { month: "long" });
  const currentDay = date?.toLocaleString("en-US", { day: "numeric" });
  const currentYear = date?.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{currentMonth}</div>
      <div className="expense-date__year">{currentYear}</div>
      <div className="expense-date__day">{currentDay}</div>
    </div>
  );
};
export default ExpenseItemDate;
